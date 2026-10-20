"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { liveSocials } from "@/content/socials";
import { CONTACT_EVENT } from "@/lib/runtime";
import { Keycap } from "@/ui/Keycap";
import { SocialIcon } from "@/ui/SocialIcon";
import { ContactDialog } from "./ContactDialog";

export function Contact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(CONTACT_EVENT, onOpen);
    return () => window.removeEventListener(CONTACT_EVENT, onOpen);
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-20 mx-auto max-w-[1200px] px-4 pt-24 pb-16 sm:px-8"
    >
      <div className="flex flex-col items-center text-center">
        <div id="obj-enter" className="h-[38vh] w-full max-w-xl" aria-hidden />
        <div data-reveal className="flex flex-col items-center">
          <p className="mb-4 font-mono text-[11px] tracking-[var(--tracking-label)] text-accent uppercase">
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-gradient text-6xl font-semibold tracking-[-0.05em] sm:text-8xl"
          >
            Let&apos;s build.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            A role, a mission or a collaboration. Press the key, or write to me directly.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rc-button cursor-pointer"
            >
              Start a conversation
              <Keycap size="sm" aria-hidden className="!text-fg">
                ↵
              </Keycap>
            </button>
            <a href={`mailto:${profile.email}`} className="rc-button-ghost">
              {profile.email}
            </a>
          </div>
          <ul aria-label="Socials" className="mt-8 flex gap-1 text-muted">
            {liveSocials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-lg hover:bg-white/[0.06] hover:text-fg"
                >
                  <SocialIcon id={s.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-24 flex flex-col items-center gap-1 text-center text-xs text-faint">
        <span>{profile.location}</span>
        <span>
          Built with Next.js, React Three Fiber, Rapier &amp; GSAP. Every key is real code.
        </span>
      </p>

      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
