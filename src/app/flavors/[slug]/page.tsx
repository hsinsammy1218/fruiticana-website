import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { FlavorHero } from "@/components/flavors/FlavorHero";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { fmtAmount } from "@/lib/nutrition";
import { site } from "@/data/site";
import {
  flavorSlugs,
  getFlavor,
  getRelatedFlavors,
} from "@/data/flavors";
import { getFruitLesson } from "@/data/learn";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return flavorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flavor = getFlavor(slug);
  if (!flavor) return {};
  return {
    title: `${flavor.name} Flavor`,
    description: `${flavor.name} Fruiticana - ${flavor.description} A fruit-based frozen dessert from the original lineup.`,
    alternates: { canonical: `/flavors/${flavor.slug}` },
  };
}

export default async function FlavorPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const flavor = getFlavor(slug);
  if (!flavor) notFound();

  const related = getRelatedFlavors(slug, 3);
  const n = flavor.nutrition;
  const lesson = getFruitLesson(slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Flavors",
        item: `${site.url}/flavors`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: flavor.name,
        item: `${site.url}/flavors/${flavor.slug}`,
      },
    ],
  };

  const highlights = [
    { label: "Calories", value: fmtAmount(n.calories) },
    { label: "Total carbs", value: fmtAmount(n.totalCarbG, "g") },
    { label: "Dietary fiber", value: fmtAmount(n.dietaryFiberG, "g") },
    { label: "Vitamin C", value: fmtAmount(n.vitaminCDv, "%") },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <FlavorHero flavor={flavor} />

      {lesson ? (
        <Section>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-12">
            <SectionHeading
              eyebrow="Classroom fruit fact"
              title={`Learn about ${lesson.fruitName.toLowerCase()}`}
              description={lesson.classroomFact}
            />
            <div className="space-y-3 rounded-xl2 border border-line bg-white p-6">
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-green-deep">Plant part: </span>
                {lesson.plantPart}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-green-deep">Typical origin: </span>
                {lesson.typicalOrigin}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-green-deep">Try this: </span>
                {lesson.tryThis}
              </p>
              <Button href="/learn#fruits" variant="secondary">
                All twelve fruit lessons
              </Button>
            </div>
          </div>
        </Section>
      ) : null}

      <Section tone="cream-100">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <SectionHeading
            eyebrow="Historical nutrition"
            title="A look at the numbers"
            description="A few highlights from Fruiticana's historical laboratory analysis for this flavor. See the full panel and important context on the Nutrition page."
          />
          <div>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl2 border border-line bg-white p-4 text-center"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-extrabold text-green-deep">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-muted">
              Per {n.servingSize} ({n.servingGrams} g) serving.
            </p>
            <div className="mt-5">
              <Button href={`/nutrition?flavor=${flavor.slug}`}>
                See full nutrition facts
              </Button>
            </div>
            <HistoricalNotice className="mt-5">
              Values come from an independent laboratory analysis (Northeast
              Laboratories, 2008) and are shown as historical reference only -
              not a current product label. Verify against the current
              formulation before relying on them.
            </HistoricalNotice>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Keep tasting" title="More flavors" />
            <Link
              href="/flavors"
              className="hidden text-sm font-semibold text-green-600 hover:text-green-700 sm:inline"
            >
              View all
            </Link>
          </div>
          <FlavorGrid className="mt-8" flavors={related} />
        </Section>
      ) : null}
    </>
  );
}
