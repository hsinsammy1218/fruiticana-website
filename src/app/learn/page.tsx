import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { FruitLessonCard } from "@/components/learn/FruitLessonCard";
import { BookIcon, FlaskIcon, LabelIcon, SchoolIcon, ChatIcon } from "@/components/ui/icons";
import { site } from "@/data/site";
import { learnGlanceStats } from "@/data/facts";
import { StatGrid } from "@/components/ui/StatGrid";
import {
  caseStudy,
  classroomActivities,
  classroomGuidelines,
  discussionPrompts,
  educatorGoals,
  fruitLessons,
  labelLiteracyNotes,
  labelTerms,
  learnAudience,
  learnIntro,
  learnModules,
  scienceCards,
} from "@/data/learn";

const learnDescription =
  "A free Fruiticana classroom resource: twelve fruits to study, frozen-dessert science, Nutrition Facts literacy, and a historical Connecticut school snack-pilot case study.";

export const metadata: Metadata = {
  title: "Learn — classroom resource for schools",
  description: learnDescription,
  alternates: { canonical: "/learn" },
  keywords: [
    "fruit classroom resource",
    "nutrition facts lesson",
    "school snack program history",
    "fruit science for students",
    "Connecticut Team Nutrition",
  ],
};

const moduleIcons = {
  fruits: BookIcon,
  science: FlaskIcon,
  labels: LabelIcon,
  "case-study": SchoolIcon,
  classroom: ChatIcon,
} as const;

export default function LearnPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: `${site.url}/learn`,
      },
    ],
  };

  const resourceLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Fruiticana classroom resource",
    description: learnDescription,
    url: `${site.url}/learn`,
    isAccessibleForFree: true,
    learningResourceType: "lesson overview",
    educationalLevel: ["Elementary School", "Middle School", "High School"],
    inLanguage: "en",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "teacher",
    },
    about: [
      "fruit science",
      "nutrition label literacy",
      "school snack programs",
      "Connecticut Team Nutrition",
    ],
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={resourceLd} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow={learnIntro.eyebrow}
          title={learnIntro.title}
          description={learnIntro.description}
          className="max-w-3xl"
        />
        <HistoricalNotice className="mt-6 max-w-3xl">
          Fruiticana was included in a Connecticut school snack tasting in
          2003–2005. That is documented history. This page does{" "}
          <strong>not</strong> claim Fruiticana is on school menus today, and it
          is not a USDA, state, or district endorsement.
        </HistoricalNotice>
        <StatGrid
          className="mt-10"
          items={learnGlanceStats}
          aria-label="Classroom resource figures"
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/learn#fruits">Start with the twelve fruits</Button>
          <Button href="/learn#classroom" variant="secondary">
            Jump to activities
          </Button>
        </div>
      </Section>

      <Section tone="cream-100" aria-labelledby="who-its-for">
        <SectionHeading
          id="who-its-for"
          eyebrow="Who it is for"
          title="Elementary through high school"
          description="Pick the layer that fits your class. Every section stays free of medical claims and current-sales language."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {learnAudience.map((item) => (
            <li
              key={item.title}
              className="reveal rounded-xl2 border border-line bg-white p-6"
            >
              <h3 className="text-lg font-bold text-green-deep">{item.title}</h3>
              <p className="info-copy mt-2">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="on-this-page">
        <SectionHeading
          id="on-this-page"
          eyebrow="On this page"
          title="Five teaching modules"
          description="Use the whole page as a mini-unit, or assign one module."
        />
        <nav aria-label="Learn page sections" className="mt-10">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {learnModules.map((module, index) => {
              const Icon = moduleIcons[module.id];
              return (
                <li key={module.id} className="reveal">
                  <a
                    href={`#${module.id}`}
                    className="flex h-full flex-col rounded-xl2 border border-line bg-white p-5 transition-shadow hover:shadow-soft"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green/12 text-green-600">
                      <Icon width={22} height={22} />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-green-600">
                      Module {index + 1}
                    </p>
                    <p className="mt-1 text-lg font-bold text-green-deep">
                      {module.title}
                    </p>
                    <p className="info-copy mt-1.5">
                      {module.summary}
                    </p>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </Section>

      <Section id="fruits" tone="white" aria-labelledby="fruits-heading">
        <SectionHeading
          id="fruits-heading"
          eyebrow="Module 1"
          title="Twelve fruits to know"
          description="Each original Fruiticana flavor is inspired by a real fruit (Lemonade starts with lemon; Raisin is a dried grape). These cards are botany and geography — not nutrition claims."
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {fruitLessons.map((lesson) => (
            <li key={lesson.slug} className="reveal">
              <FruitLessonCard lesson={lesson} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="science" tone="cream-100" aria-labelledby="science-heading">
        <SectionHeading
          id="science-heading"
          eyebrow="Module 2"
          title="Frozen dessert science"
          description="A scoop is a chance to talk about ice, air, sugar, and texture. These notes are general food science, not a formula for Fruiticana today."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {scienceCards.map((card) => (
            <li
              key={card.title}
              className="reveal rounded-xl2 border border-line bg-white p-6"
            >
              <h3 className="text-lg font-bold text-green-deep">{card.title}</h3>
              <p className="info-copy mt-2">{card.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="labels" aria-labelledby="labels-heading">
        <SectionHeading
          id="labels-heading"
          eyebrow="Module 3"
          title="How to read a Nutrition Facts panel"
          description="Use Fruiticana's 2008 laboratory panels as dated examples. The skill is reading a label — not deciding that a dessert is 'healthy.'"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <dl className="space-y-4">
            {labelTerms.map((item) => (
              <div
                key={item.term}
                className="rounded-xl2 border border-line bg-white p-5"
              >
                <dt className="font-bold text-green-deep">{item.term}</dt>
                <dd className="info-copy mt-1.5">
                  {item.meaning}
                </dd>
              </div>
            ))}
          </dl>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-deep">
              Habits of a careful reader
            </h3>
            <ul className="space-y-3">
              {labelLiteracyNotes.map((note) => (
                <li
                  key={note}
                  className="info-copy rounded-xl2 border border-line bg-cream-100 p-4"
                >
                  {note}
                </li>
              ))}
            </ul>
            <Button href="/product#nutrition">Open the historical nutrition panels</Button>
          </div>
        </div>
      </Section>

      <Section id="case-study" tone="cream-100" aria-labelledby="case-study-heading">
        <SectionHeading
          id="case-study-heading"
          eyebrow="Module 4"
          title={caseStudy.title}
          description={`${caseStudy.period}. A documented school tasting — shared so students can practice reading history, not so anyone assumes it is happening now.`}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div className="info-copy space-y-4">
            <p>{caseStudy.summary}</p>
            <HistoricalNotice>
              These details come from Fruiticana&rsquo;s 2003–2011 business
              record, including a December 2004 Connecticut State Department of
              Education letter. They describe a grant-funded pilot. They are not
              a current government endorsement.
            </HistoricalNotice>
            <p>
              After the grant window, Fruiticana also ran a localized 2005–2006
              Connecticut pilot that included distribution to local schools. Read
              the timeline on{" "}
              <Link href="/story" className="font-semibold text-green-600 hover:text-green-700">
                Our Story
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-deep">
              What careful students notice
            </h3>
            <ul className="mt-4 space-y-3">
              {caseStudy.whatStudentsShouldNotice.map((item) => (
                <li
                  key={item}
                  className="info-copy rounded-xl2 border border-line bg-white p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-xl2 border border-line bg-white p-6">
          <h3 className="text-lg font-bold text-green-deep">
            Source questions for the 2004 letter
          </h3>
          <ol className="info-copy mt-4 list-decimal space-y-2 pl-5">
            {caseStudy.sourceQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="classroom" aria-labelledby="classroom-heading">
        <SectionHeading
          id="classroom-heading"
          eyebrow="Module 5"
          title="Discussion questions and activities"
          description="All activities work with grocery-store fruit, paper, and this website. Follow your school's allergy policy."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {discussionPrompts.map((prompt) => (
            <article
              key={prompt.band}
              className="reveal flex h-full flex-col rounded-xl2 border border-line bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                {prompt.label}
              </p>
              <h3 className="mt-2 text-lg font-bold text-green-deep">
                {prompt.audience}
              </h3>
              <ol className="info-copy mt-4 flex-1 list-decimal space-y-2 pl-5">
                {prompt.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-2xl font-extrabold text-green-deep">
          Ready-to-run activities
        </h3>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {classroomActivities.map((activity) => (
            <li
              key={activity.title}
              className="reveal rounded-xl2 border border-line bg-cream-100 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-bold text-green-deep">{activity.title}</h4>
                <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                  {activity.duration}
                </p>
              </div>
              <p className="info-copy mt-2">
                <span className="font-semibold text-green-deep">Materials: </span>
                {activity.materials}
              </p>
              <ol className="info-copy mt-3 list-decimal space-y-1.5 pl-5">
                {activity.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="info-copy mt-3">
                <span className="font-semibold text-green-deep">Why it works: </span>
                {activity.why}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" aria-labelledby="educators-heading">
        <SectionHeading
          id="educators-heading"
          eyebrow="For educators"
          title="What this page is designed to teach"
          description="Loose learning goals you can map to your own standards. We do not claim official NGSS, USDA, or state curriculum alignment."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {educatorGoals.map((goal) => (
            <li
              key={goal.title}
              className="rounded-xl2 border border-line bg-cream-100 p-6"
            >
              <h3 className="text-lg font-bold text-green-deep">{goal.title}</h3>
              <p className="info-copy mt-2">{goal.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-3">
          {classroomGuidelines.map((rule) => (
            <HistoricalNotice key={rule} label="Classroom note">
              {rule}
            </HistoricalNotice>
          ))}
        </div>
      </Section>

      <CTASection
        title="Using this with a class or a school food program?"
        description="Teachers can keep using this classroom resource. Food-service and administrative questions belong on the school inquiry form."
        primary={{
          label: "Contact for schools",
          href: "/contact?interest=Healthy%20Snack%20Program",
        }}
        secondary={{ label: "Read the historical story", href: "/story" }}
      />
    </>
  );
}
