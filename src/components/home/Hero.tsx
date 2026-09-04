import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";
import { StatGrid } from "@/components/ui/StatGrid";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";
import { homeGlanceStats } from "@/data/facts";

/**
 * Brand-first hero recreating the myfruiticana.com promise:
 * Cream-Less Ice Crème + “The New Way to Eat Fruit”, written for schools.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
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

      <Container className="relative grid min-h-[min(88vh,52rem)] items-center gap-10 py-14 sm:py-18 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-20 xl:gap-16">
        <div className="hero-rise max-w-2xl lg:max-w-none">
          <p className="inline-flex items-center gap-2 rounded-pill bg-white/70 px-3 py-1 text-sm font-semibold text-green-deep ring-1 ring-green-deep/10">
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            For school decision-makers
          </p>
          <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.22em] text-green-600">
            {site.productLine}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-[0.04em] text-berry sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06] xl:text-[4.25rem]">
            The New Way{" "}
            <span className="block">to Eat Fruit</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.75] text-muted sm:text-xl">
            {site.heroSupport}
          </p>
          <p className="mt-3 max-w-xl text-base leading-[1.7] text-muted">
            Originally introduced as {site.legacyProductName}. Smooth like ice
            cream, built from fruit flavors — for cafeterias and snack programs,
            not wholesale.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={navCta.href} size="lg" className="w-full sm:w-auto">
              {navCta.label}
            </Button>
            <Button
              href="#vision"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              See the vision
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xl xl:max-w-2xl">
            <HeroVisual />
          </div>
        </div>
      </Container>

      <Container className="pb-12 sm:pb-16">
        <StatGrid
          items={homeGlanceStats}
          aria-label="Fruiticana figures at a glance"
        />
      </Container>
    </section>
  );
}
