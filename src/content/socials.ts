import type { SocialId } from "./types";

export const socials: { id: SocialId; label: string; href: string }[] = [
  { id: "github", label: "GitHub", href: "https://github.com/friedrith" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/thibault-friedrich/" },
  { id: "x", label: "X", href: "https://x.com/R_Thibault_Oliw" },
  { id: "medium", label: "Medium", href: "https://medium.com/@thibault-friedrich" },
  { id: "devto", label: "Dev.to", href: "https://dev.to/friedrith" },
  // TODO: real channel URLs (TikTok too, once it exists).
  { id: "youtube", label: "YouTube", href: "#" },
  { id: "instagram", label: "Instagram", href: "#" },
];

/** Socials with a real URL, for places where a dead link would hurt (footer, JSON-LD). */
export const liveSocials = socials.filter((s) => s.href.startsWith("http"));
