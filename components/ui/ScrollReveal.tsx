"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Scroll-triggered reveal used for Home's narrative sections (SPEC §8:
 * "fragmented signals assemble..."). Content is visible by default (the
 * base classes below), so it never depends on JavaScript running — only
 * after mount does the element opt into a hidden pre-reveal state via a
 * data attribute, so a failed script load never hides content. State is
 * driven by direct DOM mutation rather than React state, since nothing
 * here needs to participate in React's render output.
 * prefers-reduced-motion is handled globally in globals.css, which
 * collapses the transition to effectively instant. */
export function ScrollReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.state = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.state = "revealed";
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`translate-y-0 opacity-100 transition-all duration-500 ease-out data-[state=hidden]:translate-y-4 data-[state=hidden]:opacity-0 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
