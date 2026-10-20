export type Audience = "hire" | "build" | "follow";

export type SectionId =
  | "impact"
  | "projects"
  | "experience"
  | "services"
  | "skills"
  | "writing"
  | "follow"
  | "contact";

export type SocialId = "github" | "linkedin" | "x" | "medium" | "devto" | "youtube" | "instagram";

export type Link = { label: string; href: string };

export type ProjectObject = "tiles" | "loupe" | "pass";

/** Steps of the UX process, in order: research, framing, design, then validation. */
export type UxPhase = "Discover" | "Define" | "Design" | "Validate";

export type UxDesign = {
  /** Who the product is for and what they need, in one or two sentences. */
  users: string;
  /** Methods used at each phase; phases without a method are left out of the timeline. */
  methods: { phase: UxPhase; name: string; body: string }[];
  /** Design principles that came out of the research and guided every decision. */
  principles: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  year: string;
  url?: string;
  /** Public source code, for open-source projects. */
  repo?: string;
  /** Screenshot of the product, under /public/assets/projects/{slug}/. */
  cover?: { src: string; alt: string };
  /** 3D object built on the landing page. Projects without one only appear on /projects. */
  object?: ProjectObject;
  /** One-line hint under the project window, describing what the 3D object does. */
  hint?: string;
  problem: string;
  /** UX design work: users, methodology and principles. */
  ux?: UxDesign;
  approach: { title: string; body: string }[];
  results: { value: string; label: string }[];
  stack: string[];
};

export type SkillGroup = "Frontend" | "Craft" | "Product" | "Community";

export type Skill = {
  id: string;
  name: string;
  group: SkillGroup;
  level: 1 | 2 | 3;
  /** Libraries, tools and sub-skills used day to day. */
  stack: string[];
  /** Each proof links to the project, article or talk that backs the skill. */
  proofs: { label: string; href?: string }[];
  /** Position on the star map, in percent of the map box. */
  x: number;
  y: number;
  links: string[];
};

export type Article = {
  title: string;
  series: string;
  year: number;
  href: string;
  /** Shown on the landing page; every article is listed on /blog. */
  featured?: boolean;
};

export type Talk = {
  title: string;
  event: string;
  year?: number;
  href?: string;
  /** Path under /public, e.g. "/assets/talks/confoo-2026.jpg". */
  thumbnail?: string;
};
