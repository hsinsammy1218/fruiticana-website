import Image from "next/image";
import { site } from "@/data/site";

/**
 * Photo-style brand foreground for the school-kitchens section — the same
 * fruit-cone artwork used on the hero, read as a frozen treat students want.
 * Decorative only; not product photography of a 4 oz cup.
 */
export function ServingFormatsForeground() {
  return (
    <aside
      className="reveal relative isolate overflow-hidden lg:sticky lg:top-24"
      aria-label="Fruiticana fruit-cone frozen dessert artwork"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[1.75rem]"
        style={{
          background: `
            radial-gradient(65% 55% at 78% 18%, rgba(233,88,88,0.14), transparent 55%),
            radial-gradient(55% 50% at 12% 82%, rgba(101,168,68,0.22), transparent 58%),
            radial-gradient(45% 40% at 50% 50%, rgba(246,214,74,0.16), transparent 55%),
            linear-gradient(165deg, #fffbef 0%, #fdf6e3 42%, #e8f5df 100%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[1.75rem] ring-1 ring-green-deep/10"
      />

      <div className="px-5 pb-8 pt-8 sm:px-7 sm:pb-10 sm:pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
          {site.productLine}
        </p>
        <p className="mt-2 max-w-[16rem] font-sans text-2xl font-extrabold leading-tight text-green-deep">
          The frozen treat students want
        </p>

        <div className="relative mx-auto mt-4 aspect-square w-full max-w-[26rem]">
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.82),transparent_72%)]"
          />
          <Image
            src="/images/brand/heart.webp"
            alt="Three waffle cones filled with colorful fresh fruit — Fruiticana brand artwork showing a fruit-based frozen dessert."
            width={960}
            height={960}
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="relative mx-auto h-auto w-[94%] drop-shadow-[0_24px_44px_rgba(22,61,42,0.16)]"
          />
        </div>

        <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-muted">
          A fruit-based frozen dessert with an ice-cream feel — portioned for
          school kitchens in a simple 4&nbsp;oz single-serve cup.
        </p>
      </div>
    </aside>
  );
}
