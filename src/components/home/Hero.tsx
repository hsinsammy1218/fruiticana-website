import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { heroCopy } from "@/data/home";

/**
 * Brand-first hero. The line is the idea; fruit photography does the rest.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(70% 60% at 82% 28%, rgba(233,88,88,0.18), transparent 55%),
            radial-gradient(55% 50% at 8% 18%, rgba(101,168,68,0.22), transparent 60%),
            linear-gradient(165deg, #fffbef 0%, #fdf6e3 55%, #fff7ea 100%)
          `,
        }}
      />

      <Container className="relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:py-20">
        <div className="hero-rise max-w-xl">
          <h1 className="font-display text-[clamp(1.7rem,8.2vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-green-deep">
            <span className="block">{heroCopy.line1}</span>
            <span className="block">{heroCopy.line2}</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-snug text-ink sm:text-xl">
            {heroCopy.subhead}
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

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-xl2">
            <Image
              src="/images/journey/real-fruit.webp"
              alt="Cut mango, strawberries, orange, pineapple, apple, and blueberries"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl2">
            <Image
              src="/images/flavors/strawberry.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 46vw, 22vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl2">
            <Image
              src="/images/journey/fruiticana.webp"
              alt="Pink and yellow frozen scoops in a cup beside strawberry and mango"
              fill
              sizes="(max-width: 1024px) 46vw, 22vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
