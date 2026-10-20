import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectHref, projects } from "@/content/projects";
import type { UxDesign } from "@/content/types";
import { SocialIcon } from "@/ui/SocialIcon";

export const dynamicParams = false;

const pad = (n: number) => String(n).padStart(2, "0");

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: projectHref(slug) },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const chapters: { title: string; body: React.ReactNode }[] = [
    {
      title: "Problem",
      body: <p className="text-xl leading-relaxed text-fg/90">{project.problem}</p>,
    },
    ...(project.ux ? [{ title: "UX design", body: <UxDesignChapter ux={project.ux} /> }] : []),
    {
      title: "Approach",
      body: (
        <ul className="grid gap-8">
          {project.approach.map((a) => (
            <li key={a.title}>
              <h3 className="text-xl font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Results",
      body: (
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {project.results.map((r) => (
            <div key={r.label} className="flex flex-col-reverse justify-end bg-bg p-8">
              <dt className="mt-2 text-sm text-muted">{r.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight">{r.value}</dd>
            </div>
          ))}
        </dl>
      ),
    },
    {
      title: "Stack",
      body: (
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <article className="relative z-20 mx-auto max-w-[1100px] px-4 pt-40 pb-24 sm:px-8">
      <Link href="/projects" className="font-mono text-xs text-muted hover:text-fg">
        <span aria-hidden>← </span>All projects
      </Link>
      <p className="mt-12 flex gap-3 font-mono text-xs text-muted">
        <span className="text-accent" aria-hidden>
          {pad(index + 1)}
        </span>
        {project.role} · {project.year}
      </p>
      <h1
        data-reveal
        className="text-gradient mt-4 text-5xl font-semibold tracking-[var(--tracking-display)] sm:text-7xl"
      >
        {project.name}
      </h1>
      <p data-reveal className="mt-6 max-w-2xl text-2xl leading-snug text-fg/90">
        {project.summary}
      </p>
      {(project.url || project.repo) && (
        <div data-reveal className="mt-8 flex flex-wrap gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rc-button-ghost"
            >
              {project.url.replace("https://", "")} <span aria-hidden>↗</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rc-button-ghost"
            >
              <SocialIcon id="github" className="size-3.5" /> GitHub <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      )}

      {/* TODO: hero video (Screen Studio, Rotato). */}
      {project.cover && (
        <div
          data-reveal
          className="relative mt-16 aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-surface"
        >
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            sizes="(min-width: 1100px) 1036px, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="mt-24 grid gap-16">
        {chapters.map((c, i) => (
          <Chapter key={c.title} index={i + 1} title={c.title}>
            {c.body}
          </Chapter>
        ))}
      </div>

      <Link href={projectHref(next.slug)} className="group mt-32 block border-t border-line pt-10">
        <span className="font-mono text-xs text-muted">Next project</span>
        <span className="mt-2 flex items-center justify-between text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
          {next.name}
          <span className="text-muted transition-transform group-hover:translate-x-2" aria-hidden>
            →
          </span>
        </span>
      </Link>
    </article>
  );
}

function Chapter({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section data-reveal className="grid gap-6 md:grid-cols-[200px_1fr]">
      <h2 className="font-mono text-xs tracking-wider text-muted uppercase">
        <span className="text-accent" aria-hidden>
          {pad(index)}
        </span>{" "}
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

/** Users, the methods used at each phase of the UX process, and the principles they produced. */
function UxDesignChapter({ ux }: { ux: UxDesign }) {
  return (
    <div className="grid gap-10">
      <div>
        <h3 className="font-mono text-xs tracking-wider text-muted uppercase">Users</h3>
        <p className="mt-3 text-xl leading-relaxed text-fg/90">{ux.users}</p>
      </div>
      <div>
        <h3 className="font-mono text-xs tracking-wider text-muted uppercase">Methodology</h3>
        <ol className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {ux.methods.map((m, i) => (
            <li key={m.name} className="bg-bg p-6 sm:p-8">
              <p className="font-mono text-[11px] tracking-[var(--tracking-label)] text-accent uppercase">
                {pad(i + 1)} · {m.phase}
              </p>
              <h4 className="mt-3 text-lg font-semibold tracking-tight">{m.name}</h4>
              <p className="mt-2 leading-relaxed text-muted">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="font-mono text-xs tracking-wider text-muted uppercase">Design principles</h3>
        <ul className="mt-4 grid gap-3">
          {ux.principles.map((p) => (
            <li key={p} className="flex gap-3 text-lg leading-snug">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
