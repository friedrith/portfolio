import Link from "next/link";
import { articles } from "@/content/articles";
import { talks } from "@/content/talks";
import { SectionHeading } from "@/ui/SectionHeading";
import { MediaCard } from "./MediaCard";

export function Writing() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 py-32 sm:px-8"
    >
      <SectionHeading
        id="writing-title"
        label="Talks & writing"
        title="On stage and in writing."
        subtitle="Talks at ConFoo and /dev/mtl, and ~30 articles on code craftsmanship, design systems, TypeScript and UX."
      >
        <Link href="/blog" className="rc-button-ghost">
          All articles & talks <span aria-hidden>→</span>
        </Link>
      </SectionHeading>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        {articles
          .filter((a) => a.featured)
          .map((a) => (
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
  );
}
