import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";
import { StatGrid } from "@/components/ui/StatGrid";
import { navCta } from "@/data/navigation";
import { homeGlanceStats } from "@/data/facts";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 12% 8%, rgba(95,175,69,0.14), transparent 60%), radial-gradient(55% 50% at 92% 90%, rgba(245,185,66,0.10), transparent 60%)",
        }}
      />
      <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-pill bg-white/70 px-3 py-1 text-sm font-semibold text-green-deep ring-1 ring-green-deep/10">
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            Information for schools and food-service programs
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-5xl">
            A Healthier Frozen Dessert Option for Schools
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.75] text-muted sm:text-xl">
            Fruiticana is a fruit-based frozen dessert originally developed to
            provide students and families with a refreshing alternative to
            traditional dairy ice cream.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={navCta.href} size="lg" className="w-full sm:w-auto">
              {navCta.label}
            </Button>
            <Button
              href="/product"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              View Nutrition & Product Details
            </Button>
          </div>
        </div>

        <div className="reveal" data-revealed="true">
          <HeroVisual />
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
