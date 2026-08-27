/**
 * Historical testimonials from Fruiticana's original Connecticut pilot
 * (Waterbury, CT, 2007), transcribed from the business PDF.
 *
 * These are presented ONLY as historical pilot feedback and are always labeled
 * as such. Excerpts are limited to taste/texture/enjoyment; medical or
 * diabetes-related statements from the source are intentionally excluded.
 */

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  /** Display label for the date (kept vague where the source is). */
  dateLabel: string;
};

export const testimonialsIntro =
  "Testimonials from Fruiticana's original Connecticut pilot";

export const testimonials: Testimonial[] = [
  {
    quote: "Great stuff.",
    author: "Frank",
    location: "Waterbury, CT",
    dateLabel: "July 2007",
  },
  {
    quote: "Great. Simply awesome.",
    author: "Latonja",
    location: "Waterbury, CT",
    dateLabel: "July 2007",
  },
  {
    quote: "Like nothing I ever tasted before.",
    author: "Shawn",
    location: "Waterbury, CT",
    dateLabel: "July 2007",
  },
  {
    quote:
      "The product is smooth in texture - no bits of fruit, no chunks or seeds. You can enjoy it in a cup, cone, or smoothie.",
    author: "Pilot customer",
    location: "Waterbury, CT",
    dateLabel: "2007",
  },
];
