"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement for subtle scroll reveals.
 * - Adds `js-reveal` to <html> so `.reveal` elements start hidden ONLY when JS
 *   is available (no-JS users always see content).
 * - Reveals elements as they enter the viewport by setting `data-revealed`.
 *   We use a data attribute (not a class) because React does not manage it, so
 *   re-renders/hydration never fight the observer or strip the revealed state.
 * - Re-runs on every route change so client-side navigations reveal the new
 *   page's elements (this component lives in the persistent root layout).
 * - Honors prefers-reduced-motion (handled in CSS) and reveals immediately.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    root.classList.add("js-reveal");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => {
      if (el.dataset.revealed === "true") return;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
