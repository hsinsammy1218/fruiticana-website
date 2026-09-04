/**
 * Customer comments from Fruiticana’s 2007 Connecticut sampling,
 * transcribed from the March 20 business deck (Consumer Testimonials)
 * and the matching Waterbury review graphic.
 *
 * These are dated customer comments for the About page — not present-tense
 * product claims. Medical/disease statements from the source (e.g. diabetes)
 * are not included. “100% fruit / no additives” wording stays inside quoted
 * customer speech and is not restated as site marketing.
 */

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  /** Display label for the date (kept vague where the source is). */
  dateLabel: string;
  /** Short pull-quote shown above the full comment when it differs. */
  headline?: string;
  /** Star count from the source graphic, when shown. */
  rating?: 5;
};

export const testimonialsIntro =
  "Customer comments from Fruiticana’s 2007 Connecticut sampling";

export const testimonialsNote =
  "These are customer comments from July 2007 in Waterbury, CT. They are not a current product label. Confirm formulation, allergens, and nutrition against today’s Fruiticana mix before school service.";

export const testimonials: Testimonial[] = [
  {
    headline: "Great Stuff.",
    quote: "Great Stuff.",
    author: "Frank",
    location: "Waterbury, CT",
    dateLabel: "July 19, 2007",
    rating: 5,
  },
  {
    headline: "Great. Simply Awesome.",
    quote: "Great. Simply Awesome.",
    author: "Latonja",
    location: "Waterbury, CT",
    dateLabel: "July 19, 2007",
    rating: 5,
  },
  {
    headline: "Like nothing I ever tasted before.",
    quote:
      "This product is like nothing I have ever tasted before. It’s made from 100% fruit no additives no sugar just 100% fruit. The taste is heavenly. My two year old won’t eat certain fruits but he loves Fruiticana. I have a niece that can’t eat milk products, she can eat Fruiticana all day and have no problems. I love this product. This is the next big health craze. Health is wealth!!!!",
    author: "Shawn",
    location: "Waterbury, CT",
    dateLabel: "July 18, 2007",
    rating: 5,
  },
  {
    headline: "Smooth in texture — no bits, chunks, or seeds.",
    quote:
      "I like Fruiticana, especially the smoothies, you can enjoy this product in a cup, cone, smoothie and coming soon popsicle. You can have one flavor or a combination of flavors. I have never tasted ice cream made from 100% fruit taste so good. The product is smooth in texture, no bits of fruit, no chunks or seeds. This was a genius idea to create a product made from 100% fruit. It’s Great Stuff!!!!",
    author: "Connecticut customer",
    location: "Waterbury, CT",
    dateLabel: "2007",
    rating: 5,
  },
  {
    headline: "Refreshing and light.",
    quote:
      "If you haven’t tried Fruiticana you are missing out on the healthiest treat you could ever give your body. 100% Lactose free, Cholesterol free and Fat free. This is the best tasting ice cream and it’s made from 100% fruit. The inventor of this product was surely blessed by god with this idea! This is a priceless health product people from 1-101 can consume this product. It is refreshing and light, when you eat this you don’t feel heavy and tired like ice cream made from milk products. I love it!!! Thank You Fruiticana for inventing this product!!!!",
    author: "Sampling customer",
    location: "Waterbury, CT",
    dateLabel: "2007",
    rating: 5,
  },
];
