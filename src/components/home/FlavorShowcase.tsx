import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FlavorImage } from "@/components/flavors/FlavorImage";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { flavorsCopy, homepageFlavorSlugs } from "@/data/home";
import { getFlavor } from "@/data/flavors";

export function FlavorShowcase() {
  const featured = homepageFlavorSlugs.flatMap((slug) => {
    const flavor = getFlavor(slug);
    return flavor ? [flavor] : [];
  });

  return (
    <Section id="flavors" tone="white" className="scroll-mt-24">
      <SectionHeading
        eyebrow={flavorsCopy.eyebrow}
        title={flavorsCopy.title}
        description={flavorsCopy.description}
      />
      <ul className="mt-10 flex flex-col gap-6 sm:mt-12 sm:gap-8">
        {featured.map((flavor, index) => {
          const imageFirst = index % 2 === 0;
          return (
            <li key={flavor.slug}>
              <article
                className="grid overflow-hidden rounded-xl2 border border-line bg-cream lg:grid-cols-2 lg:items-stretch"
                style={{ ["--accent" as string]: flavor.accent }}
              >
                <div
                  className={`relative min-h-64 aspect-[4/3] lg:aspect-auto lg:min-h-[22rem] ${
                    imageFirst ? "" : "lg:order-2"
                  }`}
                >
                  <FlavorImage
                    flavor={flavor}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div
                  className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 16%, var(--color-cream))",
                  }}
                >
                  <HistoricalBadge label="Original flavor" />
                  <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight text-green-deep sm:text-5xl">
                    {flavor.name}
                  </h3>
                  <p className="mt-3 max-w-md text-lg leading-snug text-ink">
                    {flavor.description}
                  </p>
                  <Link
                    href={`/flavors/${flavor.slug}`}
                    className="mt-6 inline-flex min-h-11 w-fit items-center text-sm font-bold uppercase tracking-[0.14em] text-green-deep underline-offset-4 hover:underline"
                  >
                    Explore {flavor.name}
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <Button href={flavorsCopy.cta.href} variant="secondary">
          {flavorsCopy.cta.label}
        </Button>
      </div>
    </Section>
  );
}
