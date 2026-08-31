import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { HeroVisual } from "@/components/home/HeroVisual";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,56rem)] overflow-hidden">
      {/* Full-bleed orchard atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(70% 60% at 78% 35%, rgba(214,40,40,0.16), transparent 55%),
            radial-gradient(55% 50% at 12% 20%, rgba(95,175,69,0.28), transparent 60%),
            radial-gradient(50% 45% at 40% 90%, rgba(245,185,66,0.22), transparent 55%),
            linear-gradient(165deg, #fffdf8 0%, #fff1d8 42%, #e8f5df 100%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235faf45' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        <div className="hero-rise max-w-xl">
          <Logo asLink={false} size="hero" className="text-green" />
          <h1 className="mt-8 font-display text-4xl font-bold uppercase tracking-[0.04em] text-berry sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            The New Way
            <span className="block">to Eat Fruit</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-[1.75] text-muted sm:text-xl">
            A fruit-based creamless frozen dessert — smooth like ice cream,
            built from fruit flavors for schools and families.
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
          <p className="mt-5 text-sm font-semibold text-green-deep/70">
            Updated from the original {site.name} Cream-Less Ice Crème brand.
          </p>
        </div>

        <div className="hero-rise relative" style={{ animationDelay: "120ms" }}>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
