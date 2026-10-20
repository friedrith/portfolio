import Link from "next/link";
import { featuredProjects, projectHref, projects } from "@/content/projects";
import { AppWindow } from "@/ui/AppWindow";
import { Keycap } from "@/ui/Keycap";
import { SectionHeading } from "@/ui/SectionHeading";

/**
 * Each project gets an empty slot that the 3D layer fills: keycaps assemble
 * into the project's object as it scrolls through the viewport. The copy sits
 * in a Raycast-style app window.
 */
export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 pt-32 sm:px-8"
    >
      <SectionHeading
        id="projects-title"
        label="Projects"
        title="Code becomes product."
        subtitle="Keep scrolling: every project starts as a handful of keystrokes and ends as something real."
      />

      {featuredProjects.map((p, i) => (
        <article
          key={p.slug}
          aria-labelledby={`project-${p.slug}`}
          className={`grid min-h-[105vh] items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
        >
          <AppWindow
            data-reveal
            title={p.url ? p.url.replace("https://", "") : p.slug}
            meta={p.year}
          >
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[11px] tracking-[var(--tracking-label)] text-accent uppercase">
                {p.role}
              </p>
              <h3
                id={`project-${p.slug}`}
                className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
              >
                {p.name}
              </h3>
              <p className="mt-3 text-lg">
                {p.tagline} <span className="text-muted">{p.summary}</span>
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {p.results.map((r) => (
                  <div key={r.label} className="flex flex-col-reverse justify-end bg-surface p-4">
                    <dt className="mt-1 text-xs leading-snug text-muted">{r.label}</dt>
                    <dd className="text-lg font-semibold tracking-tight">{r.value}</dd>
                  </div>
                ))}
              </dl>
              <ul aria-label="Stack" className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-line bg-black/20 px-4 py-3">
              <span className="hidden text-xs text-faint sm:block">{p.hint}</span>
              <div className="ml-auto flex items-center gap-2">
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rc-button-ghost !h-8 !text-xs"
                  >
                    Visit <span aria-hidden>↗</span>
                    <span className="sr-only">{p.name} (opens in a new tab)</span>
                  </a>
                )}
                <Link
                  href={projectHref(p.slug)}
                  aria-label={`Case study: ${p.name}`}
                  className="rc-button !h-8 !text-xs"
                >
                  Case study
                  <Keycap size="sm" aria-hidden className="!text-fg">
                    ↵
                  </Keycap>
                </Link>
              </div>
            </div>
          </AppWindow>
          <div id={`obj-${p.slug}`} className="h-[62vh] w-full" aria-hidden />
        </article>
      ))}

      <div data-reveal className="flex justify-center pb-8">
        <Link href="/projects" className="rc-button-ghost">
          All {projects.length} projects <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
