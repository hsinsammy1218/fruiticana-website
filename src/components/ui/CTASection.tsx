import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

type CTALink = { label: string; href: string };

type CTASectionProps = {
  title: string;
  description?: string;
  primary: CTALink;
  secondary?: CTALink;
};

export function CTASection({ title, description, primary, secondary }: CTASectionProps) {
  return (
    <Section tone="deep" className="text-center">
      <div className="reveal mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-on-deep sm:text-4xl lg:text-5xl">{title}</h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-[1.75] text-on-deep/95">{description}</p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={primary.href}
            size="lg"
            className="w-full bg-berry text-on-deep hover:bg-berry-deep sm:w-auto"
          >
            {primary.label}
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              size="lg"
              variant="secondary"
              className="w-full border-on-deep/35 bg-transparent text-on-deep hover:border-on-deep/70 hover:bg-on-deep/10 sm:w-auto"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
