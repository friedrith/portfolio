"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  type RapierRigidBody,
} from "@react-three/rapier";
import { RoundedBox } from "@react-three/drei";
import {
  KEYCAP_TOP,
  keycapGeometry,
  keycapLabel,
  keycapMaterial,
  type KeycapVariant,
} from "@/features/three/shared/keycap";
import { worldViewport, CONTENT_DEPTH } from "@/features/three/stage/anchor";
import { PORTRAIT_ID, PORTRAIT_VIEWBOX, silhouette } from "@/lib/portrait";
import { runtime } from "@/lib/runtime";

type Item =
  | { kind: "key"; label: string; width?: number; variant: KeycapVariant }
  | { kind: "atom" }
  | { kind: "ts" }
  | { kind: "pen" };

const ITEMS: Item[] = [
  { kind: "key", label: "T", variant: "dark" },
  { kind: "key", label: "F", variant: "dark" },
  { kind: "key", label: "⌘", variant: "accent" },
  { kind: "key", label: "K", variant: "dark" },
  { kind: "key", label: "{ }", variant: "titanium" },
  { kind: "key", label: "</>", variant: "dark" },
  { kind: "key", label: "Enter", width: 2.25, variant: "accent" },
  { kind: "atom" },
  { kind: "ts" },
  { kind: "pen" },
  { kind: "key", label: "⇧", width: 1.5, variant: "dark" },
  { kind: "key", label: "UX", variant: "titanium" },
  { kind: "key", label: "Esc", variant: "dark" },
  { kind: "key", label: "=>", variant: "dark" },
];

// Resting positions as fractions of the viewport, placed around the face like
// gravity-design.de's floating circles, and kept clear of the hero text (name
// block left of center, audience switch right of the head).
const HOMES: [number, number, number][] = [
  [-0.3, 0.18, 0.4],
  [-0.14, 0.32, -0.6],
  [0.2, 0.3, 1],
  [0.32, 0.22, 0],
  [-0.42, -0.3, 0.6],
  [0.42, -0.1, -0.4],
  [-0.26, -0.33, 1],
  [0.42, 0.12, 0.8],
  [-0.02, 0.38, 0.2],
  [0.4, 0.38, -0.8],
  [0.34, -0.3, 0.6],
  [-0.22, 0.04, -0.2],
  [0.2, -0.3, -0.4],
  [-0.42, 0.36, -1],
];

const PLANE = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const tmp = new THREE.Vector3();
const pointerWorld = new THREE.Vector3();

export function HeroPhysics({ active }: { active: boolean }) {
  const size = useThree((s) => s.size);
  const world = worldViewport(size.width / size.height, CONTENT_DEPTH);
  return (
    <Physics gravity={[0, 0, 0]} paused={!active}>
      <Walls width={world.width} height={world.height} />
      <SilhouetteColliders />
      <Items width={world.width} height={world.height} />
    </Physics>
  );
}

function Walls({ width, height }: { width: number; height: number }) {
  const t = 1;
  return (
    <RigidBody type="fixed" colliders={false}>
      <CuboidCollider args={[t, height, 4]} position={[-width / 2 - t, 0, 0]} />
      <CuboidCollider args={[t, height, 4]} position={[width / 2 + t, 0, 0]} />
      <CuboidCollider args={[width, t, 4]} position={[0, height / 2 + t, 0]} />
      <CuboidCollider args={[width, t, 4]} position={[0, -height / 2 - t, 0]} />
      <CuboidCollider args={[width, height, t]} position={[0, 0, -2.5 - t]} />
      <CuboidCollider args={[width, height, t]} position={[0, 0, 2.5 + t]} />
    </RigidBody>
  );
}

type Shape = {
  head: { x: number; y: number; r: number };
  shoulders: { x: number; y: number; r: number }[];
  torso: { x: number; y: number; hw: number; hh: number };
};

/** Invisible colliders shaped like the portrait, so objects bounce off the silhouette. */
function SilhouetteColliders() {
  const [shape, setShape] = useState<Shape | null>(null);

  useEffect(() => {
    const measure = () => {
      const el = document.getElementById(PORTRAIT_ID);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const world = worldViewport(vw / vh, CONTENT_DEPTH);
      // Position at scroll 0: the hero is sticky at the top of the page.
      const top = rect.top + window.scrollY;
      const scale = rect.width / PORTRAIT_VIEWBOX.width;
      const toWorld = (px: number, py: number) => ({
        x: ((rect.left + px * scale) / vw - 0.5) * world.width,
        y: -((top + py * scale) / vh - 0.5) * world.height,
      });
      const len = (px: number) => ((px * scale) / vh) * world.height;
      const { head, shoulders, torso } = silhouette;
      setShape({
        head: { ...toWorld(head.cx, head.cy), r: len(head.r) },
        shoulders: shoulders.map((s) => ({ ...toWorld(s.cx, s.cy), r: len(s.r) })),
        torso: { ...toWorld(torso.cx, torso.cy), hw: len(torso.hw), hh: len(torso.hh) },
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (!shape) return null;
  const key = `${shape.head.x.toFixed(2)}:${shape.head.y.toFixed(2)}:${shape.head.r.toFixed(2)}`;
  return (
    <RigidBody key={key} type="fixed" colliders={false}>
      <BallCollider args={[shape.head.r]} position={[shape.head.x, shape.head.y, 0]} />
      {shape.shoulders.map((s, i) => (
        <BallCollider key={i} args={[s.r]} position={[s.x, s.y, 0]} />
      ))}
      <CuboidCollider
        args={[shape.torso.hw, shape.torso.hh, 0.8]}
        position={[shape.torso.x, shape.torso.y, 0]}
      />
    </RigidBody>
  );
}

function Items({ width, height }: { width: number; height: number }) {
  const bodies = useRef<(RapierRigidBody | null)[]>([]);
  const dragging = useRef<number | null>(null);
  const camera = useThree((s) => s.camera);

  // Smaller and fewer objects on narrow screens.
  const itemScale = THREE.MathUtils.clamp(width / 11, 0.5, 1);
  const items = width < 6 ? ITEMS.slice(0, 9) : ITEMS;

  const homes = useMemo(
    () => HOMES.map(([fx, fy, z]) => new THREE.Vector3(fx * width, fy * height, z)),
    [width, height],
  );

  useEffect(() => {
    const release = () => {
      dragging.current = null;
      document.body.style.cursor = "";
    };
    window.addEventListener("pointerup", release);
    return () => window.removeEventListener("pointerup", release);
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 30);
    // Pointer on the z=0 plane, computed from the camera's resting position so
    // dragging stays accurate.
    state.raycaster.setFromCamera(state.pointer, camera);
    state.raycaster.ray.intersectPlane(PLANE, pointerWorld);

    bodies.current.forEach((body, i) => {
      if (!body) return;
      const p = body.translation();
      const v = body.linvel();
      const home = homes[i % homes.length];

      if (dragging.current === i) {
        body.setLinvel(
          {
            x: (pointerWorld.x - p.x) * 14,
            y: (pointerWorld.y - p.y) * 14,
            z: (0.6 - p.z) * 6,
          },
          true,
        );
        return;
      }

      // Spring back to the resting spot, gently, so the scene always recomposes.
      const k = 1.6;
      let vx = v.x + (home.x - p.x) * k * dt;
      let vy = v.y + (home.y - p.y) * k * dt;
      const vz = v.z + (home.z - p.z) * k * dt;

      // Push away from the cursor, like a hand sweeping through the objects.
      tmp.set(p.x - pointerWorld.x, p.y - pointerWorld.y, 0);
      const d = tmp.length();
      if (d < 1.4 && d > 0.001) {
        const force = (1 - d / 1.4) * 10 * dt;
        vx += (tmp.x / d) * force;
        vy += (tmp.y / d) * force;
      }
      body.setLinvel({ x: vx, y: vy, z: vz }, true);
    });
  });

  const grab = (i: number) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    dragging.current = i;
    document.body.style.cursor = "grabbing";
  };

  return (
    <>
      {items.map((item, i) => {
        const home = homes[i % homes.length];
        // Spawn along the top edge, inside the walls, then fall into place.
        // With reduced motion, start already in place.
        const start: [number, number, number] = runtime.reducedMotion
          ? [home.x, home.y, home.z]
          : [home.x, height / 2 - 0.7 - (i % 3) * 0.35, home.z];
        return (
          <RigidBody
            key={i}
            ref={(b) => {
              bodies.current[i] = b;
            }}
            position={start}
            rotation={[Math.sin(i * 1.7) * 0.4, Math.cos(i * 2.3) * 0.4, Math.sin(i * 3.1) * 0.5]}
            colliders={item.kind === "atom" ? "ball" : "cuboid"}
            linearDamping={1.4}
            angularDamping={0.8}
            restitution={0.6}
            friction={0.2}
          >
            <group
              scale={itemScale}
              onPointerDown={grab(i)}
              onPointerOver={() => {
                if (dragging.current === null) document.body.style.cursor = "grab";
              }}
              onPointerOut={() => {
                if (dragging.current === null) document.body.style.cursor = "";
              }}
            >
              <ItemMesh item={item} />
            </group>
          </RigidBody>
        );
      })}
    </>
  );
}

function ItemMesh({ item }: { item: Item }) {
  switch (item.kind) {
    case "key":
      return <Keycap label={item.label} width={item.width} variant={item.variant} />;
    case "atom":
      return <Atom />;
    case "ts":
      return <TsCube />;
    case "pen":
      return <Pen />;
  }
}

export function Keycap({
  label,
  width = 1,
  variant,
}: {
  label: string;
  width?: number;
  variant: KeycapVariant;
}) {
  const wide = width > 1;
  const labelWidth = Math.min(width, 1.6) * 0.8;
  const geometry = keycapGeometry(width, false, wide ? 6 : 3);
  const material = useMemo(() => keycapMaterial(variant), [variant]);
  const texture = keycapLabel(
    label,
    variant === "titanium" ? "#1b1c20" : "#eef0f3",
    wide ? labelWidth / 0.8 : 1,
  );
  return (
    <group scale={0.62}>
      <mesh geometry={geometry} material={material} castShadow />
      <mesh position={[0, 0.02, KEYCAP_TOP + 0.001]}>
        <planeGeometry args={[labelWidth, 0.8]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </group>
  );
}

function Atom() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.6;
  });
  return (
    <group ref={ref} scale={0.75}>
      {[0, Math.PI / 3, -Math.PI / 3].map((r) => (
        <mesh key={r} rotation={[Math.PI / 2.4, 0, r]}>
          <torusGeometry args={[0.62, 0.035, 16, 96]} />
          <meshStandardMaterial color="#9fe8ff" emissive="#61dafb" emissiveIntensity={0.9} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.14, 32, 32]} />
        <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={1.4} />
      </mesh>
    </group>
  );
}

function TsCube() {
  const texture = keycapLabel("TS", "#ffffff");
  return (
    <group scale={0.62}>
      <RoundedBox args={[1, 1, 1]} radius={0.12} smoothness={4}>
        <meshPhysicalMaterial color="#3178c6" roughness={0.3} clearcoat={0.8} />
      </RoundedBox>
      <mesh position={[0.12, -0.14, 0.501]}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </group>
  );
}

function Pen() {
  return (
    <group rotation={[0, 0, Math.PI / 3]}>
      <mesh>
        <cylinderGeometry args={[0.07, 0.07, 1.6, 32]} />
        <meshPhysicalMaterial color="#c9ccd2" metalness={1} roughness={0.25} />
      </mesh>
      <mesh position={[0, -0.92, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.07, 0.24, 32]} />
        <meshPhysicalMaterial color="#8e9299" metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0.08, 0.45, 0]}>
        <boxGeometry args={[0.03, 0.5, 0.05]} />
        <meshPhysicalMaterial color="#c9ccd2" metalness={1} roughness={0.25} />
      </mesh>
    </group>
  );
}
