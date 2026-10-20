"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { KeycapMorph, useMorphState } from "@/features/three/morph/KeycapMorph";
import { canvasTexture, sansFont } from "@/features/three/shared/keycap";

// La Loupe de correction: keycaps assemble into a magnifying glass with a flat
// aluminum bezel. Under the lens, mistakes underlined in red show their
// corrected form in green. A gold star pops out once the text is fully corrected.

const PAPER = { w: 4.2, h: 2.4, z: -0.7 };
const LENS = { r: 0.82, rim: 0.12, depth: 0.12 };
const HANDLE = { length: 1.45, width: 0.26, depth: 0.12, angle: -Math.PI / 4 };
const BEVEL = 0.018;
const ACCENT = "#7c5cff";

/** Flat ring with softened edges: the lens bezel. */
function bezelGeometry() {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, LENS.r + LENS.rim - BEVEL, 0, Math.PI * 2, false);
  const hole = new THREE.Path();
  hole.absarc(0, 0, LENS.r + BEVEL, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return extrudeCentered(shape, LENS.depth, 96);
}

/** Stadium-shaped slab along +x, starting at the origin: the handle. */
function handleGeometry() {
  const r = HANDLE.width / 2 - BEVEL;
  const len = HANDLE.length;
  const shape = new THREE.Shape();
  shape.moveTo(r, -r);
  shape.lineTo(len - r, -r);
  shape.absarc(len - r, 0, r, -Math.PI / 2, Math.PI / 2, false);
  shape.lineTo(r, r);
  shape.absarc(r, 0, r, Math.PI / 2, (Math.PI * 3) / 2, false);
  return extrudeCentered(shape, HANDLE.depth, 32);
}

function extrudeCentered(shape: THREE.Shape, depth: number, curveSegments: number) {
  const core = depth - BEVEL * 2;
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: core,
    bevelEnabled: true,
    bevelThickness: BEVEL,
    bevelSize: BEVEL,
    bevelSegments: 4,
    curveSegments,
  });
  g.translate(0, 0, -core / 2);
  return g;
}

/** The handle starts just inside the bezel so the two read as one part. */
const handleStart = new THREE.Vector3(
  Math.cos(HANDLE.angle) * (LENS.r + LENS.rim - 0.04),
  Math.sin(HANDLE.angle) * (LENS.r + LENS.rim - 0.04),
  0,
);

type Segment = { text: string; fix?: string };

const LINES: Segment[][] = [
  [
    { text: "Hier, les " },
    { text: "enfant", fix: "enfants" },
    { text: " sont " },
    { text: "allé", fix: "allés" },
    { text: " au parc." },
  ],
  [{ text: "Ils ont mangé des " }, { text: "pomme", fix: "pommes" }, { text: " et joué" }],
  [
    { text: "jusqu'" },
    { text: "a", fix: "à" },
    { text: " la nuit avec " },
    { text: "leur", fix: "leurs" },
    { text: " amis." },
  ],
];

function drawPaper(corrected: boolean) {
  return (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.fillStyle = "#efeadf";
    ctx.fillRect(0, 0, w, h);
    // Ruled lines.
    ctx.strokeStyle = "rgba(60,90,160,0.18)";
    ctx.lineWidth = 2;
    for (let y = 150; y < h; y += 150) {
      ctx.beginPath();
      ctx.moveTo(0, y + 18);
      ctx.lineTo(w, y + 18);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(200,60,60,0.25)";
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(110, h);
    ctx.stroke();

    ctx.font = `500 76px ${sansFont()}`;
    ctx.textBaseline = "alphabetic";
    LINES.forEach((line, row) => {
      let x = 150;
      const y = 150 * (row + 1);
      line.forEach((seg) => {
        const text = corrected && seg.fix ? seg.fix : seg.text;
        ctx.fillStyle = "#23262d";
        ctx.fillText(text, x, y);
        const width = ctx.measureText(text).width;
        if (seg.fix) {
          ctx.strokeStyle = corrected ? "#16a34a" : "#dc2626";
          ctx.lineWidth = 6;
          ctx.beginPath();
          if (corrected) {
            ctx.moveTo(x, y + 14);
            ctx.lineTo(x + width, y + 14);
          } else {
            // Wavy underline, like a spellchecker.
            for (let i = 0; i <= width; i += 4) {
              const yy = y + 16 + Math.sin(i / 6) * 5;
              if (i === 0) ctx.moveTo(x + i, yy);
              else ctx.lineTo(x + i, yy);
            }
          }
          ctx.stroke();
        }
        x += width;
      });
    });
  };
}

function starShape() {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 0.42 : 0.18;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

export function Loupe({ anchorId }: { anchorId: string }) {
  const state = useMorphState();
  const lens = useRef<THREE.Group>(null);
  const lensView = useRef<THREE.Mesh>(null);
  const star = useRef<THREE.Group>(null);

  const red = useMemo(() => canvasTexture(1400, 800, drawPaper(false)), []);
  const green = useMemo(() => canvasTexture(1400, 800, drawPaper(true)), []);
  useEffect(
    () => () => {
      red.texture.dispose();
      green.texture.dispose();
    },
    [red, green],
  );

  // The circle under the lens shows the corrected paper; its UVs are updated
  // every frame to match the lens position on the page.
  const lensGeometry = useMemo(() => new THREE.CircleGeometry(LENS.r, 64), []);
  const lensBaseUv = useMemo(() => {
    const pos = lensGeometry.attributes.position;
    return Array.from({ length: pos.count }, (_, i) => [pos.getX(i), pos.getY(i)] as const);
  }, [lensGeometry]);

  const bezel = useMemo(() => bezelGeometry(), []);
  const handle = useMemo(() => handleGeometry(), []);

  const sample = useMemo(() => {
    const rim = bezelGeometry();
    const handle = handleGeometry();
    handle.rotateZ(HANDLE.angle);
    handle.translate(handleStart.x, handleStart.y, 0);
    const paper = new THREE.PlaneGeometry(PAPER.w, PAPER.h, 1, 1);
    paper.translate(0.4, -0.2, PAPER.z);
    return mergeGeometries(
      [rim, handle, paper.toNonIndexed()].map((g) => {
        g.deleteAttribute("uv");
        return g;
      }),
    )!;
  }, []);

  const starGeometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(starShape(), {
        depth: 0.1,
        bevelEnabled: true,
        bevelSize: 0.03,
        bevelThickness: 0.03,
        bevelSegments: 3,
      }),
    [],
  );

  useFrame(({ clock }) => {
    const s = state.current;
    const t = clock.elapsedTime;
    if (lens.current) {
      // Lens glides along the lines once the object is built.
      const sweep = s.after;
      const x = 0.4 + Math.sin(t * 0.5) * 1.3 * sweep;
      const y = -0.2 + Math.sin(t * 0.9) * 0.35 * sweep;
      lens.current.position.set(x, y, 0);

      const view = lensView.current;
      if (view) {
        view.position.set(x, y, PAPER.z + 0.003);
        const uv = view.geometry.attributes.uv;
        lensBaseUv.forEach(([lx, ly], i) => {
          const px = x + lx - 0.4;
          const py = y + ly + 0.2;
          uv.setXY(i, px / PAPER.w + 0.5, py / PAPER.h + 0.5);
        });
        uv.needsUpdate = true;
        (view.material as THREE.MeshBasicMaterial).opacity = s.build;
      }
    }
    if (star.current) {
      const pop = THREE.MathUtils.smoothstep(s.progress, 0.6, 0.68);
      const bounce = pop < 1 ? pop * (1 + Math.sin(pop * Math.PI) * 0.4) : 1;
      star.current.scale.setScalar(0.0001 + bounce);
      star.current.rotation.y = t * 1.2;
      star.current.position.y = 1.25 + Math.sin(t * 1.4) * 0.06;
    }
  });

  return (
    <KeycapMorph anchorId={anchorId} sample={sample} state={state}>
      {/* Paper with the student's text. */}
      <mesh position={[0.4, -0.2, PAPER.z]}>
        <planeGeometry args={[PAPER.w, PAPER.h]} />
        <meshStandardMaterial map={red.texture} roughness={0.9} />
      </mesh>
      <mesh ref={lensView} geometry={lensGeometry} userData={{ noGhost: true }}>
        <meshBasicMaterial map={green.texture} transparent toneMapped={false} />
      </mesh>

      <group ref={lens}>
        <mesh geometry={bezel}>
          <meshPhysicalMaterial
            color="#3a3d44"
            metalness={0.9}
            roughness={0.32}
            clearcoat={0.4}
            clearcoatRoughness={0.3}
          />
        </mesh>
        {/* Thin light ring on the inner edge of the bezel. */}
        <mesh position={[0, 0, LENS.depth / 2 - 0.01]} userData={{ noGhost: true }}>
          <torusGeometry args={[LENS.r + 0.012, 0.01, 8, 128]} />
          <meshBasicMaterial color={ACCENT} toneMapped={false} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} userData={{ noGhost: true }}>
          <cylinderGeometry args={[LENS.r + 0.01, LENS.r + 0.01, 0.04, 64]} />
          <meshPhysicalMaterial
            // No transmission: it re-renders the whole scene every frame and can
            // crash Safari. A clear-coated tint reads as glass well enough.
            roughness={0.05}
            clearcoat={1}
            color="#ffffff"
            transparent
            opacity={0.18}
            depthWrite={false}
          />
        </mesh>
        <group position={handleStart} rotation={[0, 0, HANDLE.angle]}>
          <mesh geometry={handle}>
            <meshPhysicalMaterial color="#17181c" roughness={0.65} clearcoat={0.15} />
          </mesh>
          {/* Indicator strip near the end of the handle. */}
          <mesh
            position={[HANDLE.length - 0.42, 0, HANDLE.depth / 2 + 0.002]}
            userData={{ noGhost: true }}
          >
            <planeGeometry args={[0.32, 0.035]} />
            <meshBasicMaterial color={ACCENT} toneMapped={false} />
          </mesh>
        </group>
      </group>

      <group ref={star} position={[1.9, 1.25, 0.2]} scale={0.0001}>
        <mesh geometry={starGeometry} position={[0, 0, -0.05]} userData={{ noGhost: true }}>
          <meshPhysicalMaterial
            color="#f2c14e"
            metalness={1}
            roughness={0.2}
            emissive="#7a4d00"
            emissiveIntensity={0.35}
          />
        </mesh>
      </group>
    </KeycapMorph>
  );
}
