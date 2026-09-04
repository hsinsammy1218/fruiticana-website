import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { valueIcons } from "@/components/ui/icons";
import { visionIntro, visionPillars } from "@/data/vision";

type VisionProps = {
  /** When false, the section heading is omitted so a page H1 can lead. */
  showHeading?: boolean;
  cta?: { label: string; href: string };
};

export function Vision({ showHeading = true, cta }: VisionProps) {
  return (
    <Section
      id="vision"
      tone="white"
      className="scroll-mt-24"
      aria-labelledby={showHeading ? "vision-heading" : undefined}
      aria-label={showHeading ? undefined : "The Fruiticana vision"}
    >
      {showHeading ? (
        <SectionHeading
          id="vision-heading"
          eyebrow={visionIntro.eyebrow}
          title={visionIntro.title}
          description={visionIntro.description}
        />
      ) : (
        <p className="max-w-3xl text-base leading-[1.75] text-muted sm:text-lg">
          {visionIntro.description}
        </p>
      )}

      <ol className="mt-10 grid gap-5 lg:grid-cols-3">
        {visionPillars.map((pillar) => {
          const Icon = valueIcons[pillar.icon];
          return (
            <li
              key={pillar.key}
              className="reveal flex h-full flex-col rounded-xl2 border border-line bg-cream-100 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green/12 text-green-600">
                    <Icon width={18} height={18} />
                  </span>
                  {pillar.label}
                </span>
                <span
                  className="font-sans text-2xl font-extrabold tabular-nums leading-none text-green-600"
                  aria-hidden="true"
                >
                  {pillar.step}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-green-deep sm:text-[1.35rem]">
                {pillar.title}
              </h3>
              <p className="info-copy mt-3 flex-1">{pillar.body}</p>
              <p className="mt-6 border-t border-line pt-5">
                <span className="block font-sans text-3xl font-extrabold tabular-nums tracking-tight text-green-deep">
                  {pillar.figure}
                </span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-green-600">
                  {pillar.figureLabel}
                </span>
              </p>
            </li>
          );
        })}
      </ol>

      {cta ? (
        <div className="mt-8">
          <Button href={cta.href} size="lg">
            {cta.label}
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
