import type { Metadata } from "next";
import { AUDIENCES, parseAudience } from "@/content/audiences";
import { Landing } from "@/features/landing/Landing";

// Reached through the `/?for=…` rewrite in next.config.ts, so each audience is prerendered.
export const dynamicParams = false;

export function generateStaticParams() {
  return AUDIENCES.map((audience) => ({ audience }));
}

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function AudienceHome({ params }: PageProps<"/for/[audience]">) {
  const { audience } = await params;
  return <Landing audience={parseAudience(audience)} />;
}
