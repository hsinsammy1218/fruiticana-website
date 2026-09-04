import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { StatGrid } from "@/components/ui/StatGrid";
import { connecticutProgramStats } from "@/data/facts";

export function ConnecticutSchools() {
  return (
    <Section tone="deep">
      <div className="reveal grid items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <HistoricalBadge
            label="Connecticut school programs"
            className="bg-cream/15 text-cream"
          />
          <h2 className="mt-3 text-3xl font-extrabold text-cream sm:text-4xl lg:text-5xl">
            Built for schools — proven with students
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-[1.7] text-cream/90">
            Research and development began around 2003. Product sampling reached
            approximately 30,000 consumers according to company documentation.
            That chapter is how the vision was first tested in schools:
            Fruiticana participated in the Connecticut Team Nutrition Healthy
            Snack pilot and was later served in local Connecticut schools,
            including individual single-serving cups.
          </p>
          <p className="mt-3 max-w-3xl leading-[1.7] text-cream/85">
            Today Fruiticana is focused on schools and their students — a
            fruit-based frozen dessert designed for cafeteria and snack-program
            use.
          </p>
          <div className="mt-6 max-w-3xl">
            <HistoricalNotice label="Note" className="border-cream/20 bg-cream/10 text-cream/90 [&_span]:text-cream">
              Figures and program dates come from Fruiticana’s 2003–2006
              Connecticut record.
            </HistoricalNotice>
          </div>
          <div className="mt-7">
            <Button
              href="/about"
              size="lg"
              variant="secondary"
              className="border-cream/30 bg-transparent text-cream hover:border-cream/60 hover:bg-cream/10"
            >
              Read Our Story
            </Button>
          </div>
        </div>

        <StatGrid
          items={connecticutProgramStats}
          tone="deep"
          columns={2}
          aria-label="Connecticut school program figures"
        />
      </div>
    </Section>
  );
}
