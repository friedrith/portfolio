"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { runtime } from "@/lib/runtime";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

function scrollToHashOrTop() {
  const target = window.location.hash ? document.querySelector(window.location.hash) : null;
  if (lenis) lenis.scrollTo(target instanceof HTMLElement ? target : 0, { immediate: true });
  else if (target) target.scrollIntoView();
  else window.scrollTo(0, 0);
}

/** Lenis smooth scrolling driven by GSAP's ticker, so ScrollTrigger and Lenis share one clock. */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = prefersReducedMotion();
    runtime.reducedMotion = reduced;
    if (reduced) return;

    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, anchors: true });
    lenis.on("scroll", (l: Lenis) => {
      runtime.scrollVelocity = l.velocity;
      ScrollTrigger.update();
    });
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    scrollToHashOrTop();
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
