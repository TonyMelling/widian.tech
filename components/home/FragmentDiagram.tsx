"use client";

import { useEffect, useRef, useState } from "react";
import { ConceptLabel } from "@/components/ui/ConceptLabel";

const FRAGMENTS = [
  { cx: 70, cy: 60, delay: 0 },
  { cx: 150, cy: 30, delay: 90 },
  { cx: 40, cy: 140, delay: 180 },
  { cx: 120, cy: 110, delay: 270 },
  { cx: 90, cy: 200, delay: 360 },
] as const;

const RECORD_NODES = [
  { cy: 60, delay: 620 },
  { cy: 160, delay: 740 },
  { cy: 260, delay: 860 },
] as const;

/** Home §6.2 — scattered fragments converging into one connected record;
 * the page's documented motion concept for this section (SPEC.md §8:
 * "Fragmented signals assemble into one current Building Record"),
 * previously static. Sequenced in four beats, all opacity/transform so
 * it stays compositor-friendly: fragments appear, the path to the
 * record fades in, the building forms, then the evidence thread builds
 * up node by node — same "thread" motif as the hero's caption. Runs
 * once, on first scroll into view; reduced-motion collapses every
 * transition to instant via the global rule in globals.css, so no
 * separate reduced-motion branch is needed here. The SVG stays
 * decorative (aria-hidden) since the same point is already made in the
 * adjacent body copy — the new caption below it is the real,
 * screen-reader-visible text. */
export function FragmentDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure>
      <svg
        ref={ref}
        viewBox="0 0 400 320"
        className="h-auto w-full max-w-sm"
        aria-hidden="true"
        focusable="false"
      >
        {FRAGMENTS.map((f) => (
          <circle
            key={`${f.cx}-${f.cy}`}
            cx={f.cx}
            cy={f.cy}
            r="7"
            fill="#DCE0E7"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "scale(1)" : "scale(0.5)",
              transformOrigin: `${f.cx}px ${f.cy}px`,
              transition: "opacity 400ms ease-out, transform 400ms ease-out",
              transitionDelay: active ? `${f.delay}ms` : "0ms",
            }}
          />
        ))}

        <path
          d="M180 160 L260 160"
          stroke="#8A93A3"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{
            opacity: active ? 1 : 0,
            transition: "opacity 400ms ease-out",
            transitionDelay: active ? "460ms" : "0ms",
          }}
        />

        <rect
          x="230"
          y="20"
          width="60"
          height="280"
          fill="none"
          stroke="#141D2B"
          strokeWidth="1.5"
          rx="2"
          style={{
            opacity: active ? 1 : 0,
            transition: "opacity 400ms ease-out",
            transitionDelay: active ? "540ms" : "0ms",
          }}
        />

        <path
          d="M260 60 L260 260"
          stroke="#E8431A"
          strokeWidth="2.5"
          style={{
            transform: active ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "260px 60px",
            transition: "transform 500ms ease-out",
            transitionDelay: active ? "620ms" : "0ms",
          }}
        />
        {RECORD_NODES.map((node) => (
          <circle
            key={node.cy}
            cx="260"
            cy={node.cy}
            r="9"
            fill="#E8431A"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "scale(1)" : "scale(0.4)",
              transformOrigin: `260px ${node.cy}px`,
              transition: "opacity 300ms ease-out, transform 300ms ease-out",
              transitionDelay: active ? `${node.delay}ms` : "0ms",
            }}
          />
        ))}

        <text
          x="260"
          y="310"
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          fill="#5B6675"
          style={{
            opacity: active ? 1 : 0,
            transition: "opacity 400ms ease-out",
            transitionDelay: active ? "1000ms" : "0ms",
          }}
        >
          ONE BUILDING RECORD
        </text>
      </svg>
      <figcaption className="mt-3">
        <ConceptLabel>
          scattered activity converges into one connected building record
        </ConceptLabel>
      </figcaption>
    </figure>
  );
}
