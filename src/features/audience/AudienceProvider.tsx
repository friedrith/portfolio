"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import type { Audience } from "@/content/types";
import { getAudience, readAudienceFromUrl, setAudience, subscribe } from "./audience-store";

const InitialAudience = createContext<Audience>("hire");

/** `initial` is the audience the page was prerendered for; the store takes over after hydration. */
export function AudienceProvider({
  initial,
  children,
}: {
  initial: Audience;
  children: ReactNode;
}) {
  useEffect(() => {
    if (getAudience() === null) setAudience(readAudienceFromUrl());
    return () => setAudience(null);
  }, []);
  return <InitialAudience.Provider value={initial}>{children}</InitialAudience.Provider>;
}

export function useAudience(): Audience {
  const initial = useContext(InitialAudience);
  return useSyncExternalStore(
    subscribe,
    () => getAudience() ?? initial,
    () => initial,
  );
}
