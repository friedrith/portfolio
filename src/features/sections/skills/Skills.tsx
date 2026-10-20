import Link from "next/link";
import { SkillsMap } from "@/features/skills-map/SkillsMap";
import { SectionHeading } from "@/ui/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 py-32 sm:px-8"
    >
      <SectionHeading
        id="skills-title"
        label="Skills"
        title="A star map, not a progress bar."
        subtitle="Hover a star to preview it, click to pin it and follow its proof to the work."
      >
        <Link href="/skills" className="rc-button-ghost">
          Explore the full map <span aria-hidden>→</span>
        </Link>
      </SectionHeading>
      <div data-reveal>
        <SkillsMap compact />
      </div>
    </section>
  );
}
