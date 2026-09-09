import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { HistoricalTimeline } from "@/components/story/HistoricalTimeline";
import { TimelineForeground } from "@/components/story/TimelineForeground";
import { TrustDocumentCard } from "@/components/story/TrustDocumentCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { StatGrid } from "@/components/ui/StatGrid";
import { Vision } from "@/components/home/Vision";
import { founders } from "@/data/timeline";
import { storyPilotStats } from "@/data/facts";
import { testimonials, testimonialsIntro } from "@/data/testimonials";
import { documents } from "@/data/documents";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Fruiticana",
  description:
    "The Fruiticana vision — what it is, why it exists, and how it was developed for schools — plus its 2003–2005 Connecticut Team Nutrition Healthy Snack pilot, founding team, and school documentation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Fruiticana",
        item: `${site.url}/about`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="About Fruiticana"
          title="A new way to eat fruit — built for schools"
          description="Fruiticana began in 2003 as a fruit-based frozen dessert — a refreshing alternative to traditional dairy ice cream. The vision is the what, why, and how: fruit-first, so students have a treat they want to eat, served in school programs."
        />
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-[1.7] text-muted">
          <p>
            Originally introduced as{" "}
            <strong className="font-semibold text-green-deep">
              {site.legacyProductName}
            </strong>
            , the concept was developed by a multidisciplinary team — a chemist
            and several physicians — drawn together by a shared interest in
            fruit, nutrition, and flavor. The original myfruiticana.com banner
            proclaimed “{site.tagline}” — also remembered as “
            {site.legacyTagline}”
          </p>
        </div>
      </Section>

      <Vision showHeading={false} />

      <Section tone="cream-100">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
          Connecticut school programs
        </p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Fruiticana in Connecticut Schools
        </h2>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-12">
          <div className="max-w-2xl space-y-4 text-base leading-[1.7] text-muted">
            <p>
              From September 30, 2003 to September 30, 2005, Fruiticana
              participated in the Connecticut Team Nutrition Healthy Snack Pilot
              — a program funded by a USDA Team Nutrition grant to the
              Connecticut State Department of Education. The program facilitated
              student taste tests and samplings. Participating vendors had to
              meet the program’s nutrition standards and use moderate
              single-serving portions.
            </p>
            <p>
              After consumer testing, Fruiticana later went into broader
              production for local Connecticut schools. From 2005 to 2006 it
              also ran a localized parlor pilot (cups, cones, smoothies, and
              to-go pints) alongside school distribution.
            </p>
            <HistoricalNotice>
              These figures and programs describe Fruiticana’s 2003–2006
              Connecticut record and how the school vision was first put in front
              of students.
            </HistoricalNotice>
            <p>
              Teachers can use this chapter as a primary-source case study —
              grant dates, taste tests vs. purchases, and what a 2004 letter does
              and does not prove.{" "}
              <Link
                href="/learn#case-study"
                className="font-semibold text-green-600 hover:text-green-700"
              >
                Open the classroom case study
              </Link>
              .
            </p>
          </div>
          <StatGrid
            items={storyPilotStats}
            columns={2}
            aria-label="Connecticut pilot figures"
          />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="How it started"
          title="Product development timeline"
          description="The milestones below are drawn from Fruiticana's business record. Nothing is invented for years the document does not cover."
        />
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:gap-14">
          <HistoricalTimeline />
          <TimelineForeground />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The founding team"
          title="The people behind the idea"
          description="Fruiticana was established in 2003 by a five-person team — a chemist and four physicians — listed with the roles documented at the time."
        />
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => {
            const initials = founder.name
              .replace(/^Dr\.\s*/, "")
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("");
            return (
              <li
                key={founder.name}
                className="flex items-center gap-4 rounded-xl2 border border-line bg-cream-100 p-5"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green/15 font-sans text-base font-bold text-green-700"
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <div>
                  <p className="font-bold text-green-deep">{founder.name}</p>
                  <p className="text-sm text-muted">{founder.discipline}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="documentation" tone="white" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Supporting documentation"
          title="School documentation"
          description="Fruiticana's business record includes documents from roughly 2004-2008. Open any document to read it on its own page for school review. Original PDF downloads are not published."
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {documents.map((document) => (
            <li key={document.slug} className="reveal">
              <TrustDocumentCard document={document} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream-100">
        <SectionHeading
          align="center"
          eyebrow="Sampling notes"
          title="From the original Connecticut pilot"
          description={testimonialsIntro + ". These are taste comments from 2007."}
        />
        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <li key={testimonial.author + testimonial.quote} className="reveal">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        title="Interested in Fruiticana for Your School?"
        description="Request school information to discuss the Fruiticana vision, availability, institutional servings, and nutrition documentation for your school."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "Flavors & Nutrition", href: "/product" }}
      />
    </>
  );
}
