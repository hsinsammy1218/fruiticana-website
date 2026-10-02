import Image from "next/image";

/** Transparent fruit-heart mark — same asset as hero and contact. */
const FRUIT_HEART_LOGO_SRC = "/images/brand/fruit-heart-logo.webp";

/**
 * Visual foreground for the About timeline — fills the open right column
 * so the history section is not text-only. Brand heart art is the main plane.
 */
export function TimelineForeground() {
  return (
    <aside
      className="relative isolate overflow-hidden lg:sticky lg:top-24"
      aria-label="Fruiticana brand artwork"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[1.75rem]"
        style={{
          background: `
            radial-gradient(70% 55% at 82% 22%, rgba(255,42,42,0.28), transparent 55%),
            radial-gradient(55% 50% at 10% 78%, rgba(40,208,18,0.34), transparent 58%),
            radial-gradient(45% 40% at 48% 48%, rgba(255,224,20,0.28), transparent 55%),
            radial-gradient(40% 35% at 88% 72%, rgba(255,110,0,0.2), transparent 55%),
            linear-gradient(165deg, #fce98d 0%, #c6e84a 42%, #0f2f12 100%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[1.75rem] ring-1 ring-green-deep/10"
      />

      <div className="px-5 pb-8 pt-8 sm:px-7 sm:pb-10 sm:pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-berry-deep">
          Fruiticana from the start
        </p>
        <p className="mt-2 max-w-[16rem] font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green-deep sm:text-[1.65rem]">
          A fruit-first frozen dessert.
        </p>

        <div className="relative mx-auto mt-4 aspect-square w-full max-w-[24rem]">
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(228,249,184,0.75),transparent_72%)]"
          />
          <Image
            src={FRUIT_HEART_LOGO_SRC}
            alt=""
            width={1100}
            height={1069}
            sizes="(max-width: 1024px) 85vw, 30vw"
            className="relative mx-auto h-auto w-[94%] drop-shadow-[0_24px_44px_rgba(22,61,42,0.16)]"
          />
        </div>

        <p className="mx-auto mt-1 max-w-xs text-center text-sm font-medium leading-relaxed text-ink sm:text-base">
          The same fruit-forward dessert concept Connecticut schools first
          sampled — still the story schools can review today.
        </p>
      </div>
    </aside>
  );
}
