import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";
import { heroCopy } from "@/data/home";

/**
 * Student-first hero: an exciting new way to eat fruit, written for the
 * adults who make school food decisions.
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
          <h1 className="font-display text-[clamp(1.2rem,5.1vw,2.2rem)] font-bold tracking-[-0.02em] text-berry sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] xl:text-[4rem]">
            <span className="block whitespace-nowrap">{heroCopy.line1} </span>
            <span className="block">{heroCopy.line2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl font-semibold leading-snug text-green-deep sm:text-2xl">
            {heroCopy.subhead}
          </p>
          <p className="mt-4 max-w-xl text-base leading-[1.7] text-muted sm:text-lg">
            {heroCopy.originalNote}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={heroCopy.primaryCta.href} size="lg" className="w-full sm:w-auto">
              {heroCopy.primaryCta.label}
            </Button>
            <Button
              href={heroCopy.secondaryCta.href}
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {heroCopy.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xl xl:max-w-2xl">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
