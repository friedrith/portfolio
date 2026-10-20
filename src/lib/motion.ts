// JS side of the motion tokens in app/globals.css. "expo.out" is GSAP's match for
// cubic-bezier(0.16, 1, 0.3, 1).
export const EASE = "expo.out";

/** Seconds, for GSAP. */
export const DURATION = { fast: 0.16, base: 0.4, slow: 0.9 } as const;

export const STAGGER = 0.08;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
