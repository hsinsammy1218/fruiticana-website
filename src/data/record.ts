/**
 * Facts transcribed from Fruiticana’s 2003–2011 business record (the source PDF).
 *
 * Narrative: pp. 1–11. Appendix scans: pp. 12–40 (FDA packet, AHA material,
 * packaging, 12 Nutrition Facts panels + fruit comparisons, Connecticut Team
 * Nutrition page). Do not invent current certifications, prices, or menus.
 */

export const historicalRecord = {
  title: "2003–2011 business record",
  years: "2003–2011",
  narrativePages: "1–11",
  appendixPages: "12–40",
  nutritionPages: "15–37",
  packagingPage: "14",
  citation:
    "Transcribed from Fruiticana’s 2003–2011 business record. Narrative pages 1–11; appendix scans pages 12–40, including Northeast Laboratories report #20080318F (March 18, 2008).",
  howToUse:
    "Use this as background for a school or food-service evaluation: product concept, historical Connecticut program, documented servings, and dated lab panels. It is not a current specification sheet, menu listing, or government endorsement.",
} as const;

export type RecordFact = {
  figure: string;
  label: string;
  fromRecord: string;
  howToUse: string;
};

/** School-facing facts taken only from the documented PDF record. */
export const recordFacts: RecordFact[] = [
  {
    figure: "1 of 11",
    label: "Team Nutrition vendors",
    fromRecord:
      "Fruiticana was one of 11 vendors — and one of 3 frozen-dessert vendors — in Connecticut’s Team Nutrition Healthy Snack pilot (September 30, 2003 – September 30, 2005), a USDA-funded grant to the Connecticut State Department of Education.",
    howToUse:
      "Shows a documented school-snack tasting context. Each pilot school, not the state, chose what to purchase. Not a current menu listing.",
  },
  {
    figure: "3 oz / 4 oz",
    label: "Documented single-serve cups",
    fromRecord:
      "The record lists a 3 oz institutional cup for moderate school portions and a 4 oz (½ cup / 90 g) size matching the 2008 Nutrition Facts serving.",
    howToUse:
      "A starting point for cafeteria or snack-program portion talk. Confirm current pack sizes before menu planning.",
  },
  {
    figure: "0g / 0mg",
    label: "Fat and cholesterol on 2008 panels",
    fromRecord:
      "Northeast Laboratories, Inc. (report #20080318F, March 18, 2008) recorded 0 g total fat and 0 mg cholesterol on every flavor panel in the appendix (pp. 15–37).",
    howToUse:
      "Historical lab reference for nutrition staff. Re-verify against any current formulation before treating as a product label.",
  },
  {
    figure: "12",
    label: "Original fruit flavors",
    fromRecord:
      "Apricot, Mango, Pineapple, Banana, Raisin, Strawberry, Lemonade, Blueberry, Grapefruit, Apple, Orange, and Cantaloupe. Historical consumer language described a smooth scoop with no fruit chunks or seeds.",
    howToUse:
      "Shareable product sheets exist for each flavor. Which flavors exist in any current production run still needs confirmation.",
  },
  {
    figure: "~30,000",
    label: "Connecticut-area samples",
    fromRecord:
      "The business record reports roughly 30,000 consumers in the Connecticut area sampled the concept during research and trial sampling.",
    howToUse:
      "A historical sampling figure, not current sales or school enrollment coverage.",
  },
  {
    figure: "Dec 2004",
    label: "Connecticut SDE letter",
    fromRecord:
      "A December 2004 letter from the Connecticut State Department of Education notes Fruiticana’s inclusion in student taste tests and samplings for the Team Nutrition Healthy Snack Pilot.",
    howToUse:
      "Primary-source evidence of a tasting program. It is not a statewide product approval.",
  },
];

export const appendixIndex = [
  {
    title: "U.S. FDA facility registration packet",
    location: "Appendix, pp. 12–40",
    period: "2008–2009",
    use: "Shows a historical food-facility registration — not FDA product approval.",
  },
  {
    title: "American Heart Association program letter",
    location: "Appendix, pp. 12–40",
    period: "2005",
    use: "Historical correspondence about program participation — not a current heart-check claim.",
  },
  {
    title: "Connecticut Team Nutrition letter and program page",
    location: "Appendix, including December 2004 CT SDE letter",
    period: "2003–2005",
    use: "Documents taste tests and samplings in a USDA-funded state grant. Not a current endorsement.",
  },
  {
    title: "Packaging / product mark",
    location: `Appendix, p. ${historicalRecord.packagingPage}`,
    period: "Historical lineup",
    use: "Source for the original product presentation. Not a current brand-lockup file.",
  },
  {
    title: "Laboratory Nutrition Facts + fruit comparisons",
    location: `Appendix, pp. ${historicalRecord.nutritionPages}`,
    period: "March 18, 2008",
    use: "Transcribed on Product & Nutrition as dated reference panels, not a live label.",
  },
] as const;
