/**
 * Institutional cup format for school service.
 */

export type ProductFormat = {
  slug: string;
  name: string;
  description: string;
  /** Large scannable size when the format has a documented portion. */
  amount?: string;
  /** Icon key handled by ProductFormatCard. */
  icon: "cup";
  /** When true, this format is especially relevant to school/food-service. */
  institutional?: boolean;
};

export const formats: ProductFormat[] = [
  {
    slug: "cup",
    name: "Single-serve cup (4 oz)",
    amount: "4 oz",
    description:
      "A 4 oz (1/2 cup) cup matching the laboratory Nutrition Facts serving size — a simple single-serve format for in-house school kitchen service.",
    icon: "cup",
    institutional: true,
  },
];

export const formatsNote =
  "Confirm institutional pack sizes and availability with Fruiticana before menu planning.";
