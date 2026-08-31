import { cn } from "@/lib/cn";

type OriginalBrandMotifProps = {
  className?: string;
};

/**
 * Modern recreation of the 2007 fruit-column / scoop-stack identity.
 * Decorative only — do not treat as product photography.
 */
export function OriginalBrandMotif({ className }: OriginalBrandMotifProps) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-md", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white via-cream-100 to-yellow/30 ring-1 ring-green-deep/8"
      />
      <svg
        viewBox="0 0 500 500"
        className="relative h-full w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="motifGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#98C93C" stopOpacity="0.35" />
            <stop offset="1" stopColor="#F6D64A" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="scoopStraw" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#ff8a8a" />
            <stop offset="1" stopColor="#E95858" />
          </radialGradient>
          <radialGradient id="scoopMango" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#ffd27a" />
            <stop offset="1" stopColor="#F3A62A" />
          </radialGradient>
          <radialGradient id="scoopLime" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#c6e86a" />
            <stop offset="1" stopColor="#65A844" />
          </radialGradient>
          <radialGradient id="scoopBlue" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#8b97d4" />
            <stop offset="1" stopColor="#5966A8" />
          </radialGradient>
          <radialGradient id="scoopOrange" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#ffc08a" />
            <stop offset="1" stopColor="#F28C35" />
          </radialGradient>
        </defs>

        <ellipse cx="250" cy="430" rx="150" ry="22" fill="#244B2A" opacity="0.08" />
        <circle cx="250" cy="250" r="210" fill="url(#motifGlow)" />

        {/* stacked fruit scoops — successor to the 2007 left-column photo */}
        <circle cx="168" cy="318" r="58" fill="url(#scoopStraw)" />
        <circle cx="250" cy="338" r="62" fill="url(#scoopMango)" />
        <circle cx="332" cy="312" r="56" fill="url(#scoopLime)" />
        <circle cx="214" cy="248" r="54" fill="url(#scoopBlue)" />
        <circle cx="292" cy="236" r="52" fill="url(#scoopOrange)" />
        <circle cx="252" cy="178" r="48" fill="url(#scoopLime)" />

        <ellipse cx="150" cy="300" rx="16" ry="10" fill="#ffffff" opacity="0.35" />
        <ellipse cx="236" cy="160" rx="14" ry="9" fill="#ffffff" opacity="0.4" />

        {/* strawberry leaf */}
        <path d="M252 132c8-20 28-28 44-22-2 20-16 34-44 22z" fill="#3d7a28" />

        {/* whole fruit accents */}
        <circle cx="86" cy="156" r="28" fill="#5966A8" />
        <circle cx="80" cy="148" r="6" fill="#ffffff" opacity="0.5" />
        <circle cx="414" cy="188" r="32" fill="#F28C35" />
        <circle cx="406" cy="178" r="7" fill="#ffffff" opacity="0.5" />
        <circle cx="92" cy="372" r="22" fill="#E95858" />
        <path d="M92 352c5-8 14-6 16-1-4 4-12 5-16 1z" fill="#65A844" />
        <circle cx="408" cy="368" r="24" fill="#F6D64A" />
        <path d="M408 348c6-9 16-7 18-1-5 4-13 6-18 1z" fill="#65A844" />
      </svg>
    </div>
  );
}

export function BrandBar({ className }: { className?: string }) {
  return <div className={cn("brand-bar", className)} aria-hidden="true" />;
}
