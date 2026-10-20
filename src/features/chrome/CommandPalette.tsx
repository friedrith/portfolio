"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AUDIENCES, audiences } from "@/content/audiences";
import { profile } from "@/content/profile";
import { projectHref, projects } from "@/content/projects";
import { liveSocials } from "@/content/socials";
import { audienceHref, setAudience } from "@/features/audience/audience-store";
import { Dialog } from "@/ui/Dialog";
import { Keycap } from "@/ui/Keycap";
import { PALETTE_EVENT } from "./palette-events";

type Action = { id: string; group: string; label: string; hint?: string; run: () => void };

/** Raycast-style ⌘K palette: the keyboard-first way through the whole site. */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const listId = useId();

  const actions = useMemo<Action[]>(() => {
    const go = (href: string) => () => router.push(href);
    return [
      { id: "home", group: "Navigate", label: "Home", run: go("/") },
      { id: "projects", group: "Navigate", label: "Projects", run: go("/#projects") },
      { id: "all-projects", group: "Navigate", label: "All projects", run: go("/projects") },
      { id: "experience", group: "Navigate", label: "Experience", run: go("/#experience") },
      { id: "skills", group: "Navigate", label: "Skills star map", run: go("/skills") },
      { id: "blog", group: "Navigate", label: "Writing & talks", run: go("/blog") },
      { id: "contact", group: "Navigate", label: "Contact", run: go("/#contact") },
      ...projects.map((p) => ({
        id: `p-${p.slug}`,
        group: "Projects",
        label: p.name,
        hint: p.tagline,
        run: go(projectHref(p.slug)),
      })),
      ...AUDIENCES.map((a) => ({
        id: `audience-${a}`,
        group: "View the site as",
        label: audiences[a].title,
        hint: audiences[a].description,
        run: () => {
          setAudience(a);
          router.push(audienceHref(a));
        },
      })),
      {
        id: "email",
        group: "Actions",
        label: "Copy email",
        hint: profile.email,
        run: () => {
          void navigator.clipboard?.writeText(profile.email).then(() => setToast("Email copied"));
        },
      },
      {
        id: "cv",
        group: "Actions",
        label: "Download CV",
        run: () => window.open(profile.cv, "_blank"),
      },
      ...liveSocials.map((s) => ({
        id: `s-${s.id}`,
        group: "Socials",
        label: `Open ${s.label}`,
        run: () => window.open(s.href, "_blank", "noopener"),
      })),
    ];
  }, [router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => `${a.label} ${a.hint ?? ""} ${a.group}`.toLowerCase().includes(q));
  }, [actions, query]);

  const groups = useMemo(() => {
    const map = new Map<string, { action: Action; index: number }[]>();
    filtered.forEach((action, index) => {
      map.set(action.group, [...(map.get(action.group) ?? []), { action, index }]);
    });
    return [...map];
  }, [filtered]);

  useEffect(() => {
    const show = () => {
      setQuery("");
      setActive(0);
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (!o) {
            setQuery("");
            setActive(0);
          }
          return !o;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(PALETTE_EVENT, show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(PALETTE_EVENT, show);
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(id);
  }, [toast]);

  const run = (action: Action | undefined) => {
    if (!action) return;
    setOpen(false);
    action.run();
  };

  const optionId = (index: number) => `${listId}-${index}`;

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        label="Command palette"
        className="mx-auto mt-[14vh] max-w-xl"
      >
        <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface/95 shadow-2xl shadow-black/60">
          <div className="flex items-center gap-3 border-b border-line px-4">
            <span className="text-muted" aria-hidden>
              ⌘
            </span>
            <input
              data-autofocus
              role="combobox"
              aria-expanded
              aria-controls={listId}
              aria-activedescendant={filtered.length ? optionId(active) : undefined}
              aria-label="Search commands"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((a) => Math.min(a + 1, filtered.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActive((a) => Math.max(a - 1, 0));
                } else if (e.key === "Enter") {
                  e.preventDefault();
                  run(filtered[active]);
                }
              }}
              placeholder="Search projects, pages, actions…"
              className="h-14 flex-1 bg-transparent text-[15px] text-fg outline-none placeholder:text-faint"
            />
            <Keycap>esc</Keycap>
          </div>
          <div id={listId} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
            {groups.map(([group, items]) => (
              <div key={group} role="group" aria-labelledby={`${listId}-${group}`}>
                <div
                  id={`${listId}-${group}`}
                  className="px-3 pt-3 pb-1 font-mono text-[11px] tracking-wider text-faint uppercase"
                >
                  {group}
                </div>
                {items.map(({ action, index }) => (
                  <div
                    key={action.id}
                    id={optionId(index)}
                    role="option"
                    aria-selected={index === active}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => run(action)}
                    className={`flex h-10 cursor-pointer items-center gap-4 rounded-lg px-3 text-sm ${
                      index === active ? "bg-white/[0.06] text-fg" : "text-muted"
                    }`}
                  >
                    <span className="flex-1">{action.label}</span>
                    {action.hint && (
                      <span className="truncate text-xs text-faint">{action.hint}</span>
                    )}
                    {index === active && (
                      <Keycap size="sm" aria-hidden>
                        ↵
                      </Keycap>
                    )}
                  </div>
                ))}
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="px-3 py-6 text-center text-sm text-faint">No results</p>
            )}
          </div>
        </div>
      </Dialog>
      <div role="status" aria-live="polite" className="sr-only">
        {toast}
      </div>
      {toast && (
        <div
          aria-hidden
          className="fixed bottom-20 left-1/2 z-[80] -translate-x-1/2 rounded-full border border-line-strong bg-surface-2 px-4 py-2 text-sm"
        >
          {toast}
        </div>
      )}
    </>
  );
}
