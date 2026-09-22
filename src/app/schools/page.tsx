import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";
import {
  schoolAudiences,
  schoolsIntro,
  whySchoolsPageCopy,
} from "@/data/schools";
import { startYoungCopy } from "@/data/home";
import { faqItems } from "@/data/faq";
import { schoolOperations } from "@/data/operations";
import { equipmentCopy, partnershipCopy } from "@/data/program";
import { ProgramNumbers } from "@/components/home/ProgramNumbers";
import { ProgramHowItWorks } from "@/components/home/ProgramHowItWorks";
import { ValueExchange } from "@/components/home/ValueExchange";
import { FaqSection } from "@/components/home/FaqSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Fruiticana wants to give students an exciting new way to eat fruit. Under the proposed school model, Fruiticana provides two machines, maintains them, and stays involved with the school.",
  alternates: { canonical: "/schools" },
};

export default function SchoolsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "For Schools",
        item: `${site.url}/schools`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      <Section>
        <SectionHeading
          as="h1"
          title={schoolsIntro.title}
          description={schoolsIntro.description}
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {schoolAudiences.map((audience) => (
            <li
              key={audience}
              className="rounded-pill border border-line bg-white px-3 py-1.5 text-sm text-green-deep"
            >
              {audience}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream-100">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-12 xl:gap-16">
          <div>
            <SectionHeading
              className="max-w-none [&_p:last-child]:max-w-none"
              title={startYoungCopy.title}
              description={startYoungCopy.description}
            />
            <blockquote className="reveal mt-8 rounded-xl2 border border-line bg-white px-6 py-6 sm:mt-10 sm:px-8 sm:py-8">
              <p className="text-xl font-semibold leading-snug text-green-deep sm:text-2xl">
                {startYoungCopy.hope}
              </p>
            </blockquote>
          </div>
          <div className="reveal flex flex-col justify-center gap-4 lg:border-l lg:border-line lg:pl-10 xl:pl-12">
            <h2 className="text-2xl font-extrabold text-green-deep sm:text-3xl">
              {whySchoolsPageCopy.title}
            </h2>
            <p className="info-copy">{whySchoolsPageCopy.description}</p>
          </div>
        </div>
      </Section>

      <ProgramNumbers
        heading="Two machines. Four flavors."
        description="Fruiticana provides and maintains the equipment and stays involved. The school does not purchase the machines."
      />

      <Section>
        <SectionHeading title={equipmentCopy.title} description={equipmentCopy.body} />
        <p className="info-copy mt-6 max-w-3xl">{partnershipCopy.body}</p>
      </Section>

      <ProgramHowItWorks variant="schools" showNumbers={false} />

      <ValueExchange />

      <FaqSection />

      <Section>
        <SectionHeading
          title="Questions still being documented"
          description="Fruiticana will not invent operational details. These answers are still being written for a current school launch."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {schoolOperations
            .filter((item) => item.status === "to-confirm")
            .map((item) => (
              <li
                key={item.question}
                className="rounded-xl2 border border-line bg-white p-5"
              >
                <p className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-green-deep">{item.question}</span>
                  <span className="rounded-pill bg-cream-200 px-2.5 py-0.5 text-xs font-semibold text-green-deep">
                    Still being documented
                  </span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
              </li>
            ))}
        </ul>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-3">
          <FeatureCard
            icon="school"
            figure="2003–05"
            title="Connecticut school chapter"
            description="Team Nutrition Healthy Snack pilot (2003–2005) and later distribution to local Connecticut schools after consumer testing. Historical participation, not a current endorsement."
          />
          <div className="rounded-xl2 border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-green-deep">
              Nutrition & documentation
            </h2>
            <p className="info-copy mt-2">
              Nutrition panels, serving sizes, ingredients, and supporting
              letters are on the Fruiticana product page and Documentation.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/product">Fruiticana</Button>
              <Button href="/resources" variant="secondary">
                View documentation
              </Button>
            </div>
          </div>
          <div className="rounded-xl2 border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-green-deep">
              Classroom resource
            </h2>
            <p className="info-copy mt-2">
              Teachers can use a separate free resource on fruit science,
              Nutrition Facts literacy, and the Connecticut snack-pilot case
              study. It is not a food-service sales page.
            </p>
            <div className="mt-5">
              <Button href="/learn" variant="secondary">
                Open the classroom resource
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Let's Bring Fruiticana to Your Students."
        description="Share your school details, program interest, and any nutrition questions. Prefer email or phone for follow-up — the on-site form does not send messages yet."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{
          label: "Learn everything about Fruiticana",
          href: "/#learn-everything",
        }}
      />
    </>
  );
}
