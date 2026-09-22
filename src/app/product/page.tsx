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
  title: "The product",
  description:
    "What Fruiticana is, the original fruit flavors, historical ingredients, and 2008 Nutrition Facts panels for school review.",
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
        name: "Fruiticana",
        item: `${site.url}/product`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <Section>
        <SectionHeading
          as="h1"
          eyebrow={site.productLine}
          title="What is Fruiticana?"
          description="A fruit-based frozen treat. The cold, smooth experience students already know, built around fruit. Details below move from the product to flavors, then to ingredients and nutrition."
        />
      </Section>

      <Section id="flavors" tone="white" className="scroll-mt-24">
        <SectionHeading
          title="Twelve original fruit flavors"
          description="The original documented Cream-Less Ice Crème lineup: Apple, Apricot, Banana, Blueberry, Cantaloupe, Grapefruit, Lemonade, Mango, Orange, Pineapple, Raisin, and Strawberry. Each flavor starts with fruit. These are not a confirmed current menu. A participating school would offer four flavors at a time. Which four still needs to be confirmed."
        />
        <FlavorGrid className="mt-8 sm:mt-10" flavors={flavors} />
      </Section>

      <Section id="ingredients" className="scroll-mt-24">
        <SectionHeading
          eyebrow="What's inside"
          title="What's actually in Fruiticana?"
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
      </Section>

      <Section id="servings" tone="cream-100" className="scroll-mt-24">
        <SectionHeading
          title="Historical serving information"
          description="The record emphasizes moderate single-serving portions. A 4 oz (1/2 cup) cup matches the 2008 Nutrition Facts panels. Whether that format applies to the proposed machine program still needs to be confirmed."
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

      <Section id="documentation" tone="white" className="scroll-mt-24">
        <SectionHeading
          title="Detailed documentation"
          description="Letters and records from the Connecticut chapter are shared for school review. They are historical, not current certifications."
        />
        <div className="mt-6">
          <Button href="/resources" variant="secondary">
            View documentation
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
