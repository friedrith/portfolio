"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";
import { liveSocials } from "@/content/socials";
import { sectionNames } from "@/content/audiences";
import { SocialIcon } from "@/ui/SocialIcon";

const LABELS: Record<string, string> = {
  hero: "drag to throw · scroll to fly",
  ...sectionNames,
};

/**
 * Gravity-style footer line that stays on screen everywhere: © on the left,
 * the section you are in at the center, socials on the right.
 */
export function BottomBar() {
  const pathname = usePathname();
  const [current, setCurrent] = useState("hero");

  useEffect(() => {
    const sections = Object.keys(LABELS)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setCurrent(visible[visible.length - 1].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  // Visible at the very top and the very bottom of the page, hidden in between.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const atEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 80;
      setHidden(y > 24 && !atEnd);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const label = pathname === "/" ? LABELS[current] : pathname.split("/")[1];

  return (
    <div
      inert={hidden}
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-opacity duration-500 ${hidden ? "opacity-0" : "opacity-100"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent" />
      <div className="relative flex h-14 items-center justify-between gap-4 border-t border-white/[0.07] px-6 sm:px-12">
        <span className="text-[11px] text-faint">© 2026 {profile.name}</span>
        <span
          key={label}
          className="hidden animate-[fade-in_600ms_ease] text-[11px] tracking-[0.25em] text-faint uppercase md:block"
          aria-hidden
        >
          {label}
        </span>
        <ul
          aria-label="Socials"
          className="pointer-events-auto flex items-center gap-4 text-white/60"
        >
          {liveSocials.map((s, i) => (
            <li key={s.id} className={i > 2 ? "hidden sm:block" : undefined}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="block transition-colors hover:text-fg"
              >
                <SocialIcon id={s.id} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
