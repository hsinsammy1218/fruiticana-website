import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  /** Whether to link to the homepage (default true). */
  asLink?: boolean;
  /** Larger script lockup for hero / marketing moments. */
  size?: "nav" | "hero";
};

/**
 * Fruiticana wordmark inspired by the original myfruiticana.com script logo:
 * green script with strawberry marks over the i’s (dotless ı + berry diamonds).
 */
export function Logo({ className, asLink = true, size = "nav" }: LogoProps) {
  const isHero = size === "hero";

  const mark = (
    <span
      className={cn(
        "inline-flex flex-col items-start leading-none",
        className,
      )}
    >
      <span
        className={cn(
          "brand-script relative",
          isHero
            ? "text-6xl text-green sm:text-7xl lg:text-8xl"
            : "text-[1.85rem] sm:text-3xl",
        )}
        style={
          isHero
            ? {
                textShadow:
                  "0 1px 0 #f0c94a, 0 2px 0 #f0c94a, 0 12px 28px rgba(22,61,42,0.14)",
              }
            : undefined
        }
      >
        Fru
        <span className="relative inline-block">
          ı
          <span
            aria-hidden="true"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 rotate-45 bg-berry",
              isHero
                ? "top-[0.12em] h-2.5 w-2.5 rounded-[2px]"
                : "top-[0.14em] h-1.5 w-1.5 rounded-[1px]",
            )}
          />
        </span>
        t
        <span className="relative inline-block">
          ı
          <span
            aria-hidden="true"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 rotate-45 bg-berry",
              isHero
                ? "top-[0.12em] h-2.5 w-2.5 rounded-[2px]"
                : "top-[0.14em] h-1.5 w-1.5 rounded-[1px]",
            )}
          />
        </span>
        cana
      </span>
      {isHero ? (
        <span className="brand-script mt-3 text-2xl text-green-700 sm:text-3xl">
          {site.productLine}
        </span>
      ) : null}
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
