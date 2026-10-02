import type { ReactNode } from "react";
import Image from "next/image";
import type { ProgramStep } from "@/data/program";
import { cn } from "@/lib/cn";

const accentByIcon: Record<
  ProgramStep["icon"],
  { ring: string; wash: string; fruit: string; alt: string }
> = {
  machine: {
    ring: "ring-orange/40",
    wash: "from-yellow/90 via-card to-grove/80",
    fruit: "/images/flavors/orange.webp",
    alt: "",
  },
  flavors: {
    ring: "ring-berry/35",
    wash: "from-blush/80 via-card to-yellow/85",
    fruit: "/images/flavors/strawberry.webp",
    alt: "",
  },
  heart: {
    ring: "ring-green/45",
    wash: "from-lime/90 via-card to-grove/75",
    fruit: "/images/flavors/blueberry.webp",
    alt: "",
  },
  fruit: {
    ring: "ring-mango/45",
    wash: "from-mango/35 via-card to-yellow/90",
    fruit: "/images/flavors/mango.webp",
    alt: "",
  },
  school: {
    ring: "ring-green/40",
    wash: "from-lime/85 via-card to-grove/70",
    fruit: "/images/flavors/apple.webp",
    alt: "",
  },
};

function MachineIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="hiw-machine-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fceb96" />
          <stop offset="1" stopColor="#9ed63f" />
        </linearGradient>
        <radialGradient id="hiw-scoop-a" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#ff8a7a" />
          <stop offset="1" stopColor="#c10018" />
        </radialGradient>
        <radialGradient id="hiw-scoop-b" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#ffd06a" />
          <stop offset="1" stopColor="#ff8c00" />
        </radialGradient>
      </defs>
      <rect x="28" y="18" width="64" height="78" rx="12" fill="url(#hiw-machine-body)" />
      <rect x="36" y="28" width="48" height="28" rx="8" fill="#0f2f12" opacity="0.18" />
      <circle cx="48" cy="42" r="9" fill="url(#hiw-scoop-a)" />
      <circle cx="72" cy="42" r="9" fill="url(#hiw-scoop-b)" />
      <rect x="42" y="64" width="36" height="8" rx="4" fill="#144011" opacity="0.35" />
      <rect x="42" y="76" width="36" height="8" rx="4" fill="#144011" opacity="0.25" />
      <path d="M44 96h32l-4 8H48l-4-8Z" fill="#0f2f12" opacity="0.35" />
      <circle cx="92" cy="30" r="7" fill="#ff8c00" />
      <circle cx="26" cy="70" r="6" fill="#c10018" />
    </svg>
  );
}

function FlavorsIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="hiw-f1" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ff8a7a" />
          <stop offset="1" stopColor="#e02028" />
        </radialGradient>
        <radialGradient id="hiw-f2" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffe66a" />
          <stop offset="1" stopColor="#ff9a14" />
        </radialGradient>
        <radialGradient id="hiw-f3" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#c4ff6a" />
          <stop offset="1" stopColor="#7ec42a" />
        </radialGradient>
        <radialGradient id="hiw-f4" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#8aa4ef" />
          <stop offset="1" stopColor="#2f52b8" />
        </radialGradient>
      </defs>
      <circle cx="42" cy="42" r="22" fill="url(#hiw-f1)" />
      <circle cx="78" cy="42" r="22" fill="url(#hiw-f2)" />
      <circle cx="42" cy="78" r="22" fill="url(#hiw-f3)" />
      <circle cx="78" cy="78" r="22" fill="url(#hiw-f4)" />
      <ellipse cx="34" cy="34" rx="6" ry="4" fill="#fff" opacity="0.45" />
      <ellipse cx="70" cy="34" rx="6" ry="4" fill="#fff" opacity="0.4" />
      <path d="M42 24c4-10 14-12 18-8-4 8-10 12-18 8Z" fill="#144011" />
    </svg>
  );
}

function HeartIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="hiw-heart" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#ff8a7a" />
          <stop offset="0.55" stopColor="#c10018" />
          <stop offset="1" stopColor="#6b000d" />
        </linearGradient>
      </defs>
      <path
        d="M60 96C28 74 18 54 18 40c0-12 9-22 22-22 8 0 15 4 20 11 5-7 12-11 20-11 13 0 22 10 22 22 0 14-10 34-42 56Z"
        fill="url(#hiw-heart)"
      />
      <ellipse cx="42" cy="40" rx="10" ry="7" fill="#fff" opacity="0.35" />
      <circle cx="86" cy="28" r="8" fill="#7ec42a" />
      <path d="M86 22c3-6 8-7 10-4-3 5-6 7-10 4Z" fill="#144011" />
      <circle cx="28" cy="78" r="7" fill="#ff8c00" />
    </svg>
  );
}

function FruitCupIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="hiw-cup-scoop" cx="0.4" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffd48a" />
          <stop offset="1" stopColor="#ff8c00" />
        </radialGradient>
        <linearGradient id="hiw-cup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff9d0" />
          <stop offset="1" stopColor="#c6e84a" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="42" r="28" fill="url(#hiw-cup-scoop)" />
      <circle cx="44" cy="34" r="12" fill="#e02028" />
      <circle cx="76" cy="32" r="11" fill="#7ec42a" />
      <circle cx="62" cy="24" r="10" fill="#2f52b8" />
      <path d="M34 56h52l-6 42a10 10 0 0 1-10 8H50a10 10 0 0 1-10-8L34 56Z" fill="url(#hiw-cup)" />
      <path d="M40 72h40" stroke="#144011" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 86h36" stroke="#144011" strokeOpacity="0.18" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="50" cy="36" rx="5" ry="3" fill="#fff" opacity="0.45" />
    </svg>
  );
}

function SchoolIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <path d="M20 58 60 28l40 30" fill="#9ed63f" />
      <rect x="30" y="58" width="60" height="40" rx="6" fill="#eaf86c" />
      <rect x="52" y="72" width="16" height="26" rx="3" fill="#c10018" />
      <rect x="38" y="68" width="12" height="12" rx="2" fill="#ff8c00" opacity="0.85" />
      <rect x="70" y="68" width="12" height="12" rx="2" fill="#2f52b8" opacity="0.85" />
      <circle cx="60" cy="44" r="8" fill="#144011" />
    </svg>
  );
}

const illustrations: Record<ProgramStep["icon"], () => ReactNode> = {
  machine: MachineIllustration,
  flavors: FlavorsIllustration,
  heart: HeartIllustration,
  fruit: FruitCupIllustration,
  school: SchoolIllustration,
};

type StepVisualProps = {
  icon: ProgramStep["icon"];
  step: string;
  className?: string;
};

export function HowItWorksStepVisual({ icon, step, className }: StepVisualProps) {
  const accent = accentByIcon[icon];
  const Illustration = illustrations[icon];

  return (
    <div className={cn("relative mx-auto w-32 sm:w-36", className)}>
      <div
        className={cn(
          "how-step-float relative aspect-square overflow-hidden rounded-full bg-gradient-to-br p-2.5 ring-4 sm:p-3",
          accent.wash,
          accent.ring,
        )}
      >
        <Illustration />
        <div className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-14 w-14 overflow-hidden rounded-full opacity-95 ring-2 ring-card/90 sm:h-16 sm:w-16">
          <Image
            src={accent.fruit}
            alt=""
            fill
            sizes="64px"
            className="object-cover"
            aria-hidden
          />
        </div>
      </div>
      <span className="absolute -left-1 -top-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-deep font-sans text-sm font-extrabold tabular-nums text-on-deep shadow-[0_8px_18px_rgba(15,47,18,0.22)] sm:h-10 sm:w-10 sm:text-base">
        {step}
      </span>
    </div>
  );
}

type FruitMotifProps = {
  src: string;
  className?: string;
  floatClassName?: string;
  size?: number;
};

export function HowItWorksFruitMotif({
  src,
  className,
  floatClassName = "how-fruit-float",
  size = 88,
}: FruitMotifProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={{ width: size, height: size }}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-full ring-2 ring-card/70",
          floatClassName,
        )}
      >
        <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
      </div>
    </div>
  );
}

export function HowItWorksPath({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 80"
      className={cn("how-path-draw pointer-events-none absolute inset-x-8 top-[4.75rem] hidden h-16 w-[calc(100%-4rem)] xl:block", className)}
      preserveAspectRatio="none"
    >
      <path
        d="M40 40 C 180 10, 280 70, 360 40 S 540 10, 640 40 820 70, 960 40"
        fill="none"
        stroke="#c10018"
        strokeOpacity="0.28"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10 14"
      />
      <circle cx="360" cy="40" r="6" fill="#ff8c00" />
      <circle cx="640" cy="40" r="6" fill="#7ec42a" />
    </svg>
  );
}
