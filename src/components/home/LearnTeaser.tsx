import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { learnModules } from "@/data/learn";

export function LearnTeaser() {
  return (
    <Section>
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="reveal">
          <SectionHeading
            eyebrow="For schools"
            title="Built for classrooms to learn from"
            description="Fruiticana's history includes a Connecticut school snack tasting. This site turns that chapter — plus fruit science and Nutrition Facts literacy — into a free resource teachers can use without buying anything."
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/learn">Open the classroom resource</Button>
            <Button href="/contact?inquiry=Schools%20%26%20Institutions" variant="secondary">
              School inquiry
            </Button>
          </div>
        </div>

        <ul className="reveal grid gap-3 sm:grid-cols-2">
          {learnModules.slice(0, 4).map((module) => (
            <li
              key={module.id}
              className="rounded-xl2 border border-line bg-white p-4"
            >
              <p className="font-bold text-green-deep">{module.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {module.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
