"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Meldet, sobald ein Element im Sichtfeld auftaucht.
 * Bleibt danach auf true – die Animation läuft also nur einmal.
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);

    // Sicherheitsnetz: Falls der Observer nie auslöst, darf der Inhalt
    // nicht dauerhaft unsichtbar bleiben.
    const fallback = window.setTimeout(() => setInView(true), 3000);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, inView };
}
