import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlavorExplorer } from "@/components/flavors/FlavorExplorer";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Flavors",
  description:
    "Explore Fruiticana's fruit-based frozen dessert flavors - a fruit-forward collection with a smooth, frozen finish, from the original 12-flavor lineup.",
  alternates: { canonical: "/flavors" },
};

export default function FlavorsPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="12 original flavors"
          title="A flavor for every kind of fruit lover"
          description="Every Fruiticana flavor is built around the taste of real fruit and finished with a smooth, frozen texture. Filter by fruit family, then tap a flavor to learn more."
        />
        <div className="mt-10">
          <FlavorExplorer />
        </div>
      </Section>
      <CTASection
        title="Can't decide? Start with a favorite."
        description="Mango, strawberry, and blueberry are a great place to begin - then work your way through the lineup."
        primary={{ label: "Our Story", href: "/story" }}
        secondary={{ label: "Nutrition & Ingredients", href: "/nutrition" }}
      />
    </>
  );
}
