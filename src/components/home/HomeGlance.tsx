import { Section } from "@/components/layout/Section";
import { StatGrid } from "@/components/ui/StatGrid";
import { homeGlanceStats } from "@/data/facts";

/** Glance stats sit below the brand hero so the first viewport stays brand-first. */
export function HomeGlance() {
  return (
    <Section className="!py-10 sm:!py-12">
      <StatGrid
        items={homeGlanceStats}
        aria-label="Fruiticana figures at a glance"
      />
    </Section>
  );
}
