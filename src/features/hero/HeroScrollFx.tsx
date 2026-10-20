"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/** While the camera flies through the keys, the portrait dissolves. */
export function HeroScrollFx() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom bottom", scrub: true },
      });
      tl.to("[data-hero-portrait]", { scale: 1.12, opacity: 0, ease: "none" }, 0.1).to(
        "[data-hero-ui]",
        { opacity: 0, ease: "none", duration: 0.4 },
        0,
      );
    });
    return () => ctx.revert();
  }, []);
  return null;
}
