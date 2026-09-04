import { cn } from "@/lib/cn";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

function StarRating({ count }: { count: 5 }) {
  return (
    <p className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="fill-yellow text-yellow"
        >
          <path d="M12 3.2 14.6 8.8l6.2.7-4.6 4.2 1.3 6.1L12 16.8 6.5 19.8l1.3-6.1L3.2 9.5l6.2-.7L12 3.2Z" />
        </svg>
      ))}
    </p>
  );
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const showHeadline =
    Boolean(testimonial.headline) && testimonial.headline !== testimonial.quote;

  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-xl2 border border-line bg-white p-6",
        className,
      )}
    >
      {testimonial.rating ? <StarRating count={testimonial.rating} /> : null}
      {showHeadline ? (
        <p className="mt-3 font-display text-xl font-bold leading-snug text-green-deep">
          “{testimonial.headline}”
        </p>
      ) : (
        <span
          className="font-display text-4xl leading-none text-green/50"
          aria-hidden="true"
        >
          &ldquo;
        </span>
      )}
      <blockquote className="mt-3 flex-1 text-base font-medium leading-relaxed text-green-deep sm:text-lg">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span className="font-semibold text-green-deep">{testimonial.author}</span>
        {" — "}
        {testimonial.location} &middot; {testimonial.dateLabel}
      </figcaption>
    </figure>
  );
}
