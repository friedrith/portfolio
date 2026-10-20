import type { Metadata } from "next";
import { articles } from "@/content/articles";
import { talks } from "@/content/talks";
import { MediaCard } from "@/features/sections/writing/MediaCard";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Writing & talks",
  description: "Articles on code craftsmanship, design systems and UX, and the talks behind them.",
  alternates: { canonical: "/blog" },
};

const GRID = "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4";

// TODO: replace with MDX posts imported from Medium (RSS) and Dev.to (API), see content/articles.ts.
export default function BlogPage() {
  return (
    <div className="relative z-20 mx-auto max-w-[1200px] px-4 pt-40 pb-24 sm:px-8">
      <SectionHeading
        as="h1"
        label="Writing & talks"
        title="Notes on craft."
        subtitle="Talks at ConFoo and /dev/mtl, and articles from Medium and Dev.to."
      />

      <section id="talks" aria-labelledby="talks-title" className="scroll-mt-28">
        <h2 id="talks-title" className="font-mono text-xs tracking-wider text-accent uppercase">
          Talks
        </h2>
        <ul className={GRID}>
          {talks.map((t) => (
            <li key={t.title}>
              <MediaCard
                kind="talk"
                title={t.title}
                meta={[t.event, t.year].filter(Boolean).join(" · ")}
                href={t.href}
                thumbnail={t.thumbnail}
              />
            </li>
          ))}
        </ul>
      </section>

      <section id="articles" aria-labelledby="articles-title" className="mt-24 scroll-mt-28">
        <h2 id="articles-title" className="font-mono text-xs tracking-wider text-accent uppercase">
          Articles
        </h2>
        <ul className={GRID}>
          {articles.map((a) => (
            <li key={a.title}>
              <MediaCard
                kind="article"
                title={a.title}
                meta={`${a.series} · ${a.year}`}
                href={a.href}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
