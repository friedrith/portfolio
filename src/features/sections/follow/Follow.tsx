import { channels, featuredChannel } from "@/content/channels";
import { GlowCard } from "@/ui/GlowCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { SocialIcon } from "@/ui/SocialIcon";

const isLive = (href: string) => href.startsWith("http");

/** Channels as a Raycast "store" grid, with the Dark Theme Tech channel featured. */
export function Follow() {
  return (
    <section
      id="follow"
      aria-labelledby="follow-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 py-32 sm:px-8"
    >
      <SectionHeading
        id="follow-title"
        label="Follow"
        title="There's a channel for that."
        subtitle="Code craft on Medium and Dev.to, open source on GitHub, and dark-theme tech on video."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <div
          data-reveal
          className="rc-window group relative flex min-h-[320px] flex-col justify-end overflow-hidden p-7 lg:row-span-2"
        >
          <div
            className="stripes absolute -inset-[20%] opacity-60 transition-opacity group-hover:opacity-90"
            aria-hidden
          />
          <div className="relative">
            <span className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[10px] tracking-[var(--tracking-label)] text-fg uppercase">
              Coming soon
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              {isLive(featuredChannel.href) ? (
                <a href={featuredChannel.href} target="_blank" rel="noopener noreferrer">
                  {featuredChannel.name}
                </a>
              ) : (
                featuredChannel.name
              )}
            </h3>
            <p className="mt-2 text-muted">{featuredChannel.description}</p>
            <p className="mt-6 font-mono text-xs text-faint">{featuredChannel.handle}</p>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {channels.map((c) => {
            const inner = (
              <>
                <span className="rc-icon !size-10 !rounded-xl text-fg" aria-hidden>
                  <SocialIcon id={c.id} />
                </span>
                <span className="min-w-0">
                  <span className="block font-medium">{c.name}</span>
                  <span className="block font-mono text-[11px] text-faint">{c.handle}</span>
                  <span className="mt-2 block text-sm text-muted">{c.description}</span>
                </span>
              </>
            );
            return (
              <li key={c.id}>
                <GlowCard data-reveal className="h-full">
                  {isLive(c.href) ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full items-start gap-4 p-5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex h-full items-start gap-4 p-5">{inner}</div>
                  )}
                </GlowCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
