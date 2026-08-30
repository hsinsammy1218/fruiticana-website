import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";

const stats = [
  { label: "Team Nutrition pilot", value: "2003–05" },
  { label: "Local school pilot", value: "2005–06" },
  { label: "Consumers sampled", value: "~30,000" },
  { label: "Original flavors", value: "12" },
];

export function ConnecticutSchools() {
  return (
    <Section tone="deep">
      <div className="reveal grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
            Historical Fruiticana school program
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-cream sm:text-4xl">
            Fruiticana in Connecticut Schools
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/80">
            Fruiticana participated from 2003–2005 in the Connecticut Team
            Nutrition Healthy Snack pilot — a USDA-funded grant program to the
            Connecticut State Department of Education. After consumer testing,
            the product later went into broader production for local Connecticut
            schools.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-cream/75">
            For a school administrator, that documented chapter is more useful
            than consumer marketing. It is still history: past participation is
            not a current menu listing or a state endorsement.
          </p>
          <div className="mt-6 max-w-xl">
            <HistoricalNotice>
              Figures and program dates come from Fruiticana’s 2003–2006
              Connecticut record and must be read as historical background.
            </HistoricalNotice>
          </div>
          <div className="mt-7">
            <Button
              href="/story"
              size="lg"
              variant="secondary"
              className="border-cream/30 bg-transparent text-cream hover:border-cream/60 hover:bg-cream/10"
            >
              Read the pilot program story
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl2 bg-green-deep-80 p-5">
              <dt className="text-sm text-cream/70">{stat.label}</dt>
              <dd className="mt-1 font-display text-2xl font-extrabold text-cream sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
