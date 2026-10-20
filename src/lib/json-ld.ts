import { SITE_URL, profile } from "@/content/profile";
import { liveSocials } from "@/content/socials";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    jobTitle: profile.role,
    description: profile.description,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Montreal", addressCountry: "CA" },
    knowsAbout: ["Frontend", "React", "TypeScript", "Design systems", "UX", "Micro-frontends"],
    sameAs: liveSocials.map((s) => s.href),
  };
}
