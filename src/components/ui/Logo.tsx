import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  /** Whether to link to the homepage (default true). */
  asLink?: boolean;
};

/**
 * Temporary Fruiticana wordmark + scoop mark.
 * Intentionally an inline SVG/text lockup so it can be swapped for a supplied
 * vector logo later without touching layout (see PLAN.md asset requirements).
 */
export function Logo({ className, asLink = true }: LogoProps) {
  const mark = (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="32" cy="36" r="20" fill="currentColor" opacity="0.14" />
        <circle cx="32" cy="36" r="20" fill="currentColor" opacity="0.9" />
        <circle cx="32" cy="36" r="7" fill="var(--color-cream)" />
        <path
          d="M44 14c6-3 12-1 13 4-5 1-11 1-13-4z"
          fill="var(--color-green)"
        />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight">
        Fruiticana
      </span>
    </span>
  );

  if (!asLink) return mark;

  return (
    <Link
      href="/"
      aria-label={`${site.name} - home`}
      className="inline-flex items-center rounded-md"
    >
      {mark}
    </Link>
  );
}
