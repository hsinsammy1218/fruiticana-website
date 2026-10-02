import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatGrid } from "@/components/ui/StatGrid";
import {
  HowItWorksPath,
  HowItWorksStepVisual,
} from "@/components/home/HowItWorksVisuals";
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
    <Section id={programHowCopy.id} tone="cream-100" className="scroll-mt-24">
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

      <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-yellow via-card to-grove px-4 py-10 ring-1 ring-green-deep/10 sm:px-8 sm:py-12 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,140,0,0.18),transparent_42%),radial-gradient(circle_at_80%_15%,rgba(193,0,24,0.14),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(47,82,184,0.12),transparent_45%)]"
        />

        <HowItWorksPath />

        <ol className="relative grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {programSteps.map((step, index) => (
            <li
              key={step.step}
              className="reveal relative flex h-full flex-col items-center text-center"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <HowItWorksStepVisual icon={step.icon} step={step.step} />
              <h3 className="mt-5 max-w-[16rem] text-lg font-bold text-green-deep sm:text-xl">
                {step.title}
              </h3>
              <p className="info-copy mt-3 max-w-[17rem] text-pretty sm:max-w-none">
                {step.body}
              </p>
              {index < programSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="mt-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-berry/15 text-berry xl:hidden"
                >
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
