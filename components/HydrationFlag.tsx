"use client";

import { useEffect } from "react";

/**
 * Meldet, dass React wirklich hydratisiert hat. Passiert das nicht
 * (Bundle blockiert, JS-Fehler), entfernt das Inline-Script im Layout
 * nach kurzer Zeit die `js`-Klasse – dann werden die sonst per CSS
 * ausgeblendeten Inhalte sichtbar, statt dass die Seite leer bleibt.
 */
export default function HydrationFlag() {
  useEffect(() => {
    document.documentElement.setAttribute("data-hydrated", "");
  }, []);

  return null;
}
