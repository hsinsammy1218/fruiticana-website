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
      <div className="reveal mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold text-cream sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-xl text-lg leading-[1.75] text-cream/90">{description}</p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={primary.href}
            size="lg"
            className="w-full bg-cream text-green-deep hover:bg-cream-100 sm:w-auto"
          >
            {primary.label}
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              size="lg"
              variant="secondary"
              className="w-full border-cream/30 bg-transparent text-cream hover:border-cream/60 hover:bg-cream/10 sm:w-auto"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
