/**
 * Institutional cup formats from the historical school program.
 * These describe historical / potential formats — NOT a confirmation that
 * every size is commercially available today.
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
    slug: "institutional-cup",
    name: "Institutional cup (3 oz)",
    amount: "3 oz",
    description:
      "The business record lists a 3 oz institutional serving used with moderate single-serve portions in school settings.",
    icon: "cup",
    institutional: true,
  },
  {
    slug: "cup",
    name: "Single-serve cup (4 oz)",
    amount: "4 oz",
    description:
      "A 4 oz (1/2 cup) cup matching the historical laboratory Nutrition Facts serving size.",
    icon: "cup",
    institutional: true,
  },
];

export const formatsNote =
  "Serving sizes above are historical (approximately 2003–2011). Current institutional availability by cup size is to be confirmed.";
