"use client";

import { useId } from "react";
import { profile } from "@/content/profile";
import { Dialog } from "@/ui/Dialog";
import { Keycap } from "@/ui/Keycap";

const TOPICS = ["Role", "Mission", "Collab"];

// TODO: post to a form backend instead of opening the mail client.
export function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();
  return (
    <Dialog open={open} onClose={onClose} label="Start a conversation" className="m-auto max-w-lg">
      <form
        aria-labelledby={titleId}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const subject = encodeURIComponent(`[${data.get("topic")}] from ${data.get("name")}`);
          const body = encodeURIComponent(String(data.get("message")));
          window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
          onClose();
        }}
        className="rounded-2xl border border-line-strong bg-surface p-6 text-left shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <h3 id={titleId} className="text-lg font-medium">
            Start a conversation
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="keycap cursor-pointer"
            aria-label="Close"
          >
            esc
          </button>
        </div>
        <fieldset className="mt-6">
          <legend className="text-sm text-muted">Topic</legend>
          <div className="mt-2 flex gap-2">
            {TOPICS.map((t, i) => (
              <label key={t} className="cursor-pointer">
                <input
                  type="radio"
                  name="topic"
                  value={t}
                  defaultChecked={i === 0}
                  className="peer sr-only"
                />
                <span className="block rounded-full border border-line px-4 py-1.5 text-sm text-muted peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:text-fg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                  {t}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="mt-5 block text-sm text-muted">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            data-autofocus
            className="mt-2 w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-fg outline-none focus:border-accent"
          />
        </label>
        <label className="mt-4 block text-sm text-muted">
          Message
          <textarea
            name="message"
            required
            rows={4}
            className="mt-2 w-full resize-none rounded-lg border border-line bg-bg px-3 py-2.5 text-fg outline-none focus:border-accent"
          />
        </label>
        <button
          type="submit"
          className="rc-button mt-6 flex !h-11 w-full cursor-pointer justify-center"
        >
          Send{" "}
          <Keycap size="sm" aria-hidden className="!text-fg">
            ↵
          </Keycap>
        </button>
      </form>
    </Dialog>
  );
}
