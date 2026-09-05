import Image from "next/image";

/**
 * High-resolution recreation of the historical myfruiticana.com
 * fruit-cone artwork. Ribbon carries the brand tagline as HTML so the type
 * stays sharp at any viewport size.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full">
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.75),transparent_72%)] sm:inset-6"
      />
      <Image
        src="/images/brand/heart.webp"
        alt=""
        width={1280}
        height={1280}
        priority
        sizes="(max-width: 1024px) 90vw, 42vw"
        className="hero-float relative mx-auto h-auto w-[92%] drop-shadow-[0_28px_50px_rgba(22,61,42,0.18)]"
      />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[14%] left-1/2 z-10 w-[78%] max-w-[22rem] -translate-x-1/2 text-center"
      >
        <span className="inline-block rounded-pill bg-berry-deep px-4 py-2 font-brand text-[clamp(1rem,2.2vw,1.4rem)] leading-tight text-yellow shadow-[0_8px_20px_rgba(36,75,42,0.18)] ring-2 ring-yellow/70 sm:px-5 sm:py-2.5">
          An exciting new way to eat fruit
        </span>
      </p>
    </div>
  );
}
