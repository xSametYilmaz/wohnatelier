"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Meldet, ob ein Element im Sichtfeld ist – und zwar fortlaufend.
 * Scrollt man an einem Abschnitt vorbei und wieder zurück, läuft die
 * Animation erneut.
 */
export function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // Hysterese: einblenden, sobald genug zu sehen ist – ausblenden aber
    // erst, wenn der Abschnitt komplett draussen ist. Sonst wuerde Inhalt
    // verschwinden, waehrend er am Rand noch sichtbar ist.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) setInView(true);
        else if (!entry.isIntersecting) setInView(false);
      },
      { threshold: [0, threshold], rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
