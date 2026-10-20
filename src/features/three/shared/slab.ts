import * as THREE from "three";

const BEVEL = 0.012;

/**
 * A thin slab whose outline is a rounded rectangle, centered on the origin.
 * Unlike RoundedBox, the corner radius is not capped by the depth.
 */
export function roundedSlabGeometry(width: number, height: number, depth: number, radius: number) {
  const w = width / 2 - BEVEL;
  const h = height / 2 - BEVEL;
  const r = radius - BEVEL;
  const shape = new THREE.Shape();
  shape.moveTo(-w + r, -h);
  shape.lineTo(w - r, -h);
  shape.quadraticCurveTo(w, -h, w, -h + r);
  shape.lineTo(w, h - r);
  shape.quadraticCurveTo(w, h, w - r, h);
  shape.lineTo(-w + r, h);
  shape.quadraticCurveTo(-w, h, -w, h - r);
  shape.lineTo(-w, -h + r);
  shape.quadraticCurveTo(-w, -h, -w + r, -h);
  const inner = depth - BEVEL * 2;
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: inner,
    bevelEnabled: true,
    bevelThickness: BEVEL,
    bevelSize: BEVEL,
    bevelSegments: 3,
    curveSegments: 12,
  });
  g.translate(0, 0, -inner / 2);
  return g;
}
