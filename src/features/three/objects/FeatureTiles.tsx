"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { KeycapMorph, useMorphState } from "@/features/three/morph/KeycapMorph";
import { canvasTexture, monoFont, sansFont } from "@/features/three/shared/keycap";
import { roundedSlabGeometry } from "@/features/three/shared/slab";

// Features: keycaps assemble into a stack of feature cards, like the CLI
// dashboard. Clicking the stack switches every card to the next view.

const SURFACE = "#141519";
const TEXT = "#f7f8f8";
const MUTED = "rgba(247,248,248,0.5)";

const VIEWS = [
  { name: "Owners", accent: "#7c5cff" },
  { name: "Coverage", accent: "#22c55e" },
  { name: "Debt", accent: "#f97316" },
] as const;
type View = (typeof VIEWS)[number];

const FEATURES = [
  { name: "Checkout", owner: "@payments", coverage: 92, todo: 1, fixme: 0 },
  { name: "Search", owner: "@discovery", coverage: 74, todo: 4, fixme: 1 },
  { name: "Auth", owner: "@platform", coverage: 88, todo: 0, fixme: 0 },
  { name: "Onboarding", owner: "@growth", coverage: 41, todo: 6, fixme: 3 },
  { name: "Dashboard", owner: "@core-ui", coverage: 67, todo: 2, fixme: 1 },
];
type Feature = (typeof FEATURES)[number];

const TILE = { w: 2.4, h: 1.5, d: 0.08, radius: 0.12 };
const FACE = { w: 640, h: 400 };
/** Corner radius in face-texture pixels, so the drawn face matches the tile outline. */
const FACE_RADIUS = (TILE.radius / TILE.w) * FACE.w;

const tileGeometry = () => roundedSlabGeometry(TILE.w, TILE.h, TILE.d, TILE.radius);

const LAYOUT = FEATURES.map((feature, i) => ({
  feature,
  position: new THREE.Vector3((i - 2) * 0.32, (2 - i) * 0.62, (2 - i) * -0.32),
  rotation: new THREE.Euler(-0.12, 0.18, 0),
}));

const coverageColor = (pct: number) => (pct >= 80 ? "#22c55e" : pct >= 60 ? "#eab308" : "#ef4444");

function drawTile(feature: Feature, view: View) {
  return (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.fillStyle = SURFACE;
    ctx.beginPath();
    ctx.roundRect(1.5, 1.5, w - 3, h - 3, FACE_RADIUS - 1.5);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = MUTED;
    ctx.font = `500 22px ${monoFont()}`;
    ctx.fillText(`src/features/${feature.name.toLowerCase()}`, 36, 52);
    ctx.fillStyle = view.accent;
    ctx.textAlign = "right";
    ctx.fillText(view.name.toUpperCase(), w - 36, 52);
    ctx.textAlign = "left";

    ctx.fillStyle = TEXT;
    ctx.font = `600 64px ${sansFont()}`;
    ctx.fillText(feature.name, 36, 150);

    switch (view.name) {
      case "Owners": {
        ctx.fillStyle = view.accent;
        ctx.beginPath();
        ctx.arc(80, 262, 44, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.font = `600 36px ${sansFont()}`;
        ctx.textAlign = "center";
        ctx.fillText(feature.owner[1].toUpperCase(), 80, 275);
        ctx.textAlign = "left";
        ctx.fillStyle = TEXT;
        ctx.font = `500 36px ${monoFont()}`;
        ctx.fillText(feature.owner, 150, 258);
        ctx.fillStyle = MUTED;
        ctx.font = `400 24px ${sansFont()}`;
        ctx.fillText("in CODEOWNERS", 150, 298);
        break;
      }
      case "Coverage": {
        const color = coverageColor(feature.coverage);
        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.beginPath();
        ctx.roundRect(36, 240, w - 72, 28, 14);
        ctx.fill();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.roundRect(36, 240, ((w - 72) * feature.coverage) / 100, 28, 14);
        ctx.fill();
        ctx.fillStyle = TEXT;
        ctx.font = `600 40px ${monoFont()}`;
        ctx.fillText(`${feature.coverage}%`, 36, 330);
        ctx.fillStyle = MUTED;
        ctx.font = `400 24px ${sansFont()}`;
        ctx.fillText("lines covered", 170, 328);
        break;
      }
      case "Debt": {
        const items = [
          { label: "TODO", count: feature.todo, color: "#eab308" },
          { label: "FIXME", count: feature.fixme, color: "#ef4444" },
        ];
        items.forEach((item, i) => {
          const x = 36 + i * 280;
          ctx.fillStyle = item.count ? item.color : "rgba(255,255,255,0.2)";
          ctx.beginPath();
          ctx.arc(x + 14, 268, 14, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = TEXT;
          ctx.font = `600 48px ${monoFont()}`;
          ctx.fillText(String(item.count), x + 44, 286);
          const labelX = x + 44 + ctx.measureText(String(item.count)).width + 14;
          ctx.fillStyle = MUTED;
          ctx.font = `500 24px ${monoFont()}`;
          ctx.fillText(item.label, labelX, 284);
        });
        break;
      }
    }
  };
}

function Tile({ feature, view }: { feature: Feature; view: View }) {
  const geometry = useMemo(() => tileGeometry(), []);
  const face = useMemo(
    () => canvasTexture(FACE.w, FACE.h, drawTile(feature, view)),
    [feature, view],
  );
  useEffect(() => () => face.texture.dispose(), [face]);
  return (
    <>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial color="#1b1c20" roughness={0.4} metalness={0.2} clearcoat={0.6} />
      </mesh>
      <mesh position={[0, 0, TILE.d / 2 + 0.002]} userData={{ noGhost: true }}>
        <planeGeometry args={[TILE.w, TILE.h]} />
        <meshBasicMaterial map={face.texture} transparent toneMapped={false} />
      </mesh>
    </>
  );
}

export function FeatureTiles({ anchorId }: { anchorId: string }) {
  const state = useMorphState();
  const [viewIndex, setViewIndex] = useState(0);
  const tiles = useRef<(THREE.Group | null)[]>([]);

  const sample = useMemo(() => {
    const parts = LAYOUT.map(({ position, rotation }) => {
      const g = tileGeometry();
      g.applyMatrix4(
        new THREE.Matrix4().compose(
          position,
          new THREE.Quaternion().setFromEuler(rotation),
          new THREE.Vector3(1, 1, 1),
        ),
      );
      return g;
    });
    return mergeGeometries(parts)!;
  }, []);

  // Once built, the tiles fan out slightly and breathe.
  useFrame(({ clock }) => {
    const s = state.current;
    tiles.current.forEach((tile, i) => {
      if (!tile) return;
      const base = LAYOUT[i].position;
      const spread = s.after * 0.18;
      tile.position.set(
        base.x * (1 + spread),
        base.y * (1 + spread) + Math.sin(clock.elapsedTime * 0.8 + i) * 0.03 * s.after,
        base.z * (1 + spread * 2),
      );
    });
  });

  const view = VIEWS[viewIndex];

  return (
    <KeycapMorph anchorId={anchorId} sample={sample} state={state}>
      <group
        onClick={(e) => {
          e.stopPropagation();
          setViewIndex((i) => (i + 1) % VIEWS.length);
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "")}
      >
        {LAYOUT.map(({ feature, position, rotation }, i) => (
          <group
            key={feature.name}
            ref={(g) => {
              tiles.current[i] = g;
            }}
            position={position}
            rotation={rotation}
          >
            <Tile feature={feature} view={view} />
          </group>
        ))}
      </group>
    </KeycapMorph>
  );
}
