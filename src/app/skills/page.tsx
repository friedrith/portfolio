import type { Metadata } from "next";
import Link from "next/link";
import { SKILL_GROUPS, skills } from "@/content/skills";
import { SkillsMap } from "@/features/skills-map/SkillsMap";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Frontend, craft, product and community skills, each backed by a project, article or talk.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <div className="relative z-20 mx-auto max-w-[1400px] px-4 pt-40 pb-24 sm:px-8">
      <SectionHeading
        as="h1"
        label="Skills"
        title="Every star is backed by proof."
        subtitle="Hover or tab through the constellation, click a star to pin it, then follow its proof to the work."
      />
      <SkillsMap />

      {/* Plain list: the scannable fallback, with every proof as a link. */}
      <h2 className="mt-24 text-2xl font-semibold tracking-tight">All skills</h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((g) => (
          <section key={g} aria-labelledby={`group-${g}`}>
            <h3 id={`group-${g}`} className="font-mono text-xs tracking-wider text-muted uppercase">
              {g}
            </h3>
            <ul className="mt-4 space-y-5 border-t border-line pt-4">
              {skills
                .filter((s) => s.group === g)
                .map((s) => (
                  <li key={s.id}>
                    <p className="flex items-center justify-between text-sm">
                      {s.name}
                      <span className="font-mono text-xs text-accent" aria-hidden>
                        {"●".repeat(s.level)}
                      </span>
                      <span className="sr-only">level {s.level} of 3</span>
                    </p>
                    <p className="mt-1 text-xs text-faint">{s.stack.join(" · ")}</p>
                    <ul className="mt-1.5 space-y-1 text-xs text-muted">
                      {s.proofs.map((p) => (
                        <li key={p.label}>
                          {p.href?.startsWith("http") ? (
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline-offset-2 hover:text-fg hover:underline"
                            >
                              {p.label}
                            </a>
                          ) : p.href ? (
                            <Link
                              href={p.href}
                              className="underline-offset-2 hover:text-fg hover:underline"
                            >
                              {p.label}
                            </Link>
                          ) : (
                            p.label
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
