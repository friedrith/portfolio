/* eslint-disable @next/next/no-img-element */
import { profile } from "@/content/profile";
import { PORTRAIT_ID, PORTRAIT_VIEWBOX, silhouette } from "@/lib/portrait";

/**
 * Black-and-white cut-out portrait, bottom-centered like gravity-design.de.
 * Without a photo, a lit silhouette with the same proportions stands in
 * (the physics colliders read the same numbers).
 */
export function Portrait() {
  const { width, height } = PORTRAIT_VIEWBOX;
  const { head, shoulders, torso } = silhouette;
  return (
    <div
      id={PORTRAIT_ID}
      data-hero-portrait
      className="absolute bottom-0 left-1/2 aspect-[400/570] h-[min(88vh,140vw)] -translate-x-1/2"
    >
      {profile.portrait ? (
        <img
          src={profile.portrait}
          srcSet="/assets/portrait-1024.webp 719w, /assets/portrait.webp 1437w"
          sizes="min(62vh, 98vw)"
          alt={profile.name}
          width={1437}
          height={2048}
          fetchPriority="high"
          className="size-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
        />
      ) : (
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="size-full"
          role="img"
          aria-label="Portrait placeholder"
        >
          <defs>
            <radialGradient id="pf-fill" cx="35%" cy="25%" r="80%">
              <stop offset="0%" stopColor="#3a3c42" />
              <stop offset="45%" stopColor="#1a1b1f" />
              <stop offset="100%" stopColor="#0b0c0d" />
            </radialGradient>
            <linearGradient id="pf-rim" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="85%" stopColor="#7c5cff" stopOpacity="0" />
              <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="pf-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="70%" stopColor="#08090a" stopOpacity="0" />
              <stop offset="100%" stopColor="#08090a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <g fill="url(#pf-fill)" stroke="url(#pf-rim)" strokeWidth="2">
            <path
              d={`M${torso.cx - torso.hw - 10} ${height}
                  C${torso.cx - torso.hw - 10} ${shoulders[0].cy - 20} ${shoulders[0].cx - 30} ${shoulders[0].cy - shoulders[0].r + 5} ${head.cx - 50} ${shoulders[0].cy - shoulders[0].r - 5}
                  L${head.cx - 34} ${head.cy + head.r - 6}
                  L${head.cx + 34} ${head.cy + head.r - 6}
                  L${head.cx + 50} ${shoulders[1].cy - shoulders[1].r - 5}
                  C${shoulders[1].cx + 30} ${shoulders[1].cy - shoulders[1].r + 5} ${torso.cx + torso.hw + 10} ${shoulders[1].cy - 20} ${torso.cx + torso.hw + 10} ${height} Z`}
            />
            <ellipse cx={head.cx} cy={head.cy} rx={head.r * 0.88} ry={head.r * 1.08} />
          </g>
          <rect width={width} height={height} fill="url(#pf-fade)" />
        </svg>
      )}
    </div>
  );
}
