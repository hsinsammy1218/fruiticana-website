import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { NutritionSelector } from "@/components/nutrition/NutritionSelector";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Nutrition",
  description:
    "Fruiticana's historical laboratory Nutrition Facts panels for all 12 flavors, shown for reference and clearly labeled as historical - not a current product label.",
  alternates: { canonical: "/nutrition" },
};

export default function NutritionPage() {
  return (
    <>
      <Section className="pb-6">
        <SectionHeading
          as="h1"
          eyebrow="Nutrition"
          title="Fruit-forward, and honest about it"
          description="Fruiticana is a fruit-based frozen dessert - not a medical product. Below are the brand's historical laboratory nutrition panels, shown for reference."
        />
        <HistoricalNotice className="mt-6 max-w-3xl">
          The panels below come from an independent laboratory analysis dated
          2008 (Northeast Laboratories, Inc.). They are provided as historical
          reference only and are <strong>not a current product label</strong>.
          Every value must be re-verified against the current formulation before
          it is published as nutrition information.
        </HistoricalNotice>
      </Section>

      <Section className="pt-4">
        <Suspense fallback={<p className="text-muted">Loading nutrition...</p>}>
          <NutritionSelector />
        </Suspense>
      </Section>

      <Section tone="cream-100">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Ingredients & allergens"
              title="What's inside"
              description="Fruiticana has historically been described simply as a fruit-based frozen dessert."
            />
          </div>
          <div className="space-y-4">
            <p className="leading-relaxed text-muted">
              A complete, current ingredient statement and allergen declaration
              is not published here yet. We would rather show nothing than
              publish an ingredient list we cannot currently verify.
            </p>
            <HistoricalNotice label="To be confirmed">
              Current ingredients, allergens, and formulation claims (such as
              dairy-free, lactose-free, or added-sugar statements) will be added
              once verified with the business.
            </HistoricalNotice>
          </div>
        </div>
      </Section>

      <CTASection
        title="Questions about nutrition or ingredients?"
        description="Reach out and we'll follow up as current product information becomes available."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Explore the Flavors", href: "/flavors" }}
      />
    </>
  );
}
