import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Light credibility band. References the documented school record and 2008
 * nutrition analyses at a high level and routes school food-service staff to
 * the full material on Resources and Flavors & Nutrition — instead of putting
 * regulatory document cards on the homepage.
 */
export function SchoolCredibility() {
  return (
    <Section tone="cream-100">
      <div className="reveal grid items-center gap-8 rounded-xl2 border border-line bg-white p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <SectionHeading
          eyebrow="Credibility & documentation"
          title="Backed by a documented school record"
          description="Fruiticana's fit for schools is grounded in real history: a 2003–2005 Connecticut Team Nutrition Healthy Snack pilot, later service in local Connecticut schools, and independent 2008 laboratory Nutrition Facts panels for all 12 flavors. The detailed records are on Resources for school food-service review."
        />
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button href="/resources" size="lg">
            View Documentation
          </Button>
          <Button href="/product#nutrition" size="lg" variant="secondary">
            View Nutrition Information
          </Button>
        </div>
      </div>
    </Section>
  );
}
