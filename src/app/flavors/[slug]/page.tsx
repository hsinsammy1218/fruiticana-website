import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlavorHero } from "@/components/flavors/FlavorHero";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import {
  flavorSlugs,
  getFlavor,
  getRelatedFlavors,
} from "@/data/flavors";

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
    description: `${flavor.name} Fruiticana — ${flavor.description} Product sheet and full 2008 Nutrition Facts panel from the original fruit-based frozen dessert lineup.`,
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

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <FlavorHero flavor={flavor} />

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
