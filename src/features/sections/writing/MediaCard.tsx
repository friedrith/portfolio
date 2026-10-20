import Image from "next/image";
import { GlowCard } from "@/ui/GlowCard";

const ICONS = {
  talk: <path d="M7 4.5v15l12-7.5-12-7.5Z" fill="currentColor" />,
  article: (
    <path
      d="M6 3h9l3 3v15H6zM9 9h6M9 13h6M9 17h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
};

/** A talk or an article: thumbnail, meta line and title, linking out when there's a URL. */
export function MediaCard({
  kind,
  title,
  meta,
  href,
  thumbnail,
}: {
  kind: "talk" | "article";
  title: string;
  meta: string;
  href?: string;
  thumbnail?: string;
}) {
  const body = (
    <>
      <div className="grid-bg relative mb-6 grid aspect-video place-items-center overflow-hidden rounded-xl border border-line bg-surface">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        )}
        <span
          className="relative grid size-11 place-items-center rounded-full bg-white/10 backdrop-blur"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className={`size-4 text-fg ${kind === "talk" ? "ml-0.5" : ""}`}>
            {ICONS[kind]}
          </svg>
        </span>
      </div>
      <p className="font-mono text-[11px] tracking-[var(--tracking-label)] text-accent uppercase">
        {meta}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3>
    </>
  );
  return (
    <GlowCard data-reveal className="h-full">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-col p-6"
        >
          {body}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <div className="flex h-full flex-col p-6">{body}</div>
      )}
    </GlowCard>
  );
}
