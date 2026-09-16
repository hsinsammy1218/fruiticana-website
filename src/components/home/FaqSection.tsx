import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { faqIntro, faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <Section id="faq" className="scroll-mt-24">
      <SectionHeading
        eyebrow={faqIntro.eyebrow}
        title={faqIntro.title}
        description={faqIntro.description}
      />
      <div className="mt-10 space-y-3">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl2 border border-line bg-white px-5 py-2 open:bg-cream-100 sm:px-6"
          >
            <summary className="cursor-pointer list-none py-3 font-semibold text-green-deep marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-lg leading-none text-green-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="pb-4">
              <p className="info-copy max-w-3xl">{item.answer}</p>
              {item.href ? (
                <div className="mt-3">
                  <Button href={item.href.url} variant="ghost">
                    {item.href.label}
                  </Button>
                </div>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
