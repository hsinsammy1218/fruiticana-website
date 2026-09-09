import Image from "next/image";
import { site } from "@/data/site";

/**
 * Historical product imagery for the school-kitchens section — cropped from
 * the 2007 myfruiticana.com scoop column (left_column_bak.jpg). Not a current
 * 4 oz cup product photo; owner-provided cup photography can replace it later.
 */
export function ServingFormatsForeground() {
  return (
    <aside
      className="reveal relative isolate overflow-hidden lg:sticky lg:top-24"
      aria-label="Fruiticana fruit scoop product imagery"
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
          Colorful scoops, smooth texture
        </p>

        <figure className="relative mx-auto mt-4 w-full max-w-[22rem] overflow-hidden rounded-[1.25rem] bg-white shadow-[0_24px_44px_rgba(22,61,42,0.14)] ring-1 ring-green-deep/10">
          <Image
            src="/images/brand/school-scoops.webp"
            alt="Colorful Fruiticana fruit scoops from the original brand imagery — a smooth, ice-cream-like frozen dessert."
            width={720}
            height={900}
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="h-auto w-full object-cover"
          />
        </figure>

        <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-muted">
          Historical brand imagery of Fruiticana&rsquo;s fruit scoops — portioned
          for school kitchens in a simple 4&nbsp;oz single-serve cup.
        </p>
      </div>
    </aside>
  );
}
