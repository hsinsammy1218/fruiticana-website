import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { flavors } from "@/data/flavors";

/**
 * Homepage flavor showcase — modern take on the original myfruiticana.com
 * product list (12 creamless fruit flavors).
 */
export function HomeFlavors() {
  return (
    <Section id="flavors" tone="white">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Our flavors"
          title="Twelve Original Fruit Flavors"
          description="The same lineup featured on the original Fruiticana store — orchard, tropical, citrus, berry, and melon."
        />
        <Button href="/product" variant="secondary" className="self-start sm:self-auto">
          Product & nutrition
        </Button>
      </div>
      <FlavorGrid className="mt-10" flavors={flavors} priorityCount={3} />
    </Section>
  );
}
