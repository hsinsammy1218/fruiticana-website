/**
 * Historical documentation referenced in the business PDF.
 *
 * CRITICAL (see PLAN.md): these are HISTORICAL records from ~2004-2008. They
 * are described factually and must NOT be presented as current certifications
 * or endorsements. No regulatory/organization logos are used as marketing
 * badges.
 *
 * `image` points to on-site historical archive page images for school review.
 * Original PDF downloads stay unpublished (`file` null / `canDownload` false)
 * until rights-cleared source scans are provided.
 */

export type ResourceCategory =
  | "product-information"
  | "nutrition"
  | "school-program-history"
  | "historical-credentials";

export type HistoricalDocument = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  /** Plain-language clarification of what the document is and is not. */
  clarification: string;
  category: ResourceCategory;
  /** Public path to an on-site archive page image, when one exists. */
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
      "This was a facility registration processed through a third-party registration agent - not an FDA approval, certification, or endorsement of the product. Registration status would need to be re-verified today.",
    category: "historical-credentials",
    image: "/images/documents/doc-fda-facility-registration.webp",
    imageAlt:
      "Historical Fruiticana archive page summarizing the 2008–2009 U.S. food facility registration record.",
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
      "This is historical correspondence about program participation. It is not a current endorsement, and no heart-check certification is claimed today.",
    category: "historical-credentials",
    image: "/images/documents/doc-aha-food-certification-letter.webp",
    imageAlt:
      "Historical Fruiticana archive page summarizing 2005 American Heart Association program correspondence.",
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
      "The letter describes participation in a state pilot funded by a USDA Team Nutrition grant (2003-2005). Each pilot school - not the state - chose which products to purchase. It is not a current government endorsement.",
    category: "school-program-history",
    image: "/images/documents/doc-ct-team-nutrition-letter.webp",
    imageAlt:
      "Historical Fruiticana archive page summarizing the December 2004 Connecticut Team Nutrition pilot letter.",
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
      "These historical lab results are shown on the Flavors & Nutrition page, clearly labeled. They must be re-verified against the current formulation before use as a product label.",
    category: "nutrition",
    image: "/images/documents/doc-laboratory-nutritional-analysis.webp",
    imageAlt:
      "Historical Fruiticana archive page summarizing the 2008 Northeast Laboratories nutritional analysis.",
    file: null,
    canDownload: false,
    href: "/product#nutrition",
    hrefLabel: "View historical nutrition panels",
  },
  {
    slug: "product-information",
    title: "Product information sheet",
    period: "Historical lineup",
    summary:
      "A summary of what Fruiticana is, the original flavor lineup, and how it was described as a fruit-based frozen dessert.",
    clarification:
      "This is an on-site briefing drawn from the historical business record, not a current spec sheet from a live production run.",
    category: "product-information",
    image: "/images/documents/doc-product-information.webp",
    imageAlt:
      "Historical Fruiticana archive product information sheet for school review.",
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
      "These are the original documented flavors. Which flavors exist in any current production run still needs confirmation.",
    category: "product-information",
    image: "/images/documents/doc-flavor-list.webp",
    imageAlt: "Historical Fruiticana archive page listing the original twelve flavors.",
    file: null,
    canDownload: false,
    href: "/product#flavors",
    hrefLabel: "View the flavor list",
  },
  {
    slug: "institutional-serving",
    title: "Institutional serving information",
    period: "Historical",
    summary:
      "School-oriented serving notes from the business record, focused on the 4 oz (1/2 cup) single-serve cup that matches the laboratory Nutrition Facts panels.",
    clarification:
      "Portion sizes are historical. Current food-service pack sizes must be confirmed before menu planning.",
    category: "product-information",
    image: "/images/documents/doc-institutional-serving.webp",
    imageAlt:
      "Historical Fruiticana archive page describing the 4 oz institutional single-serve cup.",
    file: null,
    canDownload: false,
    href: "/product#servings",
    hrefLabel: "View serving formats",
  },
  {
    slug: "historical-ingredients",
    title: "Historical ingredient list (2007 website)",
    period: "2007",
    summary:
      "Ingredient wording transcribed from the original myfruiticana.com product pages, including wheat protein.",
    clarification:
      "This is a historical formulation list, not a current allergen statement. Gluten status and all other ingredients must be re-verified before school use.",
    category: "nutrition",
    image: "/images/documents/doc-historical-ingredients.webp",
    imageAlt:
      "Historical Fruiticana archive page with the 2007 website ingredient list, including wheat protein.",
    file: null,
    canDownload: false,
    href: "/product#ingredients",
    hrefLabel: "Read historical ingredients",
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
      "Flavor lineup, product overview, and historical serving formats for school review.",
  },
  {
    id: "nutrition",
    title: "Nutrition",
    description:
      "2008 laboratory analyses and the 2007 website ingredient list, labeled as historical.",
  },
  {
    id: "school-program-history",
    title: "School program history",
    description:
      "Connecticut Team Nutrition Healthy Snack pilot documentation from the historical record.",
  },
  {
    id: "historical-credentials",
    title: "Historical credentials",
    description:
      "Background records such as FDA facility registration materials and AHA program correspondence — not current certifications.",
  },
];

export function documentsByCategory(category: ResourceCategory) {
  return documents.filter((document) => document.category === category);
}
