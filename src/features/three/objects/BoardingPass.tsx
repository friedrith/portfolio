"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { KeycapMorph, useMorphState } from "@/features/three/morph/KeycapMorph";
import { canvasTexture, monoFont, sansFont } from "@/features/three/shared/keycap";
import { roundedSlabGeometry } from "@/features/three/shared/slab";

// Plusgrade: keycaps assemble into a premium boarding pass with a holographic
// UPGRADE foil. Then the pass splits into variants A and B — the A/B test —
// and only the winner stays.

const PASS = { w: 3.4, h: 1.6, d: 0.05, radius: 0.12 };
const FACE = { w: 1088, h: 512 };
/** Corner radius in face-texture pixels, so the drawn face matches the pass outline. */
const FACE_RADIUS = (PASS.radius / PASS.w) * FACE.w;

const passGeometry = () => roundedSlabGeometry(PASS.w, PASS.h, PASS.d, PASS.radius);

function drawPass(variant: "A" | "B") {
  return (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, variant === "A" ? "#17181c" : "#1d1830");
    g.addColorStop(1, variant === "A" ? "#0c0d0f" : "#120f1f");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, FACE_RADIUS);
    ctx.fill();

    const stub = w * 0.72;
    ctx.setLineDash([10, 12]);
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(stub, 30);
    ctx.lineTo(stub, h - 30);
    ctx.stroke();
    ctx.setLineDash([]);

    const label = (text: string, x: number, y: number) => {
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.font = `500 22px ${monoFont()}`;
      ctx.fillText(text, x, y);
    };
    const value = (text: string, x: number, y: number, size = 40) => {
      ctx.fillStyle = "#f7f8f8";
      ctx.font = `600 ${size}px ${sansFont()}`;
      ctx.fillText(text, x, y);
    };

    label("BOARDING PASS", 60, 80);
    value("YUL", 60, 200, 110);
    value("CDG", 420, 200, 110);
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.beginPath();
    ctx.moveTo(300, 165);
    ctx.lineTo(390, 165);
    ctx.stroke();
    label("MONTREAL", 60, 240);
    label("PARIS", 420, 240);

    label("PASSENGER", 60, 330);
    value("FRIEDRICH / T", 60, 375, 34);
    label("SEAT", 420, 330);
    value("2A", 420, 375, 34);
    label("CLASS", 560, 330);
    value("BUSINESS", 560, 375, 34);

    // Barcode on the stub.
    for (let x = stub + 50; x < w - 50; x += 7) {
      const bw = (Math.sin(x * 12.9898) * 43758.5453) % 1 > 0 ? 4 : 2;
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.fillRect(x, 120, bw, 230);
    }
    label(`VARIANT ${variant}`, stub + 50, 90);
  };
}

function drawFoilMask(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.roundRect(8, 8, w - 16, h - 16, 24);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `700 92px ${sansFont()}`;
  ctx.fillText("UPGRADE", w / 2, h / 2 + 6);
}

function Pass({ variant, opacity = 1 }: { variant: "A" | "B"; opacity?: number }) {
  const geometry = useMemo(() => passGeometry(), []);
  const face = useMemo(() => canvasTexture(FACE.w, FACE.h, drawPass(variant)), [variant]);
  const foil = useMemo(() => canvasTexture(512, 160, drawFoilMask), []);
  useEffect(
    () => () => {
      face.texture.dispose();
      foil.texture.dispose();
    },
    [face, foil],
  );
  return (
    <>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#111215"
          roughness={0.35}
          clearcoat={1}
          transparent
          opacity={opacity}
        />
      </mesh>
      <mesh position={[0, 0, PASS.d / 2 + 0.002]} userData={{ noGhost: true }}>
        <planeGeometry args={[PASS.w, PASS.h]} />
        <meshBasicMaterial map={face.texture} transparent opacity={opacity} toneMapped={false} />
      </mesh>
      {/* Holographic foil stamp. */}
      <mesh position={[-0.45, -0.52, PASS.d / 2 + 0.004]} userData={{ noGhost: true }}>
        <planeGeometry args={[1.2, 0.375]} />
        <meshPhysicalMaterial
          alphaMap={foil.texture}
          transparent
          opacity={opacity}
          color="#ffffff"
          metalness={1}
          roughness={0.18}
          iridescence={1}
          iridescenceIOR={1.8}
          iridescenceThicknessRange={[200, 900]}
        />
      </mesh>
    </>
  );
}

export function BoardingPass({ anchorId }: { anchorId: string }) {
  const state = useMorphState();
  const a = useRef<THREE.Group>(null);
  const b = useRef<THREE.Group>(null);
  const bMaterials = useRef<THREE.Material[]>([]);

  const sample = useMemo(() => passGeometry(), []);

  useEffect(() => {
    const list: THREE.Material[] = [];
    b.current?.traverse((o) => {
      const m = (o as THREE.Mesh).material;
      if (m) list.push(...(Array.isArray(m) ? m : [m]));
    });
    bMaterials.current = list;
  }, []);

  useFrame(({ clock }) => {
    const s = state.current;
    const t = clock.elapsedTime;
    // A/B beat: B slides out, competes, then falls away; A settles as the winner.
    const split = THREE.MathUtils.smoothstep(s.progress, 0.56, 0.64);
    const lose = THREE.MathUtils.smoothstep(s.progress, 0.66, 0.74);
    if (b.current) {
      b.current.visible = split > 0.001 && lose < 0.999;
      b.current.position.set(
        split * 1.1 + lose * 0.6,
        -split * 0.35 - lose * 1.6,
        -0.25 - lose * 0.8,
      );
      b.current.rotation.set(0, -split * 0.25, -split * 0.08 - lose * 0.3);
      bMaterials.current.forEach((m) => (m.opacity = 1 - lose));
    }
    if (a.current) {
      a.current.position.set(-split * 0.5 * (1 - lose), split * 0.2 * (1 - lose), 0);
      a.current.rotation.z = Math.sin(t * 0.6) * 0.02;
    }
  });

  return (
    <KeycapMorph anchorId={anchorId} sample={sample} state={state} fill={0.78}>
      <group ref={b} visible={false}>
        <Pass variant="B" />
      </group>
      <group ref={a}>
        <Pass variant="A" />
      </group>
    </KeycapMorph>
  );
}
