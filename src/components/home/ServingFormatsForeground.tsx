import { OriginalBrandMotif } from "@/components/brand/OriginalBrandMotif";
import { site } from "@/data/site";

/**
 * Visual foreground for the school-kitchens section — the historical
 * Fruiticana scoop-stack identity, not product photography.
 */
export function ServingFormatsForeground() {
  return (
    <aside
      className="relative isolate overflow-hidden lg:sticky lg:top-24"
      aria-label="Fruiticana creamless frozen dessert artwork"
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
          Smooth scoops students recognize
        </p>

        <OriginalBrandMotif className="mt-4 max-w-[22rem]" />

        <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-muted">
          A fruit-based frozen dessert with an ice-cream feel — portioned for
          school kitchens in a simple 4&nbsp;oz single-serve cup.
        </p>
      </div>
    </aside>
  );
}
