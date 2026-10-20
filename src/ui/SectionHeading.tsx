import type { ReactNode } from "react";

/**
 * Raycast-style heading: small accent label, bold white title, gray subtitle.
 * `id` goes on the title so the section can be labelled by it.
 */
export function SectionHeading({
  id,
  label,
  title,
  subtitle,
  as: Title = "h2",
  children,
}: {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  children?: ReactNode;
}) {
  return (
    <div data-reveal className="mb-16 flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center">
        <p className="mb-4 font-mono text-[11px] tracking-[var(--tracking-label)] text-accent uppercase">
          {label}
        </p>
        <Title
          id={id}
          className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl"
        >
          {title}
        </Title>
        {subtitle && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
