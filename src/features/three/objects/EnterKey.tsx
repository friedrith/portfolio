"use client";

import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  KEYCAP_TOP,
  keycapGeometry,
  keycapLabel,
  keycapMaterial,
} from "@/features/three/shared/keycap";
import { anchorElement, readAnchor } from "@/features/three/stage/anchor";
import { CONTACT_EVENT } from "@/lib/runtime";

const LABEL = { w: 1.8, h: 0.8 };
const PRESS_DURATION = 1.2;

/** The last key you press is the one that ships: a giant Enter key that opens the contact panel. */
export function EnterKey({ anchorId }: { anchorId: string }) {
  const root = useRef<THREE.Group>(null);
  const cap = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const pressedAt = useRef(-10);
  const pressRequested = useRef(false);
  const geometry = keycapGeometry(2.25, false, 8);
  const material = useMemo(() => keycapMaterial("accent"), []);
  const label = keycapLabel("Enter ↵", "#ffffff", LABEL.w / LABEL.h);

  useFrame(({ clock, pointer }, dt) => {
    const group = root.current;
    if (!group || !cap.current) return;
    const anchor = readAnchor(anchorElement(anchorId));
    if (!anchor || !anchor.visible) {
      group.visible = false;
      return;
    }
    group.visible = true;
    const t = clock.elapsedTime;
    if (pressRequested.current) {
      pressRequested.current = false;
      pressedAt.current = t;
    }
    const scale = Math.min(anchor.width / 2.25, anchor.height / 1.2) * 0.7;
    group.position.set(anchor.x, anchor.y, 0);
    group.scale.setScalar(scale);
    const { damp } = THREE.MathUtils;
    group.rotation.x = damp(
      group.rotation.x,
      -0.35 - pointer.y * 0.15 + Math.sin(t * 0.35) * 0.04,
      2,
      dt,
    );
    group.rotation.y = damp(group.rotation.y, pointer.x * 0.3, 2, dt);

    // Press animation: slow travel down, slower release.
    const since = t - pressedAt.current;
    const p = Math.min(1, since / PRESS_DURATION);
    const press =
      p < 0.35
        ? Math.sin((p / 0.35) * (Math.PI / 2))
        : (1 + Math.cos(((p - 0.35) / 0.65) * Math.PI)) / 2;
    const rest = hovered ? -0.05 : 0;
    cap.current.position.z =
      since < PRESS_DURATION ? rest - press * 0.28 : damp(cap.current.position.z, rest, 4, dt);
    material.emissiveIntensity = damp(material.emissiveIntensity, hovered ? 0.9 : 0.25, 3, dt);
  });

  return (
    <group ref={root}>
      <group
        ref={cap}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "";
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (!root.current?.visible) return;
          pressRequested.current = true;
          window.dispatchEvent(new CustomEvent(CONTACT_EVENT));
        }}
      >
        <mesh geometry={geometry} material={material} />
        <mesh position={[0, 0.02, KEYCAP_TOP + 0.001]}>
          <planeGeometry args={[LABEL.w, LABEL.h]} />
          <meshBasicMaterial map={label} transparent toneMapped={false} />
        </mesh>
      </group>
      {/* Switch housing under the cap. */}
      <mesh position={[0, 0, -0.42]}>
        <boxGeometry args={[2.4, 1.15, 0.2]} />
        <meshPhysicalMaterial color="#0d0e10" roughness={0.6} />
      </mesh>
    </group>
  );
}
