import { AudienceSwitch } from "@/features/audience/AudienceSwitch";
import { HeroPitch } from "./HeroPitch";
import { HeroScrollFx } from "./HeroScrollFx";
import { Portrait } from "./Portrait";

/**
 * Minimal hero after gravity-design.de: portrait, a few lines of small text,
 * the audience switch as a one-line tagline, a thin footer line.
 * Two sticky layers share the same 100vh so the WebGL canvas can sit between
 * them: portrait below the 3D objects, text and controls above.
 */
export function Hero() {
  return (
    <section id="hero" className="relative h-[200vh]" aria-labelledby="hero-name">
      <HeroScrollFx />
      {/* Below the canvas. */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 50% 45%, #1c1d22 0%, #0d0e10 60%, #08090a 100%)",
          }}
        />
        <div className="stripes absolute -inset-[10%] opacity-25" />
        <Portrait />
      </div>

      {/* Above the canvas. */}
      <div
        data-hero-ui
        className="pointer-events-none sticky top-0 z-20 -mt-[100vh] h-screen overflow-hidden"
      >
        {/* Small name block, left. */}
        <div className="absolute top-[58%] left-6 max-w-[24rem] sm:left-12">
          <HeroPitch />
        </div>

        {/* The switch, set beside the head like gravity's tagline. */}
        <div className="absolute bottom-24 left-6 sm:left-12 lg:bottom-auto lg:top-[44%] lg:left-[calc(50%+min(30vh,280px))]">
          <AudienceSwitch />
        </div>

        {/* Scroll cue: a dot running down a thin line that rises from the footer. */}
        <div
          className="absolute bottom-14 left-1/2 h-16 w-px -translate-x-1/2 bg-white/[0.12] sm:h-[92px]"
          aria-hidden
        >
          <span className="scroll-cue absolute top-0 -left-[2px] size-[5px] rounded-full bg-fg" />
        </div>
      </div>
    </section>
  );
}
