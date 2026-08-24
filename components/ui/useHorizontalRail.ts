"use client";

import { useRef, useState } from "react";

/** Shared overflow state and previous/next scrolling for mobile option rails. */
export function useHorizontalRail<T extends HTMLElement>(step: number) {
  const railRef = useRef<T>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateRailPosition() {
    const rail = railRef.current;
    if (!rail) return;

    setAtStart(rail.scrollLeft <= 2);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2);
  }

  function scrollRail(direction: -1 | 1) {
    railRef.current?.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  }

  return { railRef, atStart, atEnd, updateRailPosition, scrollRail };
}
