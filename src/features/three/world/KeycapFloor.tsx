"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { keycapGeometry } from "@/features/three/shared/keycap";
import { anchorElement } from "@/features/three/stage/anchor";
import { runtime, stickyProgress } from "@/lib/runtime";
import { seeded } from "@/lib/random";

const COLS = 44;
const ROWS = 26;
const GAP = 0.62;
const dummy = new THREE.Object3D();
const color = new THREE.Color();

/**
 * A floor of keycaps the camera glides over while scrolling. It rises into
 * view as the camera leaves the hero, and scroll speed sends ripples through
 * it, Igloo-style, so moving between sections feels like one continuous world.
 */
export function KeycapFloor() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const geometry = useMemo(() => {
    const g = keycapGeometry(1, true).clone();
    g.rotateX(-Math.PI / 2);
    g.scale(0.5, 0.5, 0.5);
    return g;
  }, []);
  const amplitude = useRef(0.08);
  const accents = useMemo(() => {
    const rand = seeded(42);
    return Array.from({ length: COLS * ROWS }, () => rand() < 0.02);
  }, []);

  useLayoutEffect(() => {
    const m = mesh.current;
    if (!m) return;
    accents.forEach((accent, i) => m.setColorAt(i, color.set(accent ? "#7c5cff" : "#121316")));
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [accents]);

  useFrame(({ clock }) => {
    const m = mesh.current;
    if (!m) return;
    // The floor belongs to the landing page's world; other pages stay clean.
    const hero = anchorElement("hero");
    m.visible = hero !== null;
    if (!hero) return;
    const heroP = stickyProgress(hero.getBoundingClientRect(), window.innerHeight);
    const rise = THREE.MathUtils.smoothstep(heroP, 0.35, 1);
    const floorY = THREE.MathUtils.lerp(-12, -6.6, rise);

    const t = runtime.reducedMotion ? 0 : clock.elapsedTime;
    const target = 0.1 + Math.min(Math.abs(runtime.scrollVelocity) * 0.035, 0.9);
    amplitude.current = THREE.MathUtils.lerp(amplitude.current, target, 0.06);
    const travel = (window.scrollY * 0.006) % GAP;
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c - COLS / 2) * GAP;
        const z = -r * GAP + travel - 6;
        const wave =
          Math.sin(x * 0.45 + t * 1.1) * 0.5 +
          Math.sin(z * 0.6 - t * 1.6 - window.scrollY * 0.004) * 0.5;
        dummy.position.set(x, floorY + wave * amplitude.current, z);
        dummy.rotation.set(wave * amplitude.current * 0.4, 0, 0);
        dummy.updateMatrix();
        m.setMatrixAt(i++, dummy.matrix);
      }
    }
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[geometry, undefined, COLS * ROWS]} frustumCulled={false}>
      <meshPhysicalMaterial roughness={0.6} clearcoat={0.3} metalness={0.1} />
    </instancedMesh>
  );
}
