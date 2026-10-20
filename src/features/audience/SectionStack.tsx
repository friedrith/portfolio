"use client";

import type { ReactNode } from "react";
import { audiences } from "@/content/audiences";
import type { SectionId } from "@/content/types";
import { Backdrop } from "@/ui/Backdrop";
import { useAudience } from "./AudienceProvider";

/** Server-rendered sections, ordered for the active audience. */
export function SectionStack({ sections }: { sections: Record<SectionId, ReactNode> }) {
  const audience = useAudience();
  return audiences[audience].sections.map((id) => (
    // Full-bleed wrapper: the backdrop spans the viewport width and sits
    // under the WebGL canvas, the section content sits above it.
    <div key={id} className="relative">
      <Backdrop section={id} />
      {sections[id]}
    </div>
  ));
}
