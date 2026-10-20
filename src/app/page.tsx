import type { Metadata } from "next";
import { Landing } from "@/features/landing/Landing";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <Landing audience="hire" />;
}
