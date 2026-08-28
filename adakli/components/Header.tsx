"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-linen/90 text-ink backdrop-blur-sm border-b border-sand"
          : "bg-transparent text-linen border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.18em] uppercase md:text-xl"
        >
          Adakli
        </a>
        <a
          href="#kontakt"
          className="text-[0.7rem] uppercase tracking-[0.22em] transition-opacity hover:opacity-60"
        >
          Kontakt
        </a>
      </div>
    </header>
  );
}
