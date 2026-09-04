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
    title: "Fruit Based",
    description:
      "Twelve original fruit flavors, built around fruit rather than a traditional dairy ice-cream base with fruit mixed in.",
  },
  {
    icon: "scoop",
    title: "Smooth Frozen Texture",
    description:
      "Developed as a fruit-based frozen dessert with a smooth, ice-cream-like experience — served in institutional single-serve cups for the historical school program.",
  },
  {
    icon: "leaf",
    figure: "2003",
    title: "Lactose-Free Concept",
    description:
      "Originally designed in 2003 as an option for people avoiding lactose. Current formulation still needs verification.",
  },
  {
    icon: "cup",
    figure: "4 oz",
    title: "Individual Serving Options",
    description:
      "The historical school program used single-serving cups, including a recorded 4 oz (½ cup) laboratory serving.",
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
    title: "Student-Friendly Portions",
    description:
      "Historical single-serve cups were sized for individual service rather than a parlor scoop — a 4 oz format schools typically evaluate first.",
  },
  {
    icon: "flavors",
    figure: "12",
    title: "Multiple Fruit Flavors",
    description:
      "The original lineup spans tropical, berry, citrus, orchard, and melon flavors, so programs can offer variety without a dairy base.",
  },
  {
    icon: "school",
    figure: "2005–06",
    title: "School Food-Service Potential",
    description:
      "After consumer testing, Fruiticana moved into production for local Connecticut school distribution. Current availability is confirmed through inquiry.",
  },
  {
    icon: "leaf",
    figure: "2003–05",
    title: "Historical School Program Experience",
    description:
      "Fruiticana participated in Connecticut’s Team Nutrition Healthy Snack pilot. That chapter is history, not a current menu listing.",
  },
];
