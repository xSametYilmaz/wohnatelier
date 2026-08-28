"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/sections";

export default function SideNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.35, 0.6], rootMargin: "-20% 0px -20% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Abschnitte"
      className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-5">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className={`text-[0.7rem] tracking-[0.2em] transition-all duration-500 ${
                    isActive
                      ? "text-brass opacity-100"
                      : "text-stone opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {s.title}
                </span>
                <span
                  className={`text-[0.7rem] tracking-[0.2em] transition-colors duration-500 ${
                    isActive ? "text-brass" : "text-stone"
                  }`}
                >
                  {s.index}
                </span>
                <span
                  className={`h-px transition-all duration-500 ${
                    isActive ? "w-7 bg-brass" : "w-3 bg-stone"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
