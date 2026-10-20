// Mutable state shared between the DOM and the WebGL scene, read every frame.
// Kept out of React state on purpose: it changes 60 times per second.
export const runtime = {
  scrollVelocity: 0,
  reducedMotion: false,
};

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};

/** Progress of an element through the viewport: 0 entering at the bottom, 0.5 centered, 1 gone at the top. */
export function viewportProgress(rect: DOMRect, vh: number) {
  return clamp01((vh - rect.top) / (vh + rect.height));
}

/** Progress through a tall sticky section: 0 at its top, 1 when its sticky part releases. */
export function stickyProgress(rect: DOMRect, vh: number) {
  return clamp01(-rect.top / Math.max(1, rect.height - vh));
}

/** Dispatched by the 3D Enter key to open the contact panel. */
export const CONTACT_EVENT = "portfolio:contact";
