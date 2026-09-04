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
    title: `${flavor.name} product information`,
    description: `${flavor.name} Fruiticana — ${flavor.description} Product sheet from the original fruit-based frozen dessert lineup.`,
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
        name: "Flavors & Nutrition",
        item: `${site.url}/product`,
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
    { label: "Total fat", value: fmtAmount(n.totalFatG, "g") },
    { label: "Cholesterol", value: fmtAmount(n.cholesterolMg, "mg") },
    { label: "Sodium", value: fmtAmount(n.sodiumMg, "mg") },
    { label: "Sugars", value: fmtAmount(n.sugarsG, "g") },
    { label: "Vitamin C", value: fmtAmount(n.vitaminCDv, "% DV") },
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
              <p className="info-copy">
                <span className="font-semibold text-green-deep">Plant part: </span>
                {lesson.plantPart}
              </p>
              <p className="info-copy">
                <span className="font-semibold text-green-deep">Typical origin: </span>
                {lesson.typicalOrigin}
              </p>
              <p className="info-copy">
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
            eyebrow="Nutrition"
            title="Laboratory panel highlights"
            description="A few values from Fruiticana's laboratory analysis for this flavor. See the full panel on Flavors & Nutrition."
          />
          <div>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl2 border border-line bg-white p-4 text-center"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-sans text-2xl font-extrabold tabular-nums text-green-deep sm:text-3xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="info-copy mt-3">
              Per {n.servingSize} ({n.servingGrams} g) serving. Values from the
              2008 laboratory analysis.
            </p>
            <div className="mt-5">
              <Button href={`/product?flavor=${flavor.slug}#nutrition`}>
                See full nutrition facts
              </Button>
            </div>
            <HistoricalNotice className="mt-5">
              Values come from an independent laboratory analysis (Northeast
              Laboratories, 2008). Confirm them against your current formulation
              before menu planning.
            </HistoricalNotice>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Original lineup" title="Related flavors" />
            <Link
              href="/product#flavors"
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
