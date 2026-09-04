import Image from "next/image";

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
            radial-gradient(70% 55% at 82% 22%, rgba(233,88,88,0.2), transparent 55%),
            radial-gradient(55% 50% at 10% 78%, rgba(101,168,68,0.26), transparent 58%),
            radial-gradient(45% 40% at 48% 48%, rgba(246,214,74,0.18), transparent 55%),
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
          Fruiticana from the start
        </p>
        <p className="mt-2 max-w-[15rem] font-sans text-2xl font-extrabold leading-tight text-green-deep">
          A fruit-first idea for schools and students.
        </p>

        <div className="relative mx-auto mt-4 aspect-square w-full max-w-[24rem]">
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.82),transparent_72%)]"
          />
          <Image
            src="/images/brand/heart.webp"
            alt=""
            width={960}
            height={960}
            sizes="(max-width: 1024px) 85vw, 30vw"
            className="relative mx-auto h-auto w-[94%] drop-shadow-[0_24px_44px_rgba(22,61,42,0.16)]"
          />
        </div>

        <p className="mx-auto mt-1 max-w-xs text-center text-sm leading-relaxed text-muted">
          The same fruit-forward dessert concept Connecticut schools first
          sampled — still the story schools can review today.
        </p>
      </div>
    </aside>
  );
}
