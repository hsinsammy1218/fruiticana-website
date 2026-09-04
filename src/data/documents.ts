/**
 * School documentation referenced in the business record.
 *
 * `image` points to on-site document page images for school review.
 * Original PDF downloads stay unpublished (`file` null / `canDownload` false)
 * until rights-cleared source scans are provided.
 */

export type ResourceCategory =
  | "product-information"
  | "nutrition"
  | "school-program"
  | "credentials";

export type HistoricalDocument = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  /** Plain-language clarification of what the document is and is not. */
  clarification: string;
  category: ResourceCategory;
  /** Public path to an on-site document page image, when one exists. */
  image: string | null;
  imageAlt: string;
  /** Public path to a downloadable file, when one exists. */
  file: string | null;
  canDownload: boolean;
  /** Optional in-site destination when there is no downloadable file. */
  href?: string;
  hrefLabel?: string;
};

export const documents: HistoricalDocument[] = [
  {
    slug: "fda-facility-registration",
    title: "U.S. FDA facility registration",
    period: "2008 - 2009",
    summary:
      "A food-facility registration on file for Fruiticana LLC for the 2008-2009 period.",
    clarification:
      "This was a facility registration processed through a third-party registration agent - not an FDA approval, certification, or endorsement of the product. Confirm registration status for current operations.",
    category: "credentials",
    image: "/images/documents/doc-fda-facility-registration.webp",
    imageAlt:
      "Fruiticana document page summarizing the 2008–2009 U.S. food facility registration record.",
    file: null,
    canDownload: false,
  },
  {
    slug: "aha-food-certification-letter",
    title: "American Heart Association program letter",
    period: "2005",
    summary:
      "A 2005 letter regarding participation in the American Heart Association's Food Certification Program.",
    clarification:
      "This is correspondence about program participation. It is not presented as a heart-check certification badge.",
    category: "credentials",
    image: "/images/documents/doc-aha-food-certification-letter.webp",
    imageAlt:
      "Fruiticana document page summarizing 2005 American Heart Association program correspondence.",
    file: null,
    canDownload: false,
  },
  {
    slug: "ct-team-nutrition-letter",
    title: "Connecticut Team Nutrition pilot letter",
    period: "December 2004",
    summary:
      "A letter from the Connecticut State Department of Education noting Fruiticana's inclusion in student taste tests and samplings for the Team Nutrition Healthy Snack Pilot.",
    clarification:
      "The letter describes participation in a state pilot funded by a USDA Team Nutrition grant (2003-2005). Each pilot school - not the state - chose which products to purchase.",
    category: "school-program",
    image: "/images/documents/doc-ct-team-nutrition-letter.webp",
    imageAlt:
      "Fruiticana document page summarizing the December 2004 Connecticut Team Nutrition pilot letter.",
    file: null,
    canDownload: false,
  },
  {
    slug: "laboratory-nutritional-analysis",
    title: "Laboratory nutritional analysis",
    period: "2008",
    summary:
      "Independent Nutrition Facts panels for all 12 flavors from Northeast Laboratories, Inc. (report #20080318F).",
    clarification:
      "These lab results are shown on the Flavors & Nutrition page. Confirm them against your current formulation before using them as a product label.",
    category: "nutrition",
    image: "/images/documents/doc-laboratory-nutritional-analysis.webp",
    imageAlt:
      "Fruiticana document page summarizing the 2008 Northeast Laboratories nutritional analysis.",
    file: null,
    canDownload: false,
    href: "/product#nutrition",
    hrefLabel: "View nutrition panels",
  },
  {
    slug: "product-information",
    title: "Product information sheet",
    period: "Flavor lineup",
    summary:
      "A summary of what Fruiticana is, the original flavor lineup, and how it is described as a fruit-based frozen dessert.",
    clarification:
      "An on-site briefing for school review — open Flavors & Nutrition for the live flavor and serving details.",
    category: "product-information",
    image: "/images/documents/doc-product-information.webp",
    imageAlt:
      "Fruiticana product information sheet for school review.",
    file: null,
    canDownload: false,
    href: "/product",
    hrefLabel: "Open flavors & nutrition",
  },
  {
    slug: "flavor-list",
    title: "Original flavor list",
    period: "Original 12 flavors",
    summary:
      "Apricot, Mango, Pineapple, Banana, Raisin, Strawberry, Lemonade, Blueberry, Grapefruit, Apple, Orange, and Cantaloupe.",
    clarification:
      "These are the documented original flavors available for school review on this site.",
    category: "product-information",
    image: "/images/documents/doc-flavor-list.webp",
    imageAlt: "Fruiticana document page listing the original twelve flavors.",
    file: null,
    canDownload: false,
    href: "/product#flavors",
    hrefLabel: "View the flavor list",
  },
  {
    slug: "institutional-serving",
    title: "Institutional serving information",
    period: "School service",
    summary:
      "School-oriented serving notes focused on the 4 oz (1/2 cup) single-serve cup that matches the laboratory Nutrition Facts panels.",
    clarification:
      "Confirm food-service pack sizes with Fruiticana before menu planning.",
    category: "product-information",
    image: "/images/documents/doc-institutional-serving.webp",
    imageAlt:
      "Fruiticana document page describing the 4 oz institutional single-serve cup.",
    file: null,
    canDownload: false,
    href: "/product#servings",
    hrefLabel: "View serving formats",
  },
  {
    slug: "historical-ingredients",
    title: "Ingredient list",
    period: "Recipe",
    summary:
      "Ingredient wording for the fruit-first recipe, including wheat protein.",
    clarification:
      "Confirm the recipe and allergen statement against your current Fruiticana formulation before school service. Wheat protein appears on the list.",
    category: "nutrition",
    image: "/images/documents/doc-historical-ingredients.webp",
    imageAlt:
      "Fruiticana document page with the ingredient list, including wheat protein.",
    file: null,
    canDownload: false,
    href: "/product#ingredients",
    hrefLabel: "Read the recipe ingredients",
  },
];

export const resourceCategoryMeta: {
  id: ResourceCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "product-information",
    title: "Product information",
    description:
      "Flavor lineup, product overview, and serving formats for school review.",
  },
  {
    id: "nutrition",
    title: "Nutrition",
    description:
      "2008 laboratory analyses and the school kitchen ingredient recipe.",
  },
  {
    id: "school-program",
    title: "School program",
    description:
      "Connecticut Team Nutrition Healthy Snack pilot documentation.",
  },
  {
    id: "credentials",
    title: "Credentials",
    description:
      "Background records such as FDA facility registration materials and AHA program correspondence.",
  },
];

export function documentsByCategory(category: ResourceCategory) {
  return documents.filter((document) => document.category === category);
}
