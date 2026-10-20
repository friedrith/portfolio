"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { processSteps } from "@/content/services";
import { Keycap } from "@/ui/Keycap";

/** The freelance process as tabs: pick a phase to see what happens and what you get. */
export function ProcessTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const step = processSteps[active];

  const onKeyDown = (e: KeyboardEvent) => {
    const last = processSteps.length - 1;
    const digit = Number(e.key);
    const next =
      Number.isInteger(digit) && digit >= 1 && digit <= processSteps.length
        ? digit - 1
        : e.key === "ArrowRight"
          ? active === last
            ? 0
            : active + 1
          : e.key === "ArrowLeft"
            ? active === 0
              ? last
              : active - 1
            : e.key === "Home"
              ? 0
              : e.key === "End"
                ? last
                : null;
    if (next === null) return;
    // Digits would otherwise reach the global audience shortcuts.
    e.stopPropagation();
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div data-reveal className="mx-auto mt-10 max-w-xl">
      <div
        role="tablist"
        aria-label="Process"
        onKeyDown={onKeyDown}
        className="mx-auto flex w-fit flex-wrap justify-center gap-1 rounded-2xl border border-line bg-surface/70 p-1"
      >
        {processSteps.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.title}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm transition-colors ${
                selected ? "bg-white/[0.06] text-fg" : "text-muted hover:text-fg"
              }`}
            >
              <Keycap aria-hidden>{i + 1}</Keycap>
              {s.title}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        className="mt-6 min-h-24 text-center"
      >
        <p key={step.title} className="animate-[fade-in_400ms_var(--ease-out-expo)] text-muted">
          {step.body}
        </p>
        <p className="mt-3 font-mono text-[11px] tracking-[var(--tracking-label)] text-accent uppercase">
          → {step.outcome}
        </p>
      </div>
    </div>
  );
}
