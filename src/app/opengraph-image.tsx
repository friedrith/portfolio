import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: swap for a render of the hero with the real portrait.
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#f7f8f8",
        background:
          "radial-gradient(60% 70% at 70% 100%, rgba(124,92,255,0.45), transparent 70%), #08090a",
      }}
    >
      <div style={{ fontSize: 32, color: "#7c5cff", fontWeight: 600 }}>thibault.</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -4 }}>{profile.name}</div>
        <div style={{ fontSize: 34, color: "#8a8f98", marginTop: 16 }}>{profile.tagline}</div>
      </div>
    </div>,
    size,
  );
}
