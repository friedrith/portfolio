import type { SocialId } from "./types";

export type Channel = {
  id: SocialId;
  name: string;
  handle: string;
  description: string;
  href: string;
};

// TODO: real handle and link once the channel launches.
export const featuredChannel: Channel = {
  id: "youtube",
  name: "Dark Theme Tech",
  handle: "YouTube · Instagram · TikTok",
  description: "Tech EDC, travel EDC and smart desks — curated, beautiful, all in dark.",
  href: "#",
};

export const channels: Channel[] = [
  {
    id: "medium",
    name: "Medium",
    handle: "@thibault-friedrich",
    description: "Monthly articles on code craft, design systems and UX.",
    href: "https://medium.com/@thibault-friedrich",
  },
  {
    id: "devto",
    name: "Dev.to",
    handle: "friedrith",
    description: "The same articles, for the dev.to community.",
    href: "https://dev.to/friedrith",
  },
  {
    id: "github",
    name: "GitHub",
    handle: "friedrith",
    description: "Design System Hub and other open-source work.",
    href: "https://github.com/friedrith",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "thibault-friedrich",
    description: "Career updates and frontend leadership.",
    href: "https://www.linkedin.com/in/thibault-friedrich/",
  },
  {
    id: "x",
    name: "X",
    handle: "@R_Thibault_Oliw",
    description: "Short takes on frontend and tooling.",
    href: "https://x.com/R_Thibault_Oliw",
  },
  {
    id: "instagram",
    name: "Instagram",
    // TODO: real handle.
    handle: "Dark Theme Tech",
    description: "Desk setups and EDC flat lays.",
    href: "#",
  },
];
