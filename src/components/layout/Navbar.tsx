"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { desktopNav, navCta } from "@/data/navigation";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BrandBar } from "@/components/brand/OriginalBrandMotif";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Subtle elevation once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/75"
          : "border-transparent bg-cream",
      )}
    >
      <BrandBar />
      <Container className="flex h-16 items-center justify-between gap-3">
        <Logo className="text-green-deep" />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {desktopNav.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition-colors xl:px-2.5 xl:text-sm",
                      isActive
                        ? "text-green-deep"
                        : "text-green-deep/70 hover:text-green-deep",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-green transition-transform duration-200",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href={navCta.href} className="hidden xl:inline-flex">
            {navCta.label}
          </Button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-green-deep hover:bg-green-deep/5 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-haspopup="dialog"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      <MobileNavigation
        open={open}
        onClose={() => setOpen(false)}
        activeHref={pathname}
      />
    </header>
  );
}
