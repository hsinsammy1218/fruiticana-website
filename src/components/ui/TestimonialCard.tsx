import { cn } from "@/lib/cn";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-xl2 border border-line bg-white p-6",
        className,
      )}
    >
      <span
        className="font-display text-4xl leading-none text-green/50"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-lg font-medium leading-relaxed text-green-deep">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span className="font-semibold text-green-deep">{testimonial.author}</span>
        {" - "}
        {testimonial.location} &middot; {testimonial.dateLabel}
      </figcaption>
    </figure>
  );
}
