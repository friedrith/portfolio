import type { Talk } from "./types";

const GITHUB = "https://github.com/friedrith";

// TODO: a thumbnail per talk.
export const talks: Talk[] = [
  {
    title: "React Patterns to maintain a scalable design system",
    event: "ConFoo",
    year: 2026,
    href: `${GITHUB}/pragmatic-design-system/tree/2026-confoo`,
  },
  {
    title: "SOLID patterns for React components",
    event: "ConFoo",
    year: 2025,
    href: `${GITHUB}/react-composition`,
  },
  {
    title: "Custom ESLint rules with ASTs",
    event: "ConFoo",
    year: 2025,
    href: `${GITHUB}/abstract-syntax-tree`,
  },
  {
    title: "A pragmatic approach to design systems",
    event: "/dev/mtl",
    year: 2025,
    href: `${GITHUB}/pragmatic-design-system/tree/2025-dev-mtl`,
  },
];
