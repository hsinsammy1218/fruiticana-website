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
          eyebrow="Taste the lineup"
          title="Featured flavors"
          description="A fruit-forward collection with a smooth, frozen finish. Here are a few favorites from the original 12."
        />
        <Button href="/flavors" variant="secondary" className="self-start sm:self-auto">
          Explore all flavors
        </Button>
      </div>
      <FlavorGrid className="mt-10" flavors={featuredFlavors} />
    </Section>
  );
}
