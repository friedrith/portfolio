export type Role = {
  company: string;
  role: string;
  period: string;
  place: string;
  summary: string;
  current?: boolean;
};

export const experience: Role[] = [
  {
    company: "Plusgrade",
    role: "Staff Software Developer",
    period: "2025 — now",
    place: "Montreal",
    summary:
      "A/B experimentation (~$1.3M in Q1 2026), micro-frontend rebuild (15s → 3s), 90+ theme design system, 10+ hires.",
    current: true,
  },
  {
    company: "Interaction Dynamics",
    role: "Founder",
    period: "2023 — now",
    place: "Canada",
    summary: "A collective of developers and designers building digital products.",
    current: true,
  },
  {
    company: "Plusgrade",
    role: "Senior Frontend Developer",
    period: "2023 — 2024",
    place: "Montreal",
    summary: "Design system with 10+ themes and the first micro-frontend architecture.",
  },
  {
    company: "Independent",
    role: "Tech Lead Web Developer",
    period: "2017 — 2023",
    place: "France & Canada",
    summary: "Ontology editor rewrite (80% of 11k lines), offline PWA, 100+ page UX redesign.",
  },
  {
    company: "Pollen Metrology",
    role: "Team Lead Frontend & UX",
    period: "2017 — 2019",
    place: "Grenoble",
    summary: "Qt → web migration, team of 6–8, craftsmanship practices and design workshops.",
  },
  {
    company: "Elqui",
    role: "Cofounder & CTO",
    period: "2014 — 2017",
    place: "Grenoble",
    summary: "Offline WiFi hotspot with file sharing; raised €250k.",
  },
];
