import type { SectionId } from "@/content/types";

/** Each section's own atmosphere (see `.backdrop-*` in globals.css), fading into its neighbors. */
export function Backdrop({ section }: { section: SectionId }) {
  return <div className={`backdrop backdrop-${section}`} aria-hidden />;
}
