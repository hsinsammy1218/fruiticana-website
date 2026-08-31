import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { OriginalBrandMotif } from "@/components/brand/OriginalBrandMotif";
import { StatGrid } from "@/components/ui/StatGrid";
import { site } from "@/data/site";
import { homeGlanceStats } from "@/data/facts";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 12% 8%, rgba(101,168,68,0.16), transparent 60%), radial-gradient(55% 50% at 92% 90%, rgba(246,214,74,0.16), transparent 60%)",
        }}
      />
      <Container className="grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-pill bg-white/70 px-3 py-1 text-sm font-semibold text-green-deep ring-1 ring-green-deep/10">
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            Information for schools and food-service programs
          </p>
          <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.22em] text-green-600">
            {site.legacyProductName}
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Fruiticana
          </h1>
          <p className="mt-4 max-w-xl font-display text-2xl font-bold leading-snug text-green-deep sm:text-3xl">
            “{site.legacyTagline}”
          </p>
          <p className="mt-4 max-w-xl text-lg font-semibold leading-snug text-green-deep sm:text-xl">
            {site.heroSupport}
          </p>
          <p className="mt-4 max-w-xl text-base leading-[1.7] text-muted sm:text-lg">
            Fruiticana Creamless Ice Cream combines the refreshing taste of fruit
            with the smooth experience of a frozen dessert.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/about" size="lg" className="w-full sm:w-auto">
              Learn About Fruiticana
            </Button>
            <Button
              href="/schools"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              For Schools
            </Button>
          </div>
        </div>

        <div className="reveal" data-revealed="true">
          <OriginalBrandMotif />
        </div>
      </Container>
      <Container className="pb-10 sm:pb-14">
        <StatGrid
          items={homeGlanceStats}
          aria-label="Fruiticana figures at a glance"
        />
      </Container>
    </section>
  );
}
