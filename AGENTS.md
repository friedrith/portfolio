<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: thibaultfriedrich.io

Personal portfolio. Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, React Three Fiber,
GSAP, Lenis. Deployed on Vercel.

- **Bun** only: `bun install`, `bun run dev`, `bun run check` (lint + format check + typecheck +
  build). Run `bun run check` before calling work done.
- **Lint/format**: oxlint (`.oxlintrc.json`) and oxfmt (`.oxfmtrc.json`, print width 100). Run
  `bun run format` before pushing.
- **Commits**: Conventional Commits (`type(scope): subject`), enforced by commitlint
  (`commitlint.config.ts`) via husky `commit-msg` hook and CI. PR titles too (squash merges).
- **Source lives in `src/`**; `@/*` maps to `src/*`. Layout: `src/app` routes, `src/content` typed
  content, `src/features/<feature>`, `src/ui` shared primitives, `src/lib` helpers. See README.
- **Content** is data in `src/content/*.ts`; edit it there, never hard-code copy in components.
  Mark missing content with `TODO`.
- **Design**: read `DESIGN.md` before UI work. Tokens live in `src/app/globals.css` (`@theme`) and
  `src/lib/motion.ts`. One accent color, no italic, no serif, everything honors
  `prefers-reduced-motion`, no horizontal scroll down to 320 px.
- **3D**: one persistent canvas; keep the GPU budget in `DESIGN.md` (no transmission materials,
  pixel ratio ≤ 1.5).
- Feature-based structure, small composable components, no `any`, semantic HTML, WCAG 2.2 AA.
