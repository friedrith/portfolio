import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "features",
    name: "Features",
    tagline: "See your codebase as features, not files.",
    summary:
      "A Rust CLI and web dashboard that lists the features in any project, with their owners, history, test coverage and technical debt.",
    role: "Creator · Open source",
    // TODO: confirm the start year.
    year: "2025 —",
    url: "https://interaction-dynamics.io/features/",
    repo: "https://github.com/interaction-dynamics/features",
    object: "tiles",
    hint: "Click the stack to switch view",
    problem:
      "Codebases are organized by files and folders, but teams think in features. Nobody can say who owns a feature, how well it is tested or how much debt it carries.",
    // TODO: confirm the research methods and principles.
    ux: {
      users:
        "Tech leads and engineering managers who need to know who owns what, and developers who land in an unfamiliar codebase.",
      methods: [
        {
          phase: "Discover",
          name: "Developer interviews",
          body: 'Talked with tech leads about how they answer "who owns this?" today: Slack threads, git blame and tribal knowledge.',
        },
        {
          phase: "Define",
          name: "Jobs to be done",
          body: "Framed the tool around three jobs: find a feature, see its health, route a change to its owner.",
        },
        {
          phase: "Design",
          name: "CLI-first information architecture",
          body: "Designed the JSON report first, then the dashboard on top of it, so terminal and browser show the same model.",
        },
        {
          phase: "Validate",
          name: "Dogfooding on real repos",
          body: "Ran the CLI on open-source and client codebases to check that detected features match how teams talk about them.",
        },
      ],
      principles: [
        "Zero setup before the first useful output",
        "Speak the team's language: features, not files",
        "Same data in the terminal, CI and the browser",
      ],
    },
    approach: [
      {
        title: "Technology agnostic",
        body: "Features are found from the folder structure or a README frontmatter flag, so it works with any language or framework.",
      },
      {
        title: "CLI and dashboard",
        body: "One Rust binary prints JSON reports for CI, serves a web dashboard, or builds a static version of it.",
      },
      {
        title: "Ownership built in",
        body: "Owners, git history, coverage and commit stats per feature, and a generated CODEOWNERS file.",
      },
    ],
    results: [
      { value: "Rust", label: "single fast binary" },
      { value: "npm · crates", label: "published as features-cli" },
      { value: "CODEOWNERS", label: "generated from features" },
    ],
    stack: ["Rust", "TypeScript", "React", "Git", "CLI"],
  },
  {
    slug: "design-system-hub",
    name: "Design System Hub",
    tagline: "A zero-config home for your design system.",
    summary:
      "An open-source alternative to Storybook with Figma sync: present components, keep products consistent and ship features faster.",
    role: "Creator · Open source",
    year: "2024 —",
    url: "https://design-system-hub.com",
    repo: "https://github.com/interaction-dynamics/design-system-hub",
    problem:
      "Storybook upgrades break, it loads slowly, needs heavy configuration and barely talks to Figma. Teams spend more time maintaining the tool than the design system.",
    // TODO: confirm the research methods and principles.
    ux: {
      users:
        "Designers and developers who share one design system and need a single place to browse, document and check components.",
      methods: [
        {
          phase: "Discover",
          name: "Competitive analysis",
          body: "Audited Storybook, Zeroheight and Supernova on setup time, load time and Figma integration.",
        },
        {
          phase: "Define",
          name: "Pain point mapping",
          body: "Mapped the friction in the designer ↔ developer handoff to pick the problems worth solving first.",
        },
        {
          phase: "Design",
          name: "Figma prototypes",
          body: "Prototyped the hub in Figma and reviewed it with designers before writing the zero-config engine.",
        },
        {
          phase: "Validate",
          name: "Feedback in public",
          body: "Shared early builds openly and turned GitHub issues and community feedback into the roadmap.",
        },
      ],
      principles: [
        "Designers are first-class users, not guests",
        "Fast enough to open in a meeting",
        "Convention over configuration",
      ],
    },
    approach: [
      {
        title: "Zero config",
        body: "The hub reads your components and tokens without configuration and keeps them in sync with the Figma source of truth.",
      },
      {
        title: "Built in public",
        body: "Open source, with a focus on load time, a clean API and a UI that designers enjoy as much as developers.",
      },
    ],
    results: [
      { value: "0", label: "config to start" },
      { value: "Figma", label: "sync built in" },
      // TODO: GitHub stars / users.
      { value: "OSS", label: "MIT, built in public" },
    ],
    stack: ["TypeScript", "React", "Figma API", "Bun"],
  },
  {
    slug: "la-loupe-de-correction",
    name: "La Loupe de correction",
    tagline: "Students find and fix their own mistakes.",
    summary:
      "A French writing tool that flags errors without correcting them, so students understand and fix their mistakes themselves, and earn a star when they're done.",
    // TODO: confirm role, stack and numbers.
    role: "Product & engineering",
    year: "2025 —",
    url: "https://loupedecorrection.com",
    object: "loupe",
    hint: "Mistakes turn green under the lens",
    problem:
      "Correction tools fix the text for the student. The mistake disappears, and so does the lesson. Teachers spend hours on the same errors.",
    // TODO: confirm the research methods, numbers and principles.
    ux: {
      users:
        "Primary school students learning to write in French, and the teachers who correct their work.",
      methods: [
        {
          phase: "Discover",
          name: "Teacher interviews and classroom observation",
          body: "Watched how teachers correct copies and how students react to red ink, to see where the learning gets lost.",
        },
        {
          phase: "Define",
          name: "Personas and learning goals",
          body: "Defined a student and a teacher persona, and one goal: the student must find the fix, not receive it.",
        },
        {
          phase: "Design",
          name: "Low-fi prototypes and gamification",
          body: "Paper and Figma prototypes of the lens, hints and star reward, tuned for young readers.",
        },
        {
          phase: "Validate",
          name: "Usability tests with students",
          body: "Tested with kids in class: can they find the error, understand the hint and fix it without help?",
        },
      ],
      principles: [
        "Guide, never give the answer",
        "Reward effort, not perfection on the first try",
        "Readable and usable by a 7-year-old",
      ],
    },
    approach: [
      {
        title: "Flag, don't fix",
        body: "The student sees where the mistakes are, works out why, and corrects them alone. A star rewards a fully corrected text.",
      },
      {
        title: "Playful, but serious",
        body: "An owl mascot and stars for kids, and a real time saver for teachers.",
      },
    ],
    results: [
      { value: "★", label: "earned when every error is fixed" },
      { value: "0", label: "answers given away" },
      { value: "TODO", label: "students / classes" },
    ],
    stack: ["Next.js", "TypeScript", "AI", "UX research"],
  },
  {
    slug: "plusgrade",
    name: "Plusgrade",
    tagline: "Frontend at scale for travel upgrades.",
    summary:
      "Staff frontend work on the upgrade and upsell platform used by airlines and travel companies: experimentation, micro-frontends and a multi-brand design system.",
    role: "Staff Software Developer",
    year: "2023 —",
    object: "pass",
    hint: "Variant A wins the test",
    problem:
      "One platform serves many travel brands. It had to earn more per visit, load fast on any connection and stay consistent across dozens of themes and languages.",
    ux: {
      users:
        "Travellers deciding in seconds whether to buy an upgrade, on any device and connection, under dozens of airline brands.",
      methods: [
        {
          phase: "Discover",
          name: "Funnel analytics",
          body: "Analytics and session data to find where travellers drop out of the upgrade flow.",
        },
        {
          phase: "Define",
          name: "Hypothesis backlog",
          body: "Each idea written as a testable hypothesis with a metric, prioritized by expected impact and effort.",
        },
        {
          phase: "Design",
          name: "Design tokens with the UX team",
          body: "Paired with designers to turn the multi-brand system into tokens, so every brand gets the same accessible components.",
        },
        {
          phase: "Validate",
          name: "A/B testing",
          body: "25+ experiments per quarter, shipped behind flags and measured on revenue before rolling out.",
        },
      ],
      principles: [
        "Let the data decide, not opinions",
        "Accessible in every theme and language",
        "Speed is a feature: fast on any connection",
      ],
    },
    approach: [
      {
        title: "Experimentation",
        body: "Led the A/B testing strategy: 25+ experiments per quarter, from hypothesis to measured result.",
      },
      {
        title: "Performance",
        body: "Rebuilt an e-commerce travel website on a micro-frontend architecture.",
      },
      {
        title: "Design system",
        body: "90+ themes, multiple languages, 10+ products and 100+ accessible, tested components, migrated to design tokens with the UX team.",
      },
    ],
    results: [
      { value: "$1.3M", label: "extra revenue in Q1 2026 from experiments" },
      { value: "15s → 3s", label: "load time after the micro-frontend rebuild" },
      { value: "25+", label: "experiments per quarter" },
    ],
    stack: ["React", "TypeScript", "Micro-frontends", "MUI", "Storybook"],
  },
  {
    slug: "learn-frontend",
    name: "Learn Frontend",
    tagline: "Not how to code: how to code better.",
    summary:
      "A free learning platform that gathers years of frontend best practices on code craftsmanship, engineering, UX and productivity.",
    role: "Creator · Education",
    // TODO: confirm the start year, stack and numbers.
    year: "2024 —",
    url: "https://learn.interaction-dynamics.io",
    problem:
      "Courses teach the basics, then stop. Developers who already ship code have few places to learn the practices that make code last.",
    // TODO: confirm the research methods and principles.
    ux: {
      users:
        "Developers who already ship code and want to level up on craft, engineering practices and UX.",
      methods: [
        {
          phase: "Discover",
          name: "Mentoring feedback",
          body: "Collected the questions juniors and seniors asked most often in code reviews and mentoring sessions.",
        },
        {
          phase: "Define",
          name: "Content architecture",
          body: "Grouped topics into four tracks so readers can find a practice without reading a whole course.",
        },
        {
          phase: "Design",
          name: "Reference-first page template",
          body: "One template per topic: the recommendation first, then why, then examples, so each page stands on its own.",
        },
        {
          phase: "Validate",
          name: "Reader feedback",
          body: "GitHub issues on every page turn reader questions into rewrites.",
        },
      ],
      principles: [
        "One recommended way, not every option",
        "Scannable in a minute, deep when needed",
        "Free and open to everyone",
      ],
    },
    approach: [
      {
        title: "Curated and opinionated",
        body: "One recommended way for each topic instead of every option, so readers can act on it straight away.",
      },
      {
        title: "Beyond the basics",
        body: "Juniors learn a lot, seniors pick up a few things: each page stands on its own and works as a reference.",
      },
    ],
    results: [
      { value: "4", label: "tracks: craft, engineering, UX, productivity" },
      { value: "Free", label: "open to everyone" },
      { value: "Open", label: "feedback through GitHub issues" },
    ],
    stack: ["Next.js", "TypeScript", "Technical writing"],
  },
];

/** Projects with a 3D object, shown on the landing page. */
export const featuredProjects = projects.filter((p) => p.object);

export const projectHref = (slug: string) => `/projects/${slug}`;
