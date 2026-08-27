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
};

export const formats: ProductFormat[] = [
  {
    slug: "cup",
    name: "Cup",
    description: "A simple, single-serve scoop.",
    icon: "cup",
  },
  {
    slug: "cone",
    name: "Cone",
    description: "The classic frozen-dessert experience.",
    icon: "cone",
  },
  {
    slug: "smoothie",
    name: "Smoothie",
    description: "Fruiticana blended into a refreshing drink.",
    icon: "smoothie",
  },
  {
    slug: "frozen-pop",
    name: "Frozen Pop",
    description: "A portable frozen fruit treat.",
    icon: "pop",
  },
  {
    slug: "take-home",
    name: "Take Home",
    description: "Larger containers to enjoy at home.",
    icon: "takehome",
  },
];

export const formatsNote =
  "These formats reflect how Fruiticana has been served historically. Current availability by format is to be confirmed.";
