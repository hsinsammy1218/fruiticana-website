/**
 * Institutional cup format from the historical school program.
 * Describes a historical / potential format — NOT a confirmation of
 * current commercial availability.
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
      "A 4 oz (1/2 cup) cup matching the historical laboratory Nutrition Facts serving size — the institutional single-serve format for school food-service review.",
    icon: "cup",
    institutional: true,
  },
];

export const formatsNote =
  "Serving size above is historical (approximately 2003–2011). Current institutional availability is to be confirmed.";
