import type { Article } from "./types";

export const MEDIUM_RSS = "https://medium.com/feed/@thibault-friedrich";
export const DEVTO_API = "https://dev.to/api/articles?username=friedrith";

const BLOG = "https://blog.interaction-dynamics.io";

// Newest first. The Medium RSS feed only returns the 10 latest posts.
// TODO: import the older articles too, ideally at build time from the feeds above.
export const articles: Article[] = [
  {
    title: "How to Mute/Unmute Google Meet with a Global Keyboard Shortcut on macOS",
    series: "Productivity",
    year: 2026,
    href: `${BLOG}/how-to-mute-unmute-google-meet-with-a-global-keyboard-shortcut-on-macos-83485f70c45f`,
  },
  {
    title: "Level up your frontend project with 5 typesafe patterns",
    series: "CodeCraftsmanship #8",
    year: 2025,
    href: `${BLOG}/level-up-your-frontend-project-with-5-typesafe-patterns-codecraftsmanship-8-fa39362a5488`,
    featured: true,
  },
  {
    title: "How to remain focused at work on iOS/macOS",
    series: "Productivity #3",
    year: 2025,
    href: `${BLOG}/how-to-remain-focused-at-work-on-ios-macos-productivity-3-0b1572314fc3`,
  },
  {
    title: "The perfect setup for Dev Presentations",
    series: "Productivity #2",
    year: 2025,
    href: `${BLOG}/the-perfect-setup-for-dev-presentations-productivity-2-124feac78f17`,
  },
  {
    title: "Analysis of the User Interface of the Future: the prompt",
    series: "UxFuture #2",
    year: 2024,
    href: `${BLOG}/analysis-of-the-user-interface-of-the-future-the-prompt-uxfuture-2-54a9f102aefd`,
    featured: true,
  },
  {
    title: "8 Tips to succeed your Design System",
    series: "DesignSystem #2",
    year: 2024,
    href: `${BLOG}/8-tips-to-succeed-your-design-system-designsystem-2-1bf3f8e9f0f8`,
    featured: true,
  },
  {
    title: "9 Tips to be a Better Developer",
    series: "CodeCraftsmanship #7",
    year: 2024,
    href: `${BLOG}/9-tips-to-be-a-better-developer-codecraftsmanship-7-6e3e7e979511`,
  },
  {
    title: "How to kick off a new side project",
    series: "DesignSystem week 1",
    year: 2024,
    href: `${BLOG}/how-to-kick-off-a-new-side-project-designsystem-week-1-8322a22abcf4`,
  },
  {
    title: "We need a good alternative to Storybook",
    series: "DesignSystem #1",
    year: 2024,
    href: `${BLOG}/we-need-a-good-alternative-to-storybook-designsystem-1-273acd002d2b`,
    featured: true,
  },
  {
    title: "Why you should do Code Review",
    series: "CodeCraftsmanship #6",
    year: 2024,
    href: `${BLOG}/why-you-should-do-code-review-codecraftsmanship-6-7b4de858f057`,
  },
  {
    title: "How to convert your screen recordings to GIF on macOS",
    series: "Dev.to",
    year: 2024,
    href: "https://dev.to/friedrith/how-to-convert-your-screen-recordings-to-gif-on-macos-30om",
  },
  {
    title: "You are using useEffect the wrong way",
    series: "Dev.to",
    year: 2024,
    href: "https://dev.to/friedrith/you-are-using-useeffect-the-wrong-way-4aag",
  },
];
