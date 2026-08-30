/**
 * Ways Fruiticana has historically been served. These come from the business
 * PDF and describe historical / potential formats - NOT a confirmation that
 * every format is commercially available today.
 */

export type ProductFormat = {
  slug: string;
  name: string;
  description: string;
  /** Icon key handled by ProductFormatCard. */
  icon: "cup" | "cone" | "smoothie" | "pop" | "takehome";
  /** When true, this format is especially relevant to school/food-service. */
  institutional?: boolean;
};

export const formats: ProductFormat[] = [
  {
    slug: "institutional-cup",
    name: "Institutional cup (3 oz)",
    description:
      "The business record lists a 3 oz institutional serving used with moderate single-serve portions in school settings.",
    icon: "cup",
    institutional: true,
  },
  {
    slug: "cup",
    name: "Single-serve cup (4 oz)",
    description:
      "A 4 oz (1/2 cup) cup matching the historical laboratory Nutrition Facts serving size.",
    icon: "cup",
    institutional: true,
  },
  {
    slug: "cone",
    name: "Cone",
    description:
      "Offered during the historical Connecticut parlor pilot alongside school distribution.",
    icon: "cone",
  },
  {
    slug: "smoothie",
    name: "Smoothie",
    description: "Fruiticana blended into a drink during the historical parlor pilot.",
    icon: "smoothie",
  },
  {
    slug: "frozen-pop",
    name: "Frozen pop",
    description: "A portable frozen-fruit format recorded as a historical serving idea.",
    icon: "pop",
  },
  {
    slug: "take-home",
    name: "Take-home pint (16 oz)",
    description:
      "Larger containers from the historical parlor/wholesale lineup — not a current school-menu claim.",
    icon: "takehome",
  },
];

export const formatsNote =
  "Serving sizes and formats above are historical (approximately 2003–2011). Current institutional availability by format is to be confirmed.";
