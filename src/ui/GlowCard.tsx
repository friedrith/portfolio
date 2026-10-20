"use client";

import type { ComponentProps } from "react";

/** Linear-style card: a soft glow and border highlight follow the cursor. */
export function GlowCard({ className = "", children, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`glow-card ${className}`}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
