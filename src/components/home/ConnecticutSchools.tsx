import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { StatGrid } from "@/components/ui/StatGrid";
import { connecticutProgramStats } from "@/data/facts";
import { historyCopy } from "@/data/home";

export function ConnecticutSchools() {
  return (
    <Section tone="deep">
      <div className="reveal">
        <HistoricalBadge
          label={historyCopy.badge}
          className="bg-cream/15 text-cream"
        />
        <h2 className="mt-3 text-3xl font-extrabold text-cream sm:text-4xl lg:text-5xl">
          {historyCopy.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-[1.7] text-cream/90">
          {historyCopy.body}
        </p>
        <p className="mt-3 max-w-3xl text-base leading-[1.7] text-cream/80">
          {historyCopy.distinction}
        </p>
        <p className="mt-3 max-w-3xl leading-[1.7] text-cream/85">
          {historyCopy.today}
        </p>
      </div>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {historyCopy.steps.map((step, index) => (
          <li
            key={step.period}
            className="reveal rounded-xl2 bg-green-deep-80 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow">
              {index + 1}. {step.period}
            </p>
            <h3 className="mt-3 text-base font-bold text-cream">{step.title}</h3>
            <p className="mt-2 text-sm leading-snug text-cream/75">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <StatGrid
          items={connecticutProgramStats}
          tone="deep"
          columns={4}
          aria-label="Connecticut school program figures"
        />
      </div>

      <div className="mt-8">
        <Button
          href={historyCopy.cta.href}
          size="lg"
          variant="secondary"
          className="border-cream/30 bg-transparent text-cream hover:border-cream/60 hover:bg-cream/10"
        >
          {historyCopy.cta.label}
        </Button>
      </div>
    </Section>
  );
}
