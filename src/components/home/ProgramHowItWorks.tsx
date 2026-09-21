import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatGrid } from "@/components/ui/StatGrid";
import { valueIcons } from "@/components/ui/icons";
import {
  programHowCopy,
  programNumbers,
  programSteps,
  proposedModelNotice,
} from "@/data/program";

type ProgramHowItWorksProps = {
  /** Homepage uses a slightly different title than For Schools. */
  variant?: "home" | "schools";
  showNumbers?: boolean;
};

export function ProgramHowItWorks({
  variant = "home",
  showNumbers = true,
}: ProgramHowItWorksProps) {
  const title =
    variant === "schools" ? programHowCopy.schoolsTitle : programHowCopy.homeTitle;

  return (
    <Section id={programHowCopy.id} tone="white" className="scroll-mt-24">
      <SectionHeading
        eyebrow={programHowCopy.eyebrow}
        title={title}
        description={programHowCopy.description}
      />
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
        {proposedModelNotice}
      </p>
      {showNumbers ? (
        <>
          <p className="mt-8 max-w-3xl text-base font-semibold leading-relaxed text-green-deep">
            {programHowCopy.numbersIntro}
          </p>
          <StatGrid
            className="mt-6"
            items={programNumbers}
            columns={2}
            aria-label="Proposed school program figures"
          />
        </>
      ) : null}

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {programSteps.map((step, index) => {
          const Icon = valueIcons[step.icon];
          return (
            <li key={step.step} className="reveal relative flex h-full flex-col">
              {index < programSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-2 top-10 hidden text-lg font-bold text-green/50 xl:block"
                >
                  →
                </span>
              ) : null}
              <div className="flex h-full flex-col rounded-xl2 border border-line bg-cream-100 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green/12 text-green-600">
                    <Icon width={18} height={18} />
                  </span>
                  <span className="font-sans text-2xl font-extrabold tabular-nums leading-none text-green-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-green-deep">{step.title}</h3>
                <p className="info-copy mt-3 flex-1">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
