import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { featuredFlavors } from "@/data/flavors";

export function FeaturedFlavors() {
  return (
    <Section tone="cream-100">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Original lineup"
          title="Twelve fruit flavors"
          description="The original Fruiticana lineup is fruit-first. Six flavors are featured here; all twelve have shareable product sheets and historical nutrition notes."
        />
        <Button href="/product#flavors" variant="secondary">
          View All Flavors
        </Button>
      </div>
      <FlavorGrid className="mt-10" flavors={featuredFlavors} priorityCount={2} />
    </Section>
  );
}
