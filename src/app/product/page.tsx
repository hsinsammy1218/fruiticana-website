import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { NutritionSelector } from "@/components/nutrition/NutritionSelector";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { flavors, getFlavor } from "@/data/flavors";
import { formats, formatsNote } from "@/data/formats";
import {
  historicalIngredients,
  historicalIngredientsNotice,
  historicalIngredientsSource,
  wheatProteinFlag,
} from "@/data/ingredients";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";
import { getNutritionGlanceStats, getNutritionSnapshot } from "@/lib/nutrition";
import { StatGrid } from "@/components/ui/StatGrid";

export const metadata: Metadata = {
  title: "Flavors & Nutrition",
  description:
    "Fruiticana flavors, historical institutional serving sizes, 2008 laboratory Nutrition Facts panels, and honest ingredient notes for school and food-service review.",
  alternates: { canonical: "/product" },
};

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ flavor?: string }>;
}) {
  const { flavor: flavorParam } = await searchParams;
  const selectedSlug = getFlavor(flavorParam ?? "")?.slug ?? flavors[0].slug;
  const glance = getNutritionGlanceStats();
  const snapshot = getNutritionSnapshot();
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
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <Section className="pb-6">
        <SectionHeading
          as="h1"
          eyebrow={site.productLine}
          title="Flavors, servings, and historical nutrition"
          description={`${site.tagline} Review the original 12 fruit flavors from the myfruiticana.com lineup, documented serving formats, and dated laboratory panels — for schools and food-service staff.`}
        />
        <HistoricalNotice className="mt-6 max-w-3xl">
          Nutrition values come from an independent laboratory analysis dated
          2008 (Northeast Laboratories, Inc., report #20080318F). They are{" "}
          <strong>not a current product label</strong>. Historical nutrition
          information should be verified against any current Fruiticana
          formulation before commercial use. Serving formats are historical.
        </HistoricalNotice>
        <StatGrid
          className="mt-10"
          items={glance}
          aria-label="Historical 2008 nutrition snapshot"
        />
        <p className="info-copy mt-6 max-w-3xl">
          Every 2008 panel recorded {snapshot.allZeroFat ? "0 g total fat" : "see panels"},{" "}
          {snapshot.allZeroSaturatedFat ? "0 g saturated fat" : "see panels"},{" "}
          {snapshot.allZeroTransFat ? "0 g trans fat" : "see panels"}, and{" "}
          {snapshot.allZeroCholesterol ? "0 mg cholesterol" : "see panels"} per{" "}
          {snapshot.servingSize} ({snapshot.servingGrams} g). Calories ranged from{" "}
          {snapshot.calorieMin} to {snapshot.calorieMax}
          {snapshot.flavorsMissingCalories.length > 0
            ? ` (${snapshot.flavorsMissingCalories.join(", ")} left blank because the scan was illegible)`
            : ""}
          . Sodium ranged from {snapshot.sodiumMin}–{snapshot.sodiumMax} mg.
        </p>
      </Section>

      <Section id="flavors" className="scroll-mt-24 pt-4">
        <SectionHeading
          title="Twelve original fruit flavors"
          description="The same Cream-Less Ice Crème lineup from the original Fruiticana store: Apple, Apricot, Banana, Blueberry, Cantaloupe, Grapefruit, Lemonade, Mango, Orange, Pineapple, Raisin, and Strawberry. Open a flavor for a shareable product sheet. Which flavors exist in any current production run still needs confirmation."
        />
        <FlavorGrid className="mt-10" flavors={flavors} />
      </Section>

      <Section id="servings" tone="cream-100" className="scroll-mt-24">
        <SectionHeading
          title="Institutional serving information"
          description="The historical school program emphasized moderate single-serving portions. The business record lists a 3 oz institutional cup alongside the 4 oz (1/2 cup) size used on the laboratory panels."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {formats.map((format) => (
            <li key={format.slug} className="reveal">
              <ProductFormatCard format={format} />
            </li>
          ))}
        </ul>
        <HistoricalNotice className="mt-8">{formatsNote}</HistoricalNotice>
      </Section>

      <Section id="nutrition" className="scroll-mt-24">
        <SectionHeading
          title="Historical laboratory nutrition analyses"
          description="Select a flavor to view its transcribed 2008 Nutrition Facts panel. Banana calories stay blank because the source scan was illegible."
        />
        <div className="mt-10">
          <NutritionSelector selectedSlug={selectedSlug} />
        </div>
        <p className="info-copy mt-8 max-w-3xl">
          Teachers can also use these dated panels for Nutrition Facts literacy
          on the classroom resource. Food-service readers should treat them as
          historical reference only.
        </p>
        <div className="mt-4">
          <Button href="/learn#labels" variant="secondary">
            Classroom label lesson
          </Button>
        </div>
      </Section>

      <Section id="ingredients" tone="white" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Ingredients & allergens"
          title="What's inside"
          description="A complete, current ingredient statement is not published here yet. The 2007 myfruiticana.com product pages listed the historical formulation below."
        />
        <HistoricalNotice className="mt-6 max-w-3xl">
          {historicalIngredientsNotice}
        </HistoricalNotice>
        <ol className="mt-8 max-w-xl space-y-3">
          {historicalIngredients.map((item, index) => (
            <li
              key={item.name}
              className="rounded-xl2 border border-line bg-cream-100 px-4 py-3"
            >
              <p className="font-semibold text-green-deep">
                {index + 1}. {item.name}
              </p>
              {item.note ? <p className="info-copy mt-1 text-sm">{item.note}</p> : null}
            </li>
          ))}
        </ol>
        <p className="info-copy mt-6 max-w-3xl">{wheatProteinFlag}</p>
        <p className="mt-3 text-sm text-muted">{historicalIngredientsSource}</p>
        <HistoricalNotice label="To be confirmed" className="mt-6 max-w-3xl">
          Current ingredients, allergens, and formulation claims (such as
          dairy-free, lactose-free, or added-sugar statements) will be added
          once verified with the business. 2007 website nutrition numbers are
          not shown here because they disagree with the 2008 laboratory panels
          used on this page.
        </HistoricalNotice>
        <div className="mt-6">
          <Button href="/contact?interest=Nutrition%20Information">
            Ask about current specifications
          </Button>
        </div>
      </Section>

      <CTASection
        title="Need this information for a school program?"
        description="Request school information and include your role, estimated enrollment, and whether you are evaluating cafeteria, snack, or distribution use."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "For Schools", href: "/schools" }}
      />
    </>
  );
}
