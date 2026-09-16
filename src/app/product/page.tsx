import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NutritionSelector } from "@/components/nutrition/NutritionSelector";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { flavors, getFlavor } from "@/data/flavors";
import { formats } from "@/data/formats";
import { IngredientRecipe } from "@/components/nutrition/IngredientRecipe";
import {
  currentVerificationNotice,
  ingredientsSectionIntro,
  recipeIngredientsSource,
  wheatProteinFlag,
} from "@/data/ingredients";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";
import { getNutritionGlanceStats, getNutritionSnapshot } from "@/lib/nutrition";
import { StatGrid } from "@/components/ui/StatGrid";

export const metadata: Metadata = {
  title: "Flavors & Nutrition",
  description:
    "Original Fruiticana flavors, 4 oz servings, 2008 Nutrition Facts panels, and a 2007 ingredient list for school review — with current testing still needed before launch.",
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
      <Section id="flavors" className="scroll-mt-24">
        <SectionHeading
          as="h1"
          eyebrow={site.productLine}
          title="Flavors, servings, and nutrition"
          description={`${site.tagline} These are the original documented flavors, the 4 oz single-serve format, and Nutrition Facts panels for school review. Current availability and a current formula still need to be confirmed.`}
        />
        <div className="mt-10 sm:mt-12">
          <SectionHeading
            title="Twelve original fruit flavors"
            description="The original documented Cream-Less Ice Crème lineup: Apple, Apricot, Banana, Blueberry, Cantaloupe, Grapefruit, Lemonade, Mango, Orange, Pineapple, Raisin, and Strawberry. Each flavor starts with fruit. Open a flavor for its product sheet and the full 2008 Nutrition Facts panel. Which flavors a school can offer today still needs to be confirmed."
          />
          <FlavorGrid className="mt-8 sm:mt-10" flavors={flavors} />
        </div>
      </Section>

      <Section id="servings" tone="cream-100" className="scroll-mt-24">
        <SectionHeading
          title="Institutional serving information"
          description="The record emphasizes moderate single-serving portions. A 4 oz (1/2 cup) cup matches the Nutrition Facts panels."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-1 lg:max-w-md">
          {formats.map((format) => (
            <li key={format.slug} className="reveal">
              <ProductFormatCard format={format} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="nutrition" className="scroll-mt-24">
        <SectionHeading
          title="Nutrition Facts panels"
          description="Select a flavor to view its transcribed 2008 Nutrition Facts panel. Banana calories stay blank because the source scan was illegible. Current testing is needed before launch."
        />
        <HistoricalNotice className="mt-8 max-w-3xl" label="Needs current testing">
          {currentVerificationNotice}
        </HistoricalNotice>
        <StatGrid
          className="mt-10"
          items={glance}
          aria-label="2008 nutrition snapshot"
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
        <div className="mt-10">
          <NutritionSelector selectedSlug={selectedSlug} />
        </div>
        <p className="info-copy mt-8 max-w-3xl">
          Teachers can also use these dated panels for Nutrition Facts literacy
          on the classroom resource.
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
          title="What's Actually in Fruiticana?"
          description={ingredientsSectionIntro}
        />
        <HistoricalNotice className="mt-8 max-w-3xl" label="2007 recipe / 2008 panels">
          {currentVerificationNotice}
        </HistoricalNotice>
        <div className="mt-8">
          <IngredientRecipe />
        </div>
        <p className="info-copy mt-6 max-w-3xl">{wheatProteinFlag}</p>
        <p className="mt-3 text-sm text-muted">{recipeIngredientsSource}</p>
        <div className="mt-6">
          <Button href="/contact?interest=Nutrition%20Information">
            Ask about school kitchen setup
          </Button>
        </div>
      </Section>

      <CTASection
        title="Need this information for a school program?"
        description="Request school information and include your role, estimated enrollment, and whether you are evaluating cafeteria or snack-program use."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "For Schools", href: "/schools" }}
      />
    </>
  );
}
