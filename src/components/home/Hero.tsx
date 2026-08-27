import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background accents (kept low-opacity; interface stays cream + green). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 12% 8%, rgba(95,175,69,0.14), transparent 60%), radial-gradient(55% 50% at 92% 90%, rgba(245,185,66,0.14), transparent 60%)",
        }}
      />
      <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-pill bg-white/70 px-3 py-1 text-sm font-semibold text-green-deep ring-1 ring-green-deep/10">
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            Fruiticana - fruit-based frozen dessert
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            An exciting new way to eat fruit.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Discover a smooth, refreshing frozen dessert inspired by real fruit -
            created as a delicious alternative to traditional ice cream.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/flavors" size="lg" className="w-full sm:w-auto">
              Explore the Flavors
            </Button>
            <Button
              href="/story"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Discover Fruiticana
            </Button>
          </div>
        </div>

        <div className="reveal" data-revealed="true">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
