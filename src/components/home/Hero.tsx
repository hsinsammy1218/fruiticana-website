import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";
import { StatGrid } from "@/components/ui/StatGrid";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";
import { homeGlanceStats } from "@/data/facts";

/**
 * Brand-first hero recreating the myfruiticana.com promise:
 * Cream-Less Ice Crème + “The New Way to Eat Fruit”, with school inquiry
 * kept as a secondary conversion path.
 */
export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,56rem)] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(70% 60% at 82% 28%, rgba(233,88,88,0.16), transparent 55%),
            radial-gradient(55% 50% at 8% 18%, rgba(101,168,68,0.28), transparent 60%),
            radial-gradient(50% 45% at 48% 92%, rgba(246,214,74,0.22), transparent 55%),
            linear-gradient(165deg, #fffbef 0%, #fdf6e3 42%, #e8f5df 100%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full max-w-3xl opacity-90 lg:w-[55%]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-transparent to-transparent lg:from-[color-mix(in_srgb,var(--color-cream)_88%,transparent)]" />
        <div className="flex h-full items-center justify-center px-6 pt-24 lg:justify-end lg:pr-10 lg:pt-8">
          <div className="w-full max-w-md lg:max-w-lg">
            <HeroVisual />
          </div>
        </div>
      </div>

      <Container className="relative grid min-h-[min(92vh,56rem)] items-center py-16 sm:py-20 lg:py-24">
        <div className="hero-rise max-w-xl lg:max-w-[32rem]">
          <p className="inline-flex items-center gap-2 rounded-pill bg-white/70 px-3 py-1 text-sm font-semibold text-green-deep ring-1 ring-green-deep/10">
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            Information for schools and food-service programs
          </p>
          <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.22em] text-green-600">
            {site.productLine}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-[0.04em] text-berry sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            The New Way{" "}
            <span className="block">to Eat Fruit</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-[1.75] text-muted sm:text-xl">
            {site.heroSupport} Smooth like ice cream, built from fruit flavors.
          </p>
          <p className="mt-3 max-w-lg text-base leading-[1.7] text-muted">
            Originally introduced as {site.legacyProductName}. The original
            consumer line was “{site.legacyTagline}”
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/product" size="lg" className="w-full sm:w-auto">
              Explore Flavors
            </Button>
            <Button
              href={navCta.href}
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {navCta.label}
            </Button>
          </div>
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
