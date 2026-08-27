import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function HomeTestimonials() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Testimonials"
        title="From the original Connecticut pilot"
        description="Feedback shared by tasters during Fruiticana's 2007 Connecticut pilot."
      />
      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <li key={testimonial.author} className="reveal">
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
