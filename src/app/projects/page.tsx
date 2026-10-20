import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectHref, projects } from "@/content/projects";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source tools, products and client work: design systems, developer tooling, education and frontend at scale.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="relative z-20 mx-auto max-w-[1200px] px-4 pt-40 pb-24 sm:px-8">
      <SectionHeading
        as="h1"
        label="Projects"
        title="Everything I've built."
        subtitle="Open-source tools, products and client work, each with its case study."
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug} data-reveal>
            <Link
              href={projectHref(p.slug)}
              className="rc-window group flex h-full flex-col overflow-hidden transition-colors hover:border-white/20"
            >
              <div
                aria-hidden={!p.cover}
                className={`relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-line ${p.cover ? "bg-surface" : "grid-bg"}`}
              >
                {p.cover ? (
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                ) : (
                  <span className="px-6 text-center text-3xl font-semibold tracking-[-0.04em] text-balance text-white/15 transition-colors group-hover:text-white/30 sm:text-4xl">
                    {p.name}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] tracking-[var(--tracking-label)] text-accent uppercase">
                  {p.role} · {p.year}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{p.name}</h2>
                <p className="mt-2 text-muted">{p.tagline}</p>
                <ul aria-label="Stack" className="mt-auto flex flex-wrap gap-1.5 pt-6">
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
