import { parseAudience } from "@/content/audiences";
import type { Audience } from "@/content/types";

// The landing page is prerendered once per audience, but switching between
// `?for=` URLs is a client navigation that reuses the cached page without a
// request. So the active audience lives here, and the URL stays its mirror.
let current: Audience | null = null;
const listeners = new Set<() => void>();

const notify = () => listeners.forEach((l) => l());

export function readAudienceFromUrl(): Audience {
  return parseAudience(new URLSearchParams(window.location.search).get("for") ?? undefined);
}

export function getAudience() {
  return current;
}

export function setAudience(audience: Audience | null) {
  if (audience === current) return;
  current = audience;
  notify();
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  const onPop = () => setAudience(readAudienceFromUrl());
  window.addEventListener("popstate", onPop);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", onPop);
  };
}

export const audienceHref = (audience: Audience) => `/?for=${audience}`;
