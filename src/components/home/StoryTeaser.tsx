import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function StoryTeaser() {
  return (
    <Section tone="cream-100">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal">
          <SectionHeading
            eyebrow="Our story"
            title="A different kind of frozen dessert"
            description="Fruiticana was developed beginning in 2003 by a multidisciplinary team - a chemist and physicians - drawn to one idea: create a frozen dessert centered around fruit, texture, and flavor."
          />
          <div className="mt-7">
            <Button href="/story">Read our story</Button>
          </div>
        </div>

        <div className="reveal relative overflow-hidden rounded-xl2 border border-line bg-white p-8">
          <span className="font-display text-6xl font-extrabold text-green-deep">2003</span>
          <p className="mt-3 text-lg font-medium leading-relaxed text-green-deep">
            &ldquo;Developed from a simple idea: a frozen dessert with fruit at
            the center.&rdquo;
          </p>
          <p className="mt-4 text-sm text-muted">
            From research and development to a localized Connecticut pilot.
          </p>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green/10"
          />
        </div>
      </div>
    </Section>
  );
}
