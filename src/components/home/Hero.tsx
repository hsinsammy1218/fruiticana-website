import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { heroCopy } from "@/data/home";

/** Fruit-heart mark (cones in a pink heart) — transparent foreground for the hero. */
export const FRUIT_HEART_LOGO_SRC = "/images/brand/fruit-heart-logo.webp";

/**
 * Brand-first full-bleed hero.
 * One composition: script brand lockup + headline/CTAs on the left, the
 * fruit-heart logo as a dominant foreground on the right overlapping the
 * product scene, and a single edge-to-edge product image behind — no cards.
 */
export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92svh,54rem)] overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroCopy.image.src}
          alt={heroCopy.image.alt}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="hero-media object-cover object-[68%_42%] sm:object-[72%_40%]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              115deg,
              rgba(255, 251, 239, 0.98) 0%,
              rgba(255, 251, 239, 0.96) 38%,
              rgba(255, 251, 239, 0.82) 52%,
              rgba(255, 251, 239, 0.38) 70%,
              rgba(255, 251, 239, 0.1) 84%,
              transparent 100%
            ),
            linear-gradient(
              180deg,
              rgba(255, 251, 239, 0.62) 0%,
              transparent 30%,
              rgba(255, 251, 239, 0.22) 72%,
              rgba(255, 251, 239, 0.58) 100%
            )
          `,
        }}
      />

      <Container className="relative grid min-h-[min(92svh,54rem)] items-center gap-8 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-4 lg:py-24 xl:gap-8">
        <div className="relative z-10 max-w-xl">
          <div className="hero-rise text-green-deep">
            <Logo asLink={false} size="hero" className="text-green-deep" />
          </div>
          <h1 className="hero-rise hero-rise-delay-1 mt-6 font-display text-[clamp(1.55rem,5.4vw,3.15rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-green-deep">
            <span className="block">{heroCopy.line1}</span>
            {/* Keep a text node between block spans so the accessible name has a space. */}
            {" "}
            <span className="block">{heroCopy.line2}</span>
          </h1>
          <p className="hero-rise hero-rise-delay-2 mt-5 max-w-md text-lg leading-snug text-ink sm:text-xl">
            {heroCopy.subhead}
          </p>
          <div className="hero-rise hero-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={heroCopy.primaryCta.href}
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroCopy.primaryCta.label}
            </Button>
            <Button
              href={heroCopy.secondaryCta.href}
              size="lg"
              variant="secondary"
              className="w-full border-green-deep/30 bg-cream/90 backdrop-blur-sm sm:w-auto"
            >
              {heroCopy.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div
          className="hero-float relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-none lg:justify-self-end lg:pr-2 xl:pr-0"
          aria-hidden="true"
        >
          <div
            className="pointer-events-none absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(255,251,239,0.72),transparent_72%)]"
          />
          <Image
            src={FRUIT_HEART_LOGO_SRC}
            alt=""
            width={1100}
            height={1069}
            priority
            sizes="(max-width: 1024px) 70vw, 42vw"
            className="relative mx-auto h-auto w-[min(100%,26rem)] drop-shadow-[0_28px_50px_rgba(22,61,42,0.2)] lg:w-[min(100%,32rem)] xl:w-[min(100%,36rem)]"
          />
        </div>
      </Container>
    </section>
  );
}
