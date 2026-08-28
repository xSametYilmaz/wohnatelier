"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  /** Unterseiten ohne dunkles Hero-Bild: Header von Anfang an hell hinterlegt. */
  solid?: boolean;
};

const links = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
];

const instagram = "https://www.instagram.com/wohnatelier.adakli/";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Header({ solid = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Auf der Startseite fuehrt ein Klick aufs Logo nicht zu einer neuen
  // Route – dort stattdessen nach oben scrollen.
  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      // Ohne `behavior` gilt scroll-behavior aus dem CSS, das bei
      // prefers-reduced-motion bereits auf auto steht.
      window.scrollTo({ top: 0 });
    }
  };

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  // Menü offen: Hintergrund nicht mitscrollen lassen, Escape schließt.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const opaque = solid || scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          opaque
            ? "bg-linen/90 text-ink backdrop-blur-sm border-b border-sand"
            : "bg-transparent text-linen border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            onClick={onLogoClick}
            aria-label="Zur Startseite"
            className="font-display text-lg tracking-[0.18em] uppercase md:text-xl"
          >
            Adakli
          </Link>

          {/* Desktop-Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.7rem] uppercase tracking-[0.22em] transition-opacity hover:opacity-60"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wohnatelier Adakli auf Instagram"
              className="transition-opacity hover:opacity-60"
            >
              <InstagramIcon />
            </a>
          </nav>

          {/* Burger für Smartphone */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  open ? "bottom-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobiles Menü: liegt unter der Header-Leiste (z-40 < z-50),
          damit der Burger zum Schließen klickbar bleibt. */}
      {open && (
        <div className="fixed inset-0 z-40 bg-linen text-ink md:hidden">
          <nav className="flex flex-col items-start gap-8 px-6 pt-32">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-light"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-stone"
            >
              <InstagramIcon size={20} />
              Instagram
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
