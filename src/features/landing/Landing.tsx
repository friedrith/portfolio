import type { Audience } from "@/content/types";
import { AudienceProvider } from "@/features/audience/AudienceProvider";
import { SectionStack } from "@/features/audience/SectionStack";
import { Hero } from "@/features/hero/Hero";
import { Contact } from "@/features/sections/contact/Contact";
import { Experience } from "@/features/sections/experience/Experience";
import { Follow } from "@/features/sections/follow/Follow";
import { Impact } from "@/features/sections/impact/Impact";
import { Projects } from "@/features/sections/projects/Projects";
import { Services } from "@/features/sections/services/Services";
import { Skills } from "@/features/sections/skills/Skills";
import { Writing } from "@/features/sections/writing/Writing";

/** One landing page, three audiences: the audience changes the pitch and reorders the story. */
export function Landing({ audience }: { audience: Audience }) {
  return (
    <AudienceProvider initial={audience}>
      <Hero />
      <SectionStack
        sections={{
          impact: <Impact />,
          projects: <Projects />,
          experience: <Experience />,
          services: <Services />,
          skills: <Skills />,
          writing: <Writing />,
          follow: <Follow />,
          contact: <Contact />,
        }}
      />
    </AudienceProvider>
  );
}
