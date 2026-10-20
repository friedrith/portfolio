"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Renders the final value on the server (no "0" without JS), then counts up
 * from zero the first time it scrolls into view.
 */
export function CountUp({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1600);
        setShown(value * (1 - Math.pow(1 - k, 4)));
        if (k < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    });
    // Reset below the fold only, so nothing visible flickers.
    frame = requestAnimationFrame(() => {
      setShown(0);
      io.observe(el);
    });
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{shown.toFixed(decimals)}</span>;
}
