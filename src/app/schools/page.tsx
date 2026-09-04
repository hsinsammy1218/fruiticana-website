import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";
import {
  schoolAudiences,
  schoolAvailabilityNote,
  schoolFitPoints,
  schoolUses,
  schoolsIntro,
} from "@/data/schools";
import { schoolGlanceStats } from "@/data/facts";
import { StatGrid } from "@/components/ui/StatGrid";
import { formats } from "@/data/formats";
import { featuredFlavors } from "@/data/flavors";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "How Fruiticana, a fruit-based frozen dessert, could fit school cafeterias, healthy snack programs, private schools, events, and food-service distribution — with historical Connecticut program context.",
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

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <Section>
        <SectionHeading
          as="h1"
          eyebrow={schoolsIntro.eyebrow}
          title={schoolsIntro.title}
          description={schoolsIntro.description}
        />
        <HistoricalNotice className="mt-6 max-w-3xl">
          {schoolAvailabilityNote}
        </HistoricalNotice>
        <StatGrid
          className="mt-10"
          items={schoolGlanceStats}
          aria-label="School program figures"
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
        <SectionHeading
          title="Where Fruiticana could fit"
          description="Use cases a food-service director or administrator typically evaluates. These are program conversations, not a current menu claim."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {schoolUses.map((use) => (
            <li
              key={use.slug}
              id={use.slug}
              className="reveal rounded-xl2 border border-line bg-white p-6"
            >
              <p className="font-sans text-3xl font-extrabold tabular-nums tracking-tight text-green-deep">
                {use.figure}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-green-600">
                {use.figureLabel}
              </p>
              <h2 className="mt-3 text-lg font-bold text-green-deep">{use.title}</h2>
              <p className="info-copy mt-2">{use.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHeading
          title="Why schools reviewed it historically"
          description="The Connecticut record emphasizes fruit-based composition, moderate portions, and snack-program nutrition standards — not parlor marketing."
        />
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {schoolFitPoints.map((point) => (
            <li key={point.title} className="reveal">
              <div className="h-full rounded-xl2 border border-line bg-cream-100 p-6">
                <p className="font-sans text-3xl font-extrabold tabular-nums tracking-tight text-green-deep">
                  {point.figure}
                </p>
                <h3 className="mt-3 text-lg font-bold text-green-deep">{point.title}</h3>
                <p className="info-copy mt-2">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream-100">
        <SectionHeading
          title="Serving formats for school review"
          description="The historical school program used institutional single-serve cups — a 4 oz (1/2 cup) size matching the laboratory Nutrition Facts panels."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-1 lg:max-w-md">
          {formats.map((format) => (
            <li key={format.slug}>
              <ProductFormatCard format={format} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          title="Flavor options"
          description="Six of the original twelve flavors. Every flavor has a shareable product sheet and a historical 2008 nutrition panel."
        />
        <FlavorGrid className="mt-10" flavors={featuredFlavors} />
        <div className="mt-8">
          <Button href="/product#flavors" variant="secondary">
            View all 12 flavors
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <FeatureCard
            icon="school"
            figure="2003–05"
            title="Connecticut school chapter"
            description="Team Nutrition Healthy Snack pilot (2003–2005) and later distribution to local Connecticut schools after consumer testing."
          />
          <div className="rounded-xl2 border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-green-deep">
              Nutrition & documentation
            </h2>
            <p className="info-copy mt-2">
              Nutrition panels, serving sizes, historical ingredients, and
              supporting letters are on Flavors & Nutrition and Resources.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/product">Flavors & Nutrition</Button>
              <Button href="/resources" variant="secondary">
                View resources
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
        title="Bring Fruiticana to Your School"
        description="Share your school or organization details, program interest, and any nutrition questions. Inquiry delivery is not connected yet; the form is ready for when a verified inbox is in place."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{
          label: "View nutrition details",
          href: "/product#nutrition",
        }}
      />
    </>
  );
}
