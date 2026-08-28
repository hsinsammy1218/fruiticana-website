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
  image: string | null;
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
    image: null,
  },
  {
    slug: "aha-food-certification-letter",
    title: "American Heart Association program letter",
    period: "2005",
    summary:
      "A 2005 letter regarding participation in the American Heart Association's Food Certification Program.",
    clarification:
      "This is historical correspondence about program participation. It is not a current endorsement, and no heart-check certification is claimed today.",
    image: null,
  },
  {
    slug: "ct-team-nutrition-letter",
    title: "Connecticut Team Nutrition pilot letter",
    period: "December 2004",
    summary:
      "A letter from the Connecticut State Department of Education noting Fruiticana's inclusion in student taste tests and samplings for the Team Nutrition Healthy Snack Pilot.",
    clarification:
      "The letter describes participation in a state pilot funded by a USDA Team Nutrition grant (2003-2005). Each pilot school - not the state - chose which products to purchase. It is not a current government endorsement.",
    image: null,
  },
  {
    slug: "laboratory-nutritional-analysis",
    title: "Laboratory nutritional analysis",
    period: "2008",
    summary:
      "Independent Nutrition Facts panels for all 12 flavors from Northeast Laboratories, Inc. (report #20080318F).",
    clarification:
      "These historical lab results are shown on the Nutrition page, clearly labeled. They must be re-verified against the current formulation before use as a product label.",
    image: null,
  },
];
