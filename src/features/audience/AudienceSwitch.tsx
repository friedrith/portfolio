"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AUDIENCES, audiences } from "@/content/audiences";
import { audienceHref, setAudience } from "./audience-store";
import { useAudience } from "./AudienceProvider";

function isTyping() {
  const el = document.activeElement;
  return (
    el instanceof HTMLInputElement ||
    el instanceof HTMLTextAreaElement ||
    (el instanceof HTMLElement && el.isContentEditable)
  );
}

/**
 * The audience switch as a single line of text, gravity-design.de style:
 * `hire · freelance · learn`. The active word is in the accent color. Keys 1–3
 * also switch while the hero is on screen.
 */
export function AudienceSwitch() {
  const router = useRouter();
  const audience = useAudience();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping()) return;
      if (document.querySelector("dialog[open]")) return;
      if (window.scrollY > window.innerHeight) return;
      const next = AUDIENCES[["1", "2", "3"].indexOf(e.key)];
      if (!next) return;
      setAudience(next);
      router.push(audienceHref(next), { scroll: false });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <nav aria-labelledby="audience-label" className="pointer-events-auto">
      <p id="audience-label" className="mb-2 text-base text-faint">
        what brings you here?
      </p>
      <ul className="flex items-center gap-2 text-lg font-medium sm:text-xl">
        {AUDIENCES.map((a, i) => (
          <li key={a} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-white/30" aria-hidden>
                ·
              </span>
            )}
            <Link
              href={audienceHref(a)}
              scroll={false}
              onClick={() => setAudience(a)}
              aria-current={a === audience ? "page" : undefined}
              aria-keyshortcuts={String(i + 1)}
              title={`${audiences[a].description} (${i + 1})`}
              className={`transition-colors ${
                a === audience ? "text-accent" : "text-white/55 hover:text-white"
              }`}
            >
              {audiences[a].short}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
