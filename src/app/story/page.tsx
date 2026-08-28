import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { HistoricalTimeline } from "@/components/story/HistoricalTimeline";
import { TrustDocumentCard } from "@/components/story/TrustDocumentCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { founders } from "@/data/timeline";
import { testimonials, testimonialsIntro } from "@/data/testimonials";
import { documents } from "@/data/documents";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Fruiticana began: a fruit-based frozen dessert developed from 2003, its founding team, and its historical Connecticut pilot - told with clear historical context.",
  alternates: { canonical: "/story" },
};

const pilotStats = [
  { label: "Consumers sampled", value: "~30,000" },
  { label: "Pilot period", value: "2005-06" },
  { label: "Pilot sales", value: "~$1M" },
  { label: "Fruit flavors", value: "12" },
];

export default function StoryPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Our story"
          title="A frozen dessert built around fruit"
          description="Fruiticana began with a simple idea: create a smooth, satisfying frozen dessert with real fruit at the center - a refreshing alternative to traditional dairy ice cream."
        />
        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            Originally introduced as{" "}
            <strong className="font-semibold text-green-deep">
              {site.legacyProductName}
            </strong>
            , the concept was developed beginning in 2003 by a multidisciplinary
            team - a chemist and several physicians - drawn together by a shared
            interest in fruit, nutrition, and flavor.
          </p>
        </div>
      </Section>

      <Section tone="cream-100">
        <SectionHeading
          eyebrow="How it started"
          title="A timeline"
          description="The milestones below are drawn from Fruiticana's historical business record."
        />
        <div className="mt-10">
          <HistoricalTimeline />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="The founding team"
          title="The people behind the idea"
          description="Fruiticana was established in 2003 by the following team, listed with the roles documented at the time."
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
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green/15 font-display text-base font-bold text-green-700"
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

      <Section tone="cream-100">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
          Historical Fruiticana pilot program
        </p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Proven in Connecticut
        </h2>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-12">
          <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
            <p>
              From 2005 to 2006, Fruiticana ran a localized pilot in Connecticut.
              It was sold through an independently owned and operated parlor and
              distributed to local schools, offered as cups, cones, smoothies,
              and to-go pints.
            </p>
            <p>
              Earlier, from September 2003 to September 2005, Fruiticana was
              included in the Connecticut Team Nutrition Healthy Snack Pilot - a
              program funded by a USDA Team Nutrition grant to the Connecticut
              State Department of Education, which facilitated student taste tests
              and samplings.
            </p>
            <HistoricalNotice>
              These figures and programs describe Fruiticana&rsquo;s 2003-2006
              Connecticut pilot and are shared as historical background. They are
              not current results, and past participation does not imply a
              current endorsement.
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
          <dl className="grid grid-cols-2 gap-4">
            {pilotStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl2 border border-line bg-white p-5"
              >
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-green-deep">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="From the original Connecticut pilot"
          description={testimonialsIntro + "."}
        />
        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <li key={testimonial.author + testimonial.quote} className="reveal">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Receipts, not badges"
          title="Our history & documentation"
          description="Fruiticana's business record includes several documents from roughly 2004-2008. We share them as historical records - not as current certifications or endorsements."
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {documents.map((document) => (
            <li key={document.slug} className="reveal">
              <TrustDocumentCard document={document} />
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        title="The next chapter"
        description="Fruiticana's fruit-first idea is being reintroduced for a new generation. Explore the flavors, or get in touch to be part of what's next."
        primary={{ label: "Explore the Flavors", href: "/flavors" }}
        secondary={{ label: "Classroom resource", href: "/learn" }}
      />
    </>
  );
}
