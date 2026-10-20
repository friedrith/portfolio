/** Small seeded PRNG (mulberry32): deterministic "randomness" for 3D layouts, safe to call during render. */
export function seeded(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function randomDirection<T extends { set: (x: number, y: number, z: number) => unknown }>(
  rand: () => number,
  target: T,
): T {
  const u = rand() * 2 - 1;
  const theta = rand() * Math.PI * 2;
  const r = Math.sqrt(1 - u * u);
  target.set(r * Math.cos(theta), r * Math.sin(theta), u);
  return target;
}
