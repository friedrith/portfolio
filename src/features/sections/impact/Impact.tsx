import { stats } from "@/content/impact";
import { GlowCard } from "@/ui/GlowCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { CountUp } from "./CountUp";

export function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 py-32 sm:px-8"
    >
      <SectionHeading
        id="impact-title"
        label="Impact"
        title="Numbers, not adjectives."
        subtitle="What the work changed for the products and the teams behind them."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label}>
            <GlowCard data-reveal className="h-full p-6">
              <p className="text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                <span className="sr-only">{`${s.prefix}${s.value.toFixed(s.decimals)}${s.suffix}`}</span>
                <span aria-hidden>
                  <span className="text-muted">{s.prefix}</span>
                  <CountUp value={s.value} decimals={s.decimals} />
                  <span className="text-accent">{s.suffix}</span>
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{s.label}</p>
            </GlowCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
