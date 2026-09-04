import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  /** Whether to link to the homepage (default true). */
  asLink?: boolean;
  showSubtitle?: boolean;
};

function StrawberryDot({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="9"
      height="11"
      viewBox="0 0 9 11"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.2C2.1 10.2.7 8.2.9 6.1 1 4.4 2.5 3.3 4.5 2.9c2 .4 3.5 1.5 3.6 3.2.2 2.1-1.2 4.1-3.6 4.1Z"
        fill="#E95858"
      />
      <path
        d="M4.5 3.1c.7-1 1.9-1.5 2.6-.7-.6.7-1.5 1-2.6.7Z"
        fill="#65A844"
      />
    </svg>
  );
}

function FruitMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="26" cy="36" r="16" fill="#65A844" />
      <circle cx="26" cy="36" r="6" fill="#FFFBEF" />
      <circle cx="44" cy="24" r="11" fill="#E95858" />
      <path d="M44 14c4-2 8 0 9 3-3 1-7 1-9-3z" fill="#65A844" />
      <circle cx="46" cy="46" r="8" fill="#F3A62A" />
      <circle cx="18" cy="20" r="7" fill="#F6D64A" />
    </svg>
  );
}

/**
 * Fruiticana lockup inspired by the 2007 myfruiticana.com wordmark:
 * green name, strawberry dots on the i's, Cream-Less subtitle.
 */
export function Logo({
  className,
  asLink = true,
  showSubtitle = true,
}: LogoProps) {
  const mark = (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <FruitMark />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[1.35rem] font-extrabold tracking-tight">
          Fru
          <span className="relative inline-block">
            ı
            <StrawberryDot className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[42%]" />
          </span>
          t
          <span className="relative inline-block">
            ı
            <StrawberryDot className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[42%]" />
          </span>
          cana
        </span>
        {showSubtitle ? (
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-current/80">
            {site.productLine}
          </span>
        ) : null}
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
