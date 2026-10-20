# thibaultfriedrich.io

Luxury dark portfolio: Gravity-style hero, Linear/Vercel/Raycast UI, Lusion-style 3D objects and
an Igloo-style continuous 3D world. Concept: **code becomes product**: keycaps assemble into each
project's object as you scroll.

```bash
bun install
bun run dev        # http://localhost:3000
bun run check      # oxlint + oxfmt check + typecheck + build
bun run format     # oxfmt
```

Commits follow [Conventional Commits](https://www.conventionalcommits.org) (`feat: …`,
`fix(scope): …`), enforced by commitlint via a husky `commit-msg` hook and in CI.

## Structure

```
src/          all source code (`@/*` → `src/*`)
  app/        routes: /, /for/[audience], /projects/[slug], /blog, /skills, sitemap, robots, OG image
  content/    typed content, one file per domain (profile, audiences, projects, skills…)
  features/   one folder per feature
    audience/   hire · freelance · learn switch, client store, section ordering
    chrome/     header, bottom bar, ⌘K palette, smooth scroll
    hero/       portrait, pitch, scroll effects
    sections/   landing sections (impact, projects, experience, services, skills, writing…)
    skills-map/ interactive star map
    three/      the WebGL stage, physics hero, keycap morph, project objects, keycap floor
  ui/         shared primitives (Dialog, GlowCard, Keycap, SectionHeading…)
  lib/        motion tokens, JSON-LD, runtime state, helpers
```

## How it works

- **Audiences**: `/?for=hire|build|follow` is rewritten (`next.config.ts`) to the prerendered
  `/for/[audience]`, so every variant is static HTML. On the client, switching (click or keys 1–3)
  updates a small store (`src/features/audience/audience-store.ts`) and the URL; `SectionStack`
  reorders the server-rendered sections. Pitch, CTA and order live in `src/content/audiences.ts`.
- **One persistent WebGL canvas** (`src/features/three/stage/Stage.tsx`) sits fixed behind the page.
  HTML stays the source of content (SEO, a11y); 3D objects follow empty slots in the HTML
  (`id="obj-…"`, see `src/features/three/stage/anchor.ts`).
- **Hero** (`src/features/hero/`, `src/features/three/hero-physics/`): name behind the portrait, throwable
  keycaps with Rapier physics colliding with the silhouette. The first scroll flies through them.
- **Keycap morph** (`src/features/three/morph/`): instanced keycaps fly onto the target object's
  surface, then a scanline turns the wireframe into the solid object (`src/features/three/objects/`).
- **Reveals** use CSS scroll-driven animations (`[data-reveal]` in `src/app/globals.css`); everything
  honours `prefers-reduced-motion`.

Design tokens live in `src/app/globals.css` (`@theme`), motion tokens in `src/lib/motion.ts`. Design intent and rules: [DESIGN.md](DESIGN.md).

## Assets to provide (`public/assets/`)

| File                        | What                                                                  | Then                                                                                                          |
| --------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `portrait-cutout.png`       | AI-enhanced B&W portrait, transparent background, 4:5, ≥ 2000 px tall | set `profile.portrait` in `src/content/profile.ts`, adjust `src/lib/portrait.ts` so colliders hug the outline |
| `thibault-friedrich-cv.pdf` | CV                                                                    | —                                                                                                             |
| `projects/<slug>/…`         | screen recordings / mockups per case study                            | replace the placeholder block in `src/app/projects/[slug]/page.tsx`                                           |
| `models/*.glb` (optional)   | real models to replace the procedural ones                            | load with drei `useGLTF`, compress with gltf.report                                                           |

Content placeholders are marked `TODO` in `src/content/` (email, booking link, channel URLs, La Loupe
and Design System Hub numbers, talk links, the full article list).

## Known limits

- Articles are a hand-written list; the Medium RSS / Dev.to API import is next.
- Contact opens the mail client (`mailto:`); no backend.
