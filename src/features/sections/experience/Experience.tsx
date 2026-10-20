import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { AppWindow } from "@/ui/AppWindow";
import { SectionHeading } from "@/ui/SectionHeading";

/** Career as a Raycast list: one window, one row per role. */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 py-32 sm:px-8"
    >
      <SectionHeading
        id="experience-title"
        label="Experience"
        title="12 years, from cofounder to staff engineer."
        subtitle="Startups, scale-ups and freelance: always on the frontend, always close to users."
      >
        <a href={profile.cv} className="rc-button" download>
          Download CV
        </a>
      </SectionHeading>
      <AppWindow
        data-reveal
        title="Experience"
        meta={`${experience.length} roles`}
        className="mx-auto max-w-4xl"
      >
        <ol className="p-2">
          {experience.map((e) => (
            <li
              key={`${e.company}-${e.period}`}
              className="grid gap-1 rounded-xl px-4 py-4 transition-colors hover:bg-white/[0.04] sm:grid-cols-[160px_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-xs text-faint">{e.period}</span>
              <div>
                <h3 className="font-medium">
                  {e.role} <span className="text-muted">· {e.company}</span>
                  {e.current && (
                    <span className="ml-2 rounded-md bg-accent-soft px-1.5 py-0.5 align-middle font-mono text-[10px] text-accent">
                      NOW
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{e.summary}</p>
              </div>
              <span className="hidden text-xs text-faint sm:block">{e.place}</span>
            </li>
          ))}
        </ol>
      </AppWindow>
    </section>
  );
}
