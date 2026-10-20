"use client";

import { audiences } from "@/content/audiences";
import { profile } from "@/content/profile";
import { useAudience } from "@/features/audience/AudienceProvider";

export function HeroPitch() {
  const copy = audiences[useAudience()];
  return (
    <>
      <h1 id="hero-name" className="text-2xl font-semibold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg leading-relaxed text-muted">{copy.pitch}</p>
    </>
  );
}
