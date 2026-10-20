"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Writing & Talks" },
];

/**
 * Minimal header after gravity-design.de: a lowercase wordmark on the left,
 * a few quiet capitalized text links on the right. It only gains a soft backdrop once the
 * page scrolls, so the hero stays clean.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg via-bg/80 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative flex h-20 items-center justify-between px-6 sm:px-12">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-accent lowercase"
          aria-label="Thibault Friedrich, home"
        >
          thibault<span className="text-white/50">.</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-white/55 transition-colors hover:text-fg md:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="text-fg transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
