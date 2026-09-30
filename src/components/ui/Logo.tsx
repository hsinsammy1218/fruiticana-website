import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

/** Original myfruiticana.com script wordmark (archive asset, transparent PNG). */
export const ORIGINAL_LOGO_SRC = "/images/brand/fruiti-logo.png";
/** Original “Cream-Less Ice Crème” script subtitle from the same archive. */
export const ORIGINAL_PRODUCT_LINE_SRC = "/images/brand/creamless.png";

type LogoProps = {
  className?: string;
  /** Whether to link to the homepage (default true). */
  asLink?: boolean;
  showSubtitle?: boolean;
  /** Larger lockup for hero / marketing moments. */
  size?: "nav" | "hero";
};

const sizes = {
  nav: {
    logo: { width: 148, height: 56 },
    productLine: { width: 132, height: 15 },
    sizes: "148px",
  },
  hero: {
    logo: { width: 420, height: 158 },
    productLine: { width: 280, height: 33 },
    sizes: "(max-width: 640px) 78vw, 420px",
  },
} as const;

/**
 * Original Fruiticana brand logo from the 2007 myfruiticana.com archive
 * (`fruiti-logo` script wordmark + optional Cream-Less subtitle art).
 */
export function Logo({
  className,
  asLink = true,
  showSubtitle = true,
  size = "nav",
}: LogoProps) {
  const dims = sizes[size];
  const isHero = size === "hero";

  const mark = (
    <span
      className={cn(
        "inline-flex flex-col items-start",
        isHero ? "gap-2 sm:gap-2.5" : "gap-1",
        className,
      )}
    >
      <Image
        src={ORIGINAL_LOGO_SRC}
        alt=""
        width={dims.logo.width}
        height={dims.logo.height}
        priority={isHero}
        sizes={dims.sizes}
        className={cn(
          "h-auto w-auto max-w-full object-contain object-left",
          isHero
            ? "w-[min(100%,26rem)]"
            : "h-10 w-auto sm:h-12",
        )}
      />
      {showSubtitle ? (
        <Image
          src={ORIGINAL_PRODUCT_LINE_SRC}
          alt=""
          width={dims.productLine.width}
          height={dims.productLine.height}
          sizes={isHero ? "(max-width: 640px) 60vw, 280px" : "132px"}
          className={cn(
            "h-auto w-auto max-w-full object-contain object-left",
            isHero ? "w-[min(72%,17.5rem)]" : "h-3 w-auto sm:h-3.5",
          )}
        />
      ) : null}
    </span>
  );

  const accessibleName = showSubtitle
    ? `${site.name} ${site.productLine}`
    : site.name;

  if (!asLink) {
    return (
      <span className="inline-flex items-center">
        <span aria-hidden="true">{mark}</span>
        <span className="sr-only">{accessibleName}</span>
      </span>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center rounded-md">
      <span aria-hidden="true">{mark}</span>
      <span className="sr-only">{accessibleName} - home</span>
    </Link>
  );
}
