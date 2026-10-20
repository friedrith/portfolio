import type { Audience, SectionId } from "./types";

export const AUDIENCES: Audience[] = ["hire", "build", "follow"];

export function parseAudience(value: string | string[] | undefined): Audience {
  return value === "build" || value === "follow" ? value : "hire";
}

export const audiences: Record<
  Audience,
  {
    /** Word in the hero switch: `hire · freelance · learn`. */
    short: string;
    /** Longer label, used in the ⌘K palette. */
    title: string;
    description: string;
    pitch: string;
    sections: SectionId[];
  }
> = {
  hire: {
    short: "hire",
    title: "I'm hiring",
    description: "Impact, experience and CV",
    pitch: "Staff Frontend Engineer. I turn code into products people love.",
    sections: [
      "impact",
      "projects",
      "experience",
      "skills",
      "writing",
      "services",
      "follow",
      "contact",
    ],
  },
  build: {
    short: "freelance",
    title: "I have a project",
    description: "Services, process and case studies",
    pitch: "AI-boosted frontend developer. I build your frontend to scale.",
    sections: [
      "projects",
      "services",
      "impact",
      "experience",
      "skills",
      "writing",
      "follow",
      "contact",
    ],
  },
  follow: {
    short: "learn",
    title: "I want to learn",
    description: "Articles, talks and videos",
    pitch: "Code craft, design systems and dark-theme tech, in articles, talks and videos.",
    sections: [
      "follow",
      "writing",
      "projects",
      "skills",
      "impact",
      "experience",
      "services",
      "contact",
    ],
  },
};

/** Names shown in the bottom bar and the ⌘K palette. */
export const sectionNames: Record<SectionId, string> = {
  impact: "impact",
  projects: "projects",
  experience: "experience",
  services: "work with me",
  skills: "skills",
  writing: "talks & writing",
  follow: "follow",
  contact: "contact",
};
