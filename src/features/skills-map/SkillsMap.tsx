"use client";

import Link from "next/link";
import { useState } from "react";
import { skills } from "@/content/skills";
import type { Skill, SkillGroup } from "@/content/types";

const GROUP_COLOR: Record<SkillGroup, string> = {
  Frontend: "#a48bff",
  Craft: "#f7f8f8",
  Product: "#7c5cff",
  Community: "#8a8f98",
};

const byId = Object.fromEntries(skills.map((s) => [s.id, s]));

/**
 * Skills as a constellation: each star is a skill, sized by depth. Hover
 * previews a star, click pins it, and its proofs link to the actual work.
 * Fully keyboard accessible (Tab + Enter).
 */
export function SkillsMap({ compact = false }: { compact?: boolean }) {
  const [pinnedId, setPinnedId] = useState(skills[0].id);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const activeId = previewId ?? pinnedId;
  const active = byId[activeId] ?? skills[0];

  return (
    <div
      className={`grid gap-4 ${compact ? "lg:grid-cols-[1fr_320px]" : "lg:grid-cols-[1fr_380px]"}`}
    >
      <div
        className={`rc-window relative overflow-hidden lg:h-auto ${
          compact ? "h-[460px] lg:min-h-[520px]" : "h-[620px] lg:min-h-[620px]"
        }`}
        onMouseLeave={() => setPreviewId(null)}
      >
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="pointer-events-none absolute inset-[6%]" aria-hidden>
          <svg className="size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {skills.flatMap((s) =>
              s.links.map((to) => {
                const t = byId[to];
                const lit = s.id === activeId || to === activeId;
                return (
                  <line
                    key={`${s.id}-${to}`}
                    x1={s.x}
                    y1={s.y}
                    x2={t.x}
                    y2={t.y}
                    stroke={lit ? "#7c5cff" : "rgba(255,255,255,0.12)"}
                    strokeWidth={lit ? 1.5 : 1}
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: "stroke 300ms" }}
                  />
                );
              }),
            )}
          </svg>
        </div>
        <ul aria-label="Skills" className="absolute inset-[6%]">
          {skills.map((s) => (
            <Star
              key={s.id}
              skill={s}
              active={s.id === activeId}
              pinned={s.id === pinnedId}
              onPreview={setPreviewId}
              onPin={(id) => {
                setPinnedId(id);
                setPreviewId(null);
              }}
            />
          ))}
        </ul>
        <p className="absolute bottom-3 left-4 text-[11px] text-faint">
          Hover to preview · click to pin
        </p>
      </div>

      <SkillPanel skill={active} pinned={active.id === pinnedId} />
    </div>
  );
}

function Star({
  skill,
  active,
  pinned,
  onPreview,
  onPin,
}: {
  skill: Skill;
  active: boolean;
  pinned: boolean;
  onPreview: (id: string | null) => void;
  onPin: (id: string) => void;
}) {
  const size = 6 + skill.level * 4;
  const color = GROUP_COLOR[skill.group];
  return (
    <li
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
    >
      <button
        type="button"
        onMouseEnter={() => onPreview(skill.id)}
        onFocus={() => onPreview(skill.id)}
        onBlur={() => onPreview(null)}
        onClick={() => onPin(skill.id)}
        className="group relative grid size-11 cursor-pointer place-items-center rounded-full"
        aria-pressed={pinned}
        aria-label={`${skill.name}, level ${skill.level} of 3`}
      >
        {pinned && (
          <span
            className="absolute inset-1 animate-ping rounded-full border border-accent/60"
            aria-hidden
          />
        )}
        <span
          className="block rounded-full transition-transform duration-300 group-hover:scale-150"
          style={{
            width: size,
            height: size,
            background: color,
            boxShadow: `0 0 ${active ? 28 : 12}px ${color}`,
            transform: active ? "scale(1.6)" : undefined,
          }}
          aria-hidden
        />
        <span
          className={`pointer-events-none absolute top-full left-1/2 -translate-x-1/2 text-[11px] whitespace-nowrap transition-colors ${
            active ? "text-fg" : "text-faint"
          }`}
          aria-hidden
        >
          {skill.name}
        </span>
      </button>
    </li>
  );
}

function SkillPanel({ skill, pinned }: { skill: Skill; pinned: boolean }) {
  return (
    <aside aria-label={`${skill.name} details`} className="rc-window flex flex-col overflow-hidden">
      <div className="rc-titlebar">
        <span className="text-xs text-faint">{skill.group}</span>
        {pinned && (
          <span className="ml-auto rounded-md bg-accent-soft px-1.5 py-0.5 font-mono text-[10px] text-fg">
            PINNED
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-semibold tracking-[-0.03em]">{skill.name}</h3>
        <p className="sr-only">Level {skill.level} of 3</p>
        <div className="mt-4 flex gap-1" aria-hidden>
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={`h-1 w-10 rounded-full ${n <= skill.level ? "bg-accent" : "bg-line-strong"}`}
            />
          ))}
        </div>
        <h4 className="mt-8 mb-3 font-mono text-[11px] tracking-[var(--tracking-label)] text-muted uppercase">
          Stack
        </h4>
        <ul className="flex flex-wrap gap-1.5">
          {skill.stack.map((item) => (
            <li
              key={item}
              className="rounded-md border border-line bg-white/[0.03] px-2 py-1 text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
        <h4 className="mt-8 mb-2 font-mono text-[11px] tracking-[var(--tracking-label)] text-muted uppercase">
          Proof
        </h4>
        <ul className="-mx-2">
          {skill.proofs.map((p) => (
            <li key={p.label}>
              <ProofRow label={p.label} href={p.href} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function ProofRow({ label, href }: { label: string; href?: string }) {
  const content = (
    <>
      <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
      <span className="flex-1 text-sm">{label}</span>
      {href && (
        <span className="text-xs text-muted" aria-hidden>
          {href.startsWith("http") ? "↗" : "→"}
        </span>
      )}
    </>
  );
  if (!href) return <div className="rc-row">{content}</div>;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="rc-row">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className="rc-row">
      {content}
    </Link>
  );
}
