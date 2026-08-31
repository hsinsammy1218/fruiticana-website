import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { NutritionSelector } from "@/components/nutrition/NutritionSelector";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { flavors } from "@/data/flavors";
import { formats, formatsNote } from "@/data/formats";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Product & Nutrition",
  description:
    "Fruiticana flavors, historical institutional serving sizes, 2008 laboratory Nutrition Facts panels, and honest ingredient notes for school and food-service review.",
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Product & Nutrition",
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
          eyebrow="Product & nutrition"
          title="Flavors, servings, and historical nutrition"
          description="A factual briefing for food-service and school nutrition staff: the original 12-flavor lineup, documented serving formats, and dated laboratory panels."
        />
        <HistoricalNotice className="mt-6 max-w-3xl">
          Nutrition values come from an independent laboratory analysis dated
          2008 (Northeast Laboratories, Inc., report #20080318F). They are{" "}
          <strong>not a current product label</strong>. Serving formats are
          historical. Current ingredients, allergens, and pack sizes must be
          re-verified before menu use.
        </HistoricalNotice>
      </Section>

      <Section id="flavors" className="scroll-mt-24 pt-4">
        <SectionHeading
          title="Original flavor lineup"
          description="Twelve fruit flavors from the historical product line. Open a flavor for a shareable product sheet. Which flavors exist in any current production run still needs confirmation."
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
          <Suspense fallback={<p className="text-muted">Loading nutrition...</p>}>
            <NutritionSelector />
          </Suspense>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
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
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Ingredients & allergens"
              title="What's inside"
              description="Fruiticana has historically been described as a fruit-based frozen dessert. A complete, current ingredient statement is not published here yet."
            />
          </div>
          <div className="space-y-4">
            <p className="leading-relaxed text-muted">
              We would rather show nothing than publish an ingredient or allergen
              list we cannot currently verify. High-level language (fruit-based;
              originally a lactose-free concept) is not a substitute for a
              current specification sheet.
            </p>
            <HistoricalNotice label="To be confirmed">
              Current ingredients, allergens, and formulation claims (such as
              dairy-free, lactose-free, or added-sugar statements) will be added
              once verified with the business.
            </HistoricalNotice>
            <Button href="/contact?interest=School%20Cafeteria">
              Ask about current specifications
            </Button>
          </div>
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
