# Design — thibaultfriedrich.io

Luxurious, modern and dark. The site is its own case study: it has to prove expert web building
through its construction, so visuals, performance and accessibility carry equal weight.

Source of truth for values: `src/app/globals.css` (`@theme`, CSS) and `src/lib/motion.ts` (GSAP).
This file explains the intent; change the tokens there, not here.

## References

| Area            | Reference                                                  | What we borrow                                                                                                                                                          |
| --------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero and chrome | [gravity-design.de](https://gravity-design.de/)            | Full-bleed B&W portrait on charcoal, floating objects to play with, a few lines of small text, a one-line accent tagline beside the head, thin footer line. No nav bar. |
| Sections        | [raycast.com](https://raycast.com), linear.app, vercel.com | Centered section headings, macOS app windows with traffic lights, launcher rows with keycaps, white pill buttons, glowing diagonal stripes, faint grids.                |
| 3D objects      | [lusion.co](https://lusion.co/)                            | Sculpted, physically lit objects in a few sections only.                                                                                                                |
| Transitions     | [igloo.inc](https://www.igloo.inc/)                        | One continuous 3D world the camera flies through as you scroll.                                                                                                         |

## Tokens

### Color

One accent, everything else is neutral. The accent is a token so it can be swapped in one place.

| Token         | Value                  | Use                                                   |
| ------------- | ---------------------- | ----------------------------------------------------- |
| `bg`          | `#08090A`              | Page                                                  |
| `surface`     | `#0F1011`              | Cards, windows                                        |
| `surface-2`   | `#16171A`              | Raised surfaces                                       |
| `line`        | `rgb(255 255 255/.08)` | Borders, grid lines                                   |
| `line-strong` | `rgb(255 255 255/.16)` | Hovered borders                                       |
| `fg`          | `#F7F8F8`              | Primary text                                          |
| `muted`       | `#8A8F98`              | Secondary text                                        |
| `faint`       | `#80858E`              | Lowest text tone; still passes WCAG AA on bg/surfaces |
| `accent`      | `#7C5CFF` (violet)     | Wordmark, active state, labels, focus ring, selection |
| `accent-soft` | `rgb(124 92 255/.16)`  | Accent tints                                          |

### Type

- **Geist** for everything, **Geist Mono** for labels, metadata and keycaps.
- **No italic and no serif anywhere** — `em`, `i`, `cite`… are reset to normal in `globals.css`.
- Tight tracking on large sizes (`--tracking-display: -0.04em`), wide uppercase mono labels
  (`--tracking-label: 0.2em`).
- Section heading pattern: small uppercase accent label → bold white title → gray subtitle
  (`src/ui/SectionHeading.tsx`).

### Shape

`--radius-key: 6px` (keycaps) · `--radius-control: 10px` (buttons, inputs) ·
`--radius-window: 18px` (app windows, cards).

### Motion

- One easing: `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out-expo`, GSAP `expo.out`).
- Durations: fast 160 ms, base 400 ms, slow 900 ms; stagger 80 ms.
- Scroll reveals are CSS scroll-driven animations (`[data-reveal]`), no JS.
- Everything honors `prefers-reduced-motion`: reveals show immediately, physics keys start at
  rest, the grain and scroll cue stop.

## Surfaces and effects

- **Film grain** over the whole page (`.grain`) so the black never looks flat.
- **Glow cards** (`.glow-card`, `src/ui/GlowCard.tsx`): a glow follows the cursor.
- **App windows** (`.rc-window`, `src/ui/AppWindow.tsx`): gradient body, inner top highlight,
  deep shadow, traffic-light dots that color on hover.
- **Launcher rows** (`.rc-row`) and **keycaps** (`.keycap`, `src/ui/Keycap.tsx`).
- **Buttons**: white pill (`.rc-button`) and ghost (`.rc-button-ghost`).
- **Stripes** (`.stripes`) and **grid** (`.grid-bg`) as quiet background texture.
- **No flat black page.** Each landing section has its own atmosphere (`.backdrop-*`,
  `src/ui/Backdrop.tsx`) that fades into its neighbors:

  | Section    | Atmosphere                                  |
  | ---------- | ------------------------------------------- |
  | impact     | violet / blue                               |
  | projects   | one tint per project (violet → gold → blue) |
  | experience | blue with faint lines                       |
  | services   | green / violet                              |
  | skills     | night sky with stars                        |
  | speaking   | stage spotlight                             |
  | writing    | warm amber                                  |
  | follow     | pink / violet                               |
  | contact    | violet glow rising from the bottom          |

## Chrome

- **Header**: lowercase violet wordmark `thibault.` left, a few quiet text links right
  (Projects, Skills, Writing & Talks, Contact). Transparent; a soft backdrop appears once the page
  scrolls.
- **Bottom bar** on every page: thin line, copyright left, current section name centered
  (`drag to throw · scroll to fly` in the hero), socials right.
- **⌘K command palette**, Raycast-style: navigate, switch audience, copy email, download CV,
  open socials.

## Hero

- B&W cut-out portrait centered at the bottom, name huge and faint behind it.
- Small name block on the left: name, one-line pitch, accent text link for the main action.
- Audience switch as one line of text, `hire · freelance · learn` (lowercase, active word in the
  accent, others dimmed, "what brings you here?" above). Beside the head from `lg`; bottom-left
  below that so it never widens the page.
- Throwable 3D keycaps (`T F ⌘ K {} </> Enter ⇧ UX Esc =>`, a React atom, a TypeScript cube, a
  pen) with Rapier physics, colliding with the silhouette and resting away from the text.
- First scroll: the camera flies through the keys while the name blurs away.

## Three audiences

`hire`, `freelance` (`build`) and `learn` (`follow`) share one site. The choice lives in the URL
(`?for=…`) and changes the hero pitch, the main CTA and the order of sections. Copy and order live
in `src/content/audiences.ts`.

## 3D concept: "code becomes product"

Keycaps are the recurring motif. In each 3D section a swarm of instanced keycaps flies in, lands
on the surface of a real object (points from `MeshSurfaceSampler`), then a scanline turns the
wireframe blueprint into the solid model, all driven by scroll. Between sections a floor of
keycaps ripples with scroll speed.

### Budget (keep Safari alive)

- One persistent canvas fixed behind the DOM; HTML stays the source of content and 3D objects
  follow empty slots (`id="obj-…"`).
- Mount after hydration, only with WebGL; `requestIdleCallback` needs a fallback on Safari.
- Low-poly instanced keys, pixel ratio capped at 1.5, **no transmission/refraction materials**,
  small procedural environment lighting.
- Without WebGL or with reduced motion: static and readable.

## Quality bar

- Lighthouse 90+ mobile, 95+ desktop. LCP < 2.5 s, CLS < 0.05, INP < 200 ms.
- WCAG 2.2 AA: keyboard everywhere, visible focus ring (accent, 2 px, 3 px offset), alt text,
  checked contrast.
- Responsive down to 320 px with no horizontal scroll.
