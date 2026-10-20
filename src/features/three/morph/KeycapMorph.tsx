"use client";

import { useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { keycapGeometry } from "@/features/three/shared/keycap";
import { anchorElement, readAnchor } from "@/features/three/stage/anchor";
import { runtime, smoothstep } from "@/lib/runtime";
import { randomDirection, seeded } from "@/lib/random";

export type MorphState = {
  /** Anchor progress through the viewport (0 → 1). */
  progress: number;
  /** Keycaps flying into shape (0 → 1). */
  assemble: number;
  /** Solid object revealed bottom to top (0 → 1). */
  build: number;
  /** Everything after the build: for extra beats (star, A/B split...). */
  after: number;
  hovered: boolean;
};

type Props = {
  anchorId: string;
  /** Geometry whose surface the keycaps land on. */
  sample: THREE.BufferGeometry;
  count?: number;
  /** Fraction of the anchor box the object fills. */
  fill?: number;
  state: React.RefObject<MorphState>;
  children: ReactNode;
};

const dummy = new THREE.Object3D();
const qStart = new THREE.Quaternion();
const up = new THREE.Vector3(0, 0, 1);
const color = new THREE.Color();

/**
 * "Code becomes product": a swarm of tiny keycaps assembles on the surface of
 * an object, then a scanline turns the wireframe blueprint into the finished,
 * solid object — all driven by scroll.
 */
export function KeycapMorph({
  anchorId,
  sample,
  count = 360,
  fill = 0.82,
  state,
  children,
}: Props) {
  const root = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const solid = useRef<THREE.Group>(null);
  const ghost = useRef<THREE.Group>(null);
  const scan = useRef<THREE.Mesh>(null);
  const swarm = useRef<THREE.InstancedMesh>(null);

  const bounds = useMemo(() => {
    sample.computeBoundingBox();
    return sample.boundingBox!.clone();
  }, [sample]);

  const particles = useMemo(() => {
    const rand = seeded(count * 7919 + sample.attributes.position.count);
    const sampler = new MeshSurfaceSampler(new THREE.Mesh(sample));
    // setRandomGenerator exists at runtime but is missing from @types/three.
    (sampler as unknown as { randomFunction: () => number }).randomFunction = rand;
    sampler.build();
    const position = new THREE.Vector3();
    const normal = new THREE.Vector3();
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3()).length();
    return Array.from({ length: count }, () => {
      sampler.sample(position, normal);
      const dir = randomDirection(rand, new THREE.Vector3());
      const start = center.clone().addScaledVector(dir, size * (0.9 + rand() * 0.9));
      start.x += size * 0.6; // arrive from the side, like typed input
      return {
        start,
        target: position.clone(),
        startQ: new THREE.Quaternion().setFromEuler(
          new THREE.Euler(rand() * 6, rand() * 6, rand() * 6),
        ),
        targetQ: new THREE.Quaternion().setFromUnitVectors(up, normal.clone().normalize()),
        delay: rand() * 0.35,
        swirl: randomDirection(rand, new THREE.Vector3()).multiplyScalar(0.6 + rand()),
        accent: rand() < 0.12,
      };
    });
  }, [sample, count, bounds]);

  const swarmGeometry = useMemo(() => {
    const g = keycapGeometry(1, true).clone();
    g.scale(0.11, 0.11, 0.11);
    return g;
  }, []);

  // Clipping planes are in world space and updated every frame.
  const planes = useMemo(
    () => ({
      solid: new THREE.Plane(new THREE.Vector3(0, -1, 0), 0),
      ghost: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
    }),
    [],
  );

  // Apply the build-up clipping to the solid object and create a wireframe
  // "blueprint" copy of it that shows above the scanline.
  useLayoutEffect(() => {
    const solidGroup = solid.current;
    const ghostGroup = ghost.current;
    if (!solidGroup || !ghostGroup) return;
    const wire = new THREE.MeshBasicMaterial({
      color: "#7c5cff",
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      clippingPlanes: [planes.ghost],
      depthWrite: false,
    });
    const ghosts: THREE.Mesh[] = [];
    solidGroup.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((m) => {
        m.clippingPlanes = [planes.solid];
        m.clipShadows = true;
      });
      if (mesh.userData.noGhost) return;
      const copy = new THREE.Mesh(mesh.geometry, wire);
      mesh.updateWorldMatrix(true, false);
      copy.matrixAutoUpdate = false;
      copy.matrix.copy(solidGroup.matrixWorld.clone().invert().multiply(mesh.matrixWorld));
      ghostGroup.add(copy);
      ghosts.push(copy);
    });
    return () => {
      ghosts.forEach((g) => ghostGroup.remove(g));
      wire.dispose();
    };
  }, [planes]);

  useFrame((frame) => {
    const group = root.current;
    const mesh = swarm.current;
    if (!group || !mesh || !spin.current) return;
    const anchor = readAnchor(anchorElement(anchorId));
    if (!anchor || !anchor.visible) {
      group.visible = false;
      return;
    }
    group.visible = true;

    const reduced = runtime.reducedMotion;
    const p = anchor.progress;
    const s = state.current;
    s.progress = p;
    s.assemble = reduced ? 1 : smoothstep(0.08, 0.42, p);
    s.build = reduced ? 1 : smoothstep(0.4, 0.56, p);
    s.after = reduced ? 1 : smoothstep(0.56, 0.7, p);

    // Fit the object inside its DOM slot.
    const size = bounds.getSize(new THREE.Vector3());
    const scale = Math.min(anchor.width / size.x, anchor.height / size.y) * fill;
    const center = bounds.getCenter(new THREE.Vector3());
    group.position.set(anchor.x, anchor.y, 0);
    group.scale.setScalar(scale);
    spin.current.position.set(-center.x, -center.y, -center.z);

    const t = frame.clock.elapsedTime;
    const pointerX = frame.pointer.x;
    group.rotation.y = Math.sin(t * 0.35) * 0.18 + pointerX * 0.15 + (1 - s.assemble) * 0.8;
    group.rotation.x = Math.sin(t * 0.27) * 0.06 - frame.pointer.y * 0.06;

    // Scanline height, in local and world space.
    const local = bounds.min.y - 0.2 + s.build * (size.y + 0.4);
    group.updateMatrixWorld();
    const worldLine = new THREE.Vector3(0, local, 0).applyMatrix4(spin.current.matrixWorld).y;
    // Once built, parts may move past the sampled bounds (star, fanned tiles), so stop clipping.
    planes.solid.constant = s.build >= 1 ? 1e6 : worldLine;
    planes.ghost.constant = -worldLine;

    if (ghost.current) ghost.current.visible = s.assemble > 0.6 && s.build < 1;
    if (scan.current) {
      scan.current.visible = s.build > 0 && s.build < 1;
      scan.current.position.y = local;
      (scan.current.material as THREE.MeshBasicMaterial).opacity =
        Math.sin(s.build * Math.PI) * 0.9;
    }

    // Swarm.
    for (let i = 0; i < particles.length; i++) {
      const pt = particles[i];
      const k = THREE.MathUtils.clamp((s.assemble - pt.delay) / 0.65, 0, 1);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      dummy.position.lerpVectors(pt.start, pt.target, e);
      dummy.position.addScaledVector(pt.swirl, Math.sin(e * Math.PI) * 0.8);
      if (k < 1) dummy.position.y += Math.sin(t * 1.5 + i) * 0.04 * (1 - e);
      qStart.copy(pt.startQ).slerp(pt.targetQ, e);
      dummy.quaternion.copy(qStart);
      // Keycaps melt into the material as the scanline passes them.
      const absorbed = smoothstep(-0.05, 0.25, pt.target.y - local);
      const appear = smoothstep(0, 0.12, p);
      dummy.scale.setScalar(appear * (s.build > 0 ? absorbed : 1));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  useLayoutEffect(() => {
    const mesh = swarm.current;
    if (!mesh) return;
    particles.forEach((pt, i) => {
      mesh.setColorAt(i, color.set(pt.accent ? "#7c5cff" : "#2a2b31"));
    });
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [particles]);

  const size = bounds.getSize(new THREE.Vector3());

  return (
    <group ref={root}>
      <group ref={spin}>
        <instancedMesh
          ref={swarm}
          args={[swarmGeometry, undefined, particles.length]}
          frustumCulled={false}
        >
          <meshPhysicalMaterial roughness={0.45} clearcoat={0.4} metalness={0.1} />
        </instancedMesh>
        <group ref={solid}>{children}</group>
        <group ref={ghost} />
        <mesh ref={scan} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[size.x * 1.25, size.z * 1.25 + 0.6]} />
          <meshBasicMaterial
            color="#a48bff"
            transparent
            opacity={0}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

export function useMorphState() {
  return useRef<MorphState>({ progress: 0, assemble: 0, build: 0, after: 0, hovered: false });
}
