import * as THREE from "three";
import { viewportProgress } from "@/lib/runtime";

/** Distance between the camera and the plane where DOM-anchored objects live. */
export const CONTENT_DEPTH = 12;
export const CAMERA_FOV = 35;

export function worldViewport(aspect: number, depth = CONTENT_DEPTH) {
  const height = 2 * depth * Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2));
  return { width: height * aspect, height };
}

export type Anchor = {
  x: number;
  y: number;
  width: number;
  height: number;
  /** 0 entering at the bottom, 0.5 centered, 1 leaving at the top. */
  progress: number;
  visible: boolean;
};

/**
 * Maps a DOM element (a "slot" in the page) to world coordinates on the content
 * plane, so 3D objects scroll in sync with the HTML around them.
 */
export function readAnchor(el: HTMLElement | null): Anchor | null {
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const world = worldViewport(vw / vh);
  return {
    x: ((rect.left + rect.width / 2) / vw - 0.5) * world.width,
    y: -((rect.top + rect.height / 2) / vh - 0.5) * world.height,
    width: (rect.width / vw) * world.width,
    height: (rect.height / vh) * world.height,
    progress: viewportProgress(rect, vh),
    visible: rect.bottom > -vh * 0.5 && rect.top < vh * 1.5,
  };
}

const elementCache = new Map<string, HTMLElement>();

export function anchorElement(id: string) {
  const cached = elementCache.get(id);
  if (cached?.isConnected) return cached;
  const el = document.getElementById(id);
  if (el) elementCache.set(id, el);
  return el;
}
