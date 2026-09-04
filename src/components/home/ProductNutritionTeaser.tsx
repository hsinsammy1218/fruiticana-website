import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StatGrid } from "@/components/ui/StatGrid";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { getNutritionGlanceStats } from "@/lib/nutrition";

export function ProductNutritionTeaser() {
  const glance = getNutritionGlanceStats();

  return (
    <Section>
      <SectionHeading
        eyebrow="Nutrition information"
        title="Nutrition testing and flavor information"
        description="Independent laboratory Nutrition Facts panels for all 12 original flavors were recorded in 2008 (Northeast Laboratories, Inc., report #20080318F)."
      />
      <StatGrid
        className="mt-10"
        items={glance}
        aria-label="2008 nutrition snapshot"
      />
      <HistoricalNotice className="mt-6 max-w-3xl">
        Confirm nutrition information against your current Fruiticana formulation
        before menu planning. 0 g total fat and 0 mg cholesterol were recorded on
        every 2008 panel.
      </HistoricalNotice>
      <div className="mt-8">
        <Button href="/product#nutrition" size="lg">
          View Nutrition Information
        </Button>
      </div>
    </Section>
  );
}
