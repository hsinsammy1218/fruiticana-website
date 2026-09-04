/**
 * Documented snapshot figures for school-facing pages.
 *
 * Only numbers from PLAN.md / the historical business record belong here.
 * Do not add present-tense menu, certification, or medical claims.
 */

export type FactStat = {
  value: string;
  label: string;
  note?: string;
};

/** Homepage “at a glance” strip — mix of product and Connecticut program facts. */
export const homeGlanceStats: FactStat[] = [
  {
    value: "12",
    label: "Original fruit flavors",
    note: "Documented lineup for school review",
  },
  {
    value: "4 oz",
    label: "Single-serve cup",
    note: "Historical school / lab serving size",
  },
  {
    value: "0g",
    label: "Total fat on 2008 panels",
    note: "All 12 flavors, historical lab only",
  },
  {
    value: "~30,000",
    label: "Consumers sampled",
    note: "Connecticut-area historical figure",
  },
];

/** Connecticut program dates — home, schools, and story (no sales figure). */
export const connecticutProgramStats: FactStat[] = [
  {
    value: "2003–05",
    label: "Team Nutrition pilot",
    note: "USDA-funded grant to CT SDE",
  },
  {
    value: "2005–06",
    label: "Local school production",
    note: "After consumer testing",
  },
  {
    value: "~30,000",
    label: "Consumers sampled",
    note: "Connecticut-area historical figure",
  },
  {
    value: "12",
    label: "Original flavors",
    note: "Fruit lineup from the record",
  },
];

/** About-only: includes the historical pilot sales figure from the business PDF. */
export const storyPilotStats: FactStat[] = [
  {
    value: "2003–05",
    label: "Team Nutrition pilot",
    note: "Sep 30, 2003 – Sep 30, 2005",
  },
  {
    value: "2005–06",
    label: "Local school production",
    note: "Distribution after consumer testing",
  },
  {
    value: "~30,000",
    label: "Consumers sampled",
    note: "Connecticut-area historical figure",
  },
  {
    value: "~$1M",
    label: "Historical pilot sales",
    note: "Business record; not a current result",
  },
];

export const schoolGlanceStats: FactStat[] = [
  {
    value: "2003–05",
    label: "Team Nutrition pilot",
    note: "Healthy Snack program in Connecticut",
  },
  {
    value: "4 oz",
    label: "Single-serve cup",
    note: "½ cup (90 g) on 2008 Nutrition Facts",
  },
  {
    value: "12",
    label: "Original flavors",
    note: "Shareable product sheets for each",
  },
];

export const learnGlanceStats: FactStat[] = [
  {
    value: "12",
    label: "Fruits to study",
    note: "One classroom card per original flavor",
  },
  {
    value: "5",
    label: "Teaching modules",
    note: "Fruit, science, labels, case study, activities",
  },
  {
    value: "3",
    label: "Grade bands",
    note: "Elementary, middle, and high school",
  },
  {
    value: "2003–05",
    label: "Case-study years",
    note: "Connecticut Team Nutrition snack pilot",
  },
];

export const productConceptBenefits: {
  icon: "fruit" | "scoop" | "leaf" | "cup";
  figure?: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "fruit",
    figure: "12",
    title: "Fruit based",
    description: "Original fruit flavors — built from fruit, not dairy ice cream with fruit mixed in.",
  },
  {
    icon: "scoop",
    figure: "Smooth",
    title: "Ice-cream feel",
    description: "A creamless frozen dessert with a smooth scoop students recognize.",
  },
  {
    icon: "leaf",
    figure: "2003",
    title: "Lactose-free concept",
    description: "Designed for people avoiding lactose. Current formulation still to be confirmed.",
  },
  {
    icon: "cup",
    figure: "4 oz",
    title: "Single-serve cups",
    description: "Individual portions sized for a cafeteria or snack line.",
  },
];

/** @deprecated Use productConceptBenefits; kept as an alias for existing tests. */
export const schoolDesignBenefits = productConceptBenefits;

export const schoolHomeBenefits: {
  icon: "cup" | "flavors" | "school" | "leaf";
  figure: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "cup",
    figure: "4 oz",
    title: "Student portions",
    description: "Individual cups for meal or snack service — not a parlor scoop.",
  },
  {
    icon: "flavors",
    figure: "12",
    title: "Fruit flavors",
    description: "Tropical, berry, citrus, orchard, and melon options without a dairy base.",
  },
  {
    icon: "school",
    figure: "2005–06",
    title: "School chapter",
    description: "Produced for local Connecticut schools after consumer testing.",
  },
  {
    icon: "leaf",
    figure: "2003–05",
    title: "Snack pilot",
    description: "Included in Connecticut’s Team Nutrition Healthy Snack pilot.",
  },
];
