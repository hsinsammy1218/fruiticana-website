/**
 * Historical documentation referenced in the business PDF.
 *
 * CRITICAL (see PLAN.md): these are HISTORICAL records from ~2004-2008. They
 * are described factually and must NOT be presented as current certifications
 * or endorsements. No regulatory/organization logos are used as marketing
 * badges. The actual scanned images are not shipped; `file` is null and cards
 * render a labeled placeholder until verified, rights-cleared assets exist.
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
  image: string | null;
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
      "School-oriented serving notes from the business record, including single-serve cups and a 3 oz institutional portion alongside the 4 oz (1/2 cup) lab serving.",
    clarification:
      "Portion sizes are historical. Current food-service pack sizes must be confirmed before menu planning.",
    category: "product-information",
    image: null,
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
    image: null,
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
