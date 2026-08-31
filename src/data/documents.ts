/**
 * Historical documentation referenced in the business PDF.
 *
 * CRITICAL (see PLAN.md): these are HISTORICAL records from ~2004-2008. They
 * are described factually and must NOT be presented as current certifications
 * or endorsements. No regulatory/organization logos are used as marketing
 * badges. The actual scanned images are not shipped; `image` is null and cards
 * render a labeled placeholder until verified, rights-cleared assets exist.
 */

export type HistoricalDocument = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  /** Plain-language clarification of what the document is and is not. */
  clarification: string;
  /** Where this item sits in the 2003–2011 business-record PDF. */
  recordLocation: string;
  image: string | null;
  /** Optional in-site destination when there is no downloadable file. */
  href?: string;
  hrefLabel?: string;
};

export const documents: HistoricalDocument[] = [
  {
    slug: "fda-facility-registration",
    title: "U.S. FDA facility registration",
    period: "2008 - 2009",
    recordLocation: "Appendix scans, pp. 12–40",
    summary:
      "A food-facility registration on file for Fruiticana LLC for the 2008-2009 period, included in the historical business-record appendix.",
    clarification:
      "This was a facility registration processed through a third-party registration agent - not an FDA approval, certification, or endorsement of the product. Registration status would need to be re-verified today.",
    image: null,
  },
  {
    slug: "aha-food-certification-letter",
    title: "American Heart Association program letter",
    period: "2005",
    recordLocation: "Appendix scans, pp. 12–40",
    summary:
      "A 2005 letter regarding participation in the American Heart Association's Food Certification Program, filed in the same appendix as the other supporting scans.",
    clarification:
      "This is historical correspondence about program participation. It is not a current endorsement, and no heart-check certification is claimed today.",
    image: null,
  },
  {
    slug: "ct-team-nutrition-letter",
    title: "Connecticut Team Nutrition pilot letter",
    period: "December 2004",
    recordLocation: "Appendix, December 2004 CT SDE letter",
    summary:
      "A letter from the Connecticut State Department of Education noting Fruiticana's inclusion in student taste tests and samplings for the Team Nutrition Healthy Snack Pilot. The record also places Fruiticana among 11 vendors (3 frozen-dessert vendors) in that USDA-funded grant.",
    clarification:
      "The letter describes participation in a state pilot funded by a USDA Team Nutrition grant (2003-2005). Each pilot school - not the state - chose which products to purchase. It is not a current government endorsement.",
    image: null,
  },
  {
    slug: "laboratory-nutritional-analysis",
    title: "Laboratory nutritional analysis",
    period: "2008",
    recordLocation: "Appendix, pp. 15–37 (report #20080318F)",
    summary:
      "Independent Nutrition Facts panels for all 12 flavors from Northeast Laboratories, Inc. (report #20080318F, March 18, 2008), plus fruit-comparison pages in the same appendix.",
    clarification:
      "These historical lab results are shown on the Product & Nutrition page, clearly labeled. They must be re-verified against the current formulation before use as a product label.",
    image: null,
    href: "/product#nutrition",
    hrefLabel: "View historical nutrition panels",
  },
  {
    slug: "product-information",
    title: "Product information sheet",
    period: "Historical lineup",
    recordLocation: "Narrative, pp. 1–11",
    summary:
      "A summary of what Fruiticana is, the original flavor lineup, and how it was described as a fruit-based frozen dessert with a smooth texture (no fruit chunks or seeds).",
    clarification:
      "This is an on-site briefing drawn from the historical business record, not a current spec sheet from a live production run.",
    image: null,
    href: "/product",
    hrefLabel: "Open product & nutrition",
  },
  {
    slug: "flavor-list",
    title: "Original flavor list",
    period: "Original 12 flavors",
    recordLocation: "Narrative, pp. 1–11, and lab panels pp. 15–37",
    summary:
      "Apricot, Mango, Pineapple, Banana, Raisin, Strawberry, Lemonade, Blueberry, Grapefruit, Apple, Orange, and Cantaloupe.",
    clarification:
      "These are the original documented flavors. Which flavors exist in any current production run still needs confirmation.",
    image: null,
    href: "/product#flavors",
    hrefLabel: "View the flavor list",
  },
  {
    slug: "institutional-serving",
    title: "Institutional serving information",
    period: "Historical",
    recordLocation: "Narrative, pp. 1–11",
    summary:
      "School-oriented serving notes from the business record, including single-serve cups and a 3 oz institutional portion alongside the 4 oz (1/2 cup) lab serving.",
    clarification:
      "Portion sizes are historical. Current food-service pack sizes must be confirmed before menu planning.",
    image: null,
    href: "/product#servings",
    hrefLabel: "View serving formats",
  },
];
