// Silhouette shape shared by the portrait (photo or SVG placeholder) and the
// physics colliders, in the portrait's own coordinate space. The viewbox has
// the cut-out photo's aspect (1437×2048), so these numbers hug its head and shoulders.
export const PORTRAIT_VIEWBOX = { width: 400, height: 570 };

export const silhouette = {
  head: { cx: 224, cy: 97, r: 70 },
  shoulders: [
    { cx: 116, cy: 256, r: 58 },
    { cx: 318, cy: 233, r: 46 },
  ],
  torso: { cx: 198, cy: 432, hw: 190, hh: 137 },
};

export const PORTRAIT_ID = "hero-portrait";
