import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, profile } from "@/content/profile";
import { BottomBar } from "@/features/chrome/BottomBar";
import { CommandPalette } from "@/features/chrome/CommandPalette";
import { Header } from "@/features/chrome/Header";
import { SmoothScroll } from "@/features/chrome/SmoothScroll";
import { SceneLoader } from "@/features/three/stage/SceneLoader";
import { personJsonLd } from "@/lib/json-ld";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${profile.name} — ${profile.role}`, template: `%s — ${profile.name}` },
  description: profile.description,
  openGraph: { type: "website", siteName: profile.name, locale: "en_CA" },
  twitter: { card: "summary_large_image", creator: "@R_Thibault_Oliw" },
};

export const viewport: Viewport = { themeColor: "#08090a", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <SceneLoader />
        <Header />
        <main id="main" className="relative pb-14">
          {children}
        </main>
        <BottomBar />
        <CommandPalette />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
