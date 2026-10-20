import Link from "next/link";
import { profile } from "@/content/profile";
import { services } from "@/content/services";
import { GlowCard } from "@/ui/GlowCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { ProcessTabs } from "./ProcessTabs";

const ICONS = [
  <path key="0" d="M4 6h16v12H4zM4 10h16" />,
  <path key="1" d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" />,
  <path key="2" d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  <path key="3" d="M4 19V9m6 10V5m6 14v-7m4 7H3" />,
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 py-32 sm:px-8"
    >
      <SectionHeading
        id="services-title"
        label="Work with me"
        title="From first keystroke to shipped product."
        subtitle="Freelance missions for teams who care about UX, performance and code that lasts."
      >
        <Link href={profile.booking} className="rc-button">
          Book a call
        </Link>
      </SectionHeading>
      <ul className="grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <li key={s.title}>
            <GlowCard data-reveal className="h-full p-7">
              <span className="rc-icon text-accent" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  {ICONS[i % ICONS.length]}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-1 text-lg tracking-tight text-muted">{s.body}</p>
            </GlowCard>
          </li>
        ))}
      </ul>
      <ProcessTabs />
    </section>
  );
}
