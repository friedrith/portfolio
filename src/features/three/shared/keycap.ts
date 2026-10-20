import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

/** Height of the keycap along z (its top face points at the camera). */
export const KEYCAP_DEPTH = 0.5;
export const KEYCAP_TOP = 0.37;

const geometryCache = new Map<string, THREE.BufferGeometry>();

/**
 * A mechanical-keyboard keycap: a rounded body plus a slightly smaller top dish.
 * `width` is in key units (1u, 2.25u...). `lowPoly` is for instanced swarms and
 * floors, where thousands of keys are drawn and the bevel detail is invisible.
 */
export function keycapGeometry(
  width = 1,
  lowPoly = false,
  segments = lowPoly ? 1 : 3,
): THREE.BufferGeometry {
  const key = `${width}:${lowPoly}:${segments}`;
  const cached = geometryCache.get(key);
  if (cached) return cached;
  const body = new RoundedBoxGeometry(width, 1, KEYCAP_DEPTH, segments, 0.14);
  const top = new RoundedBoxGeometry(width - 0.18, 0.82, 0.16, Math.max(1, segments - 1), 0.07);
  top.translate(0, 0.02, 0.26);
  const merged = mergeGeometries([body, top])!;
  merged.computeVertexNormals();
  geometryCache.set(key, merged);
  return merged;
}

export type KeycapVariant = "dark" | "accent" | "titanium";

export function keycapMaterial(variant: KeycapVariant) {
  switch (variant) {
    case "accent":
      return new THREE.MeshPhysicalMaterial({
        color: "#7c5cff",
        roughness: 0.35,
        clearcoat: 0.6,
        emissive: "#3b1fd1",
        emissiveIntensity: 0.25,
      });
    case "titanium":
      return new THREE.MeshPhysicalMaterial({
        color: "#c9ccd2",
        metalness: 1,
        roughness: 0.28,
      });
    default:
      return new THREE.MeshPhysicalMaterial({
        color: "#1b1c20",
        roughness: 0.55,
        clearcoat: 0.3,
        clearcoatRoughness: 0.4,
      });
  }
}

function cssFont(variable: string, fallback: string) {
  if (typeof document === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return value || fallback;
}

export const monoFont = () => cssFont("--font-geist-mono", "ui-monospace, monospace");
export const sansFont = () => cssFont("--font-geist-sans", "system-ui, sans-serif");

/**
 * A canvas texture redrawn once web fonts are ready, so labels never get stuck
 * on the fallback font.
 */
export function canvasTexture(
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  const render = () => {
    ctx.clearRect(0, 0, width, height);
    draw(ctx, width, height);
    texture.needsUpdate = true;
  };
  render();
  document.fonts?.ready.then(render);
  return { texture, redraw: render };
}

const labelCache = new Map<string, THREE.Texture>();

/**
 * `aspect` is the label plane's width / height, so wide keys get a matching
 * canvas instead of a stretched square one.
 */
export function keycapLabel(text: string, color = "#e9eaee", aspect = 1) {
  const key = `${text}|${color}|${aspect}`;
  const cached = labelCache.get(key);
  if (cached) return cached;
  const height = aspect === 1 ? 256 : 512;
  const { texture } = canvasTexture(Math.round(height * aspect), height, (ctx, w, h) => {
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const size =
      aspect === 1 ? (text.length > 3 ? 64 : text.length > 1 ? 88 : 112) : Math.round(h * 0.36);
    ctx.font = `500 ${size}px ${monoFont()}`;
    ctx.fillText(text, w / 2, h / 2 + h * 0.015);
  });
  labelCache.set(key, texture);
  return texture;
}
