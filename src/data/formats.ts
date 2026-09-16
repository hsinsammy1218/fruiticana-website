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
    name: "Historical laboratory serving (4 oz)",
    amount: "4 oz",
    description:
      "A 4 oz (1/2 cup) cup matching the 2008 Nutrition Facts serving size. This is the historical institutional serving on record. Whether it applies to the proposed machine program still needs to be confirmed.",
    icon: "cup",
    institutional: true,
  },
];
