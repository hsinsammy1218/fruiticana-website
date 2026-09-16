import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { featuredFlavors } from "@/data/flavors";
import { flavorsCopy } from "@/data/home";

export function FeaturedFlavors() {
  return (
    <Section tone="white">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={flavorsCopy.eyebrow}
          title={flavorsCopy.title}
          description={flavorsCopy.description}
        />
        <Button href={flavorsCopy.cta.href} variant="secondary">
          {flavorsCopy.cta.label}
        </Button>
      </div>
      <FlavorGrid className="mt-10" flavors={featuredFlavors} priorityCount={2} />
    </Section>
  );
}
