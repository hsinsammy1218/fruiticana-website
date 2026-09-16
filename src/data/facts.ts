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
    note: "School serving size",
  },
  {
    value: "0g",
    label: "Total fat on 2008 panels",
    note: "All 12 flavors, documented 2008 analysis",
  },
  {
    value: "~30,000",
    label: "Consumers sampled",
    note: "Connecticut school sampling figure",
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
    note: "Connecticut school sampling figure",
  },
  {
    value: "12",
    label: "Original flavors",
    note: "Fruit lineup from the record",
  },
];

/** About-only: includes the pilot sales figure from the business PDF. */
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
    note: "Connecticut school sampling figure",
  },
  {
    value: "~$1M",
    label: "Pilot sales",
    note: "From the business record",
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
    description: "Original flavors built from fruit, not a dairy ice-cream base.",
  },
  {
    icon: "scoop",
    figure: "Smooth",
    title: "Ice-cream feel",
    description: "A creamless frozen treat with a scoop students recognize.",
  },
  {
    icon: "leaf",
    figure: "2003",
    title: "Lactose-free concept",
    description: "Designed for people avoiding lactose. Current recipe still to confirm.",
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

/**
 * Homepage "Fruit at the Center" points, kept defensible.
 * Every point is either structural (fruit-based, not dairy), historical
 * (the Team Nutrition Healthy Snack pilot), or a 2008 laboratory figure that
 * carries its own qualification. No new nutrient/medical claim is made.
 */
export const healthierBenefits: {
  icon: "fruit" | "leaf" | "heart" | "cup";
  figure: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "fruit",
    figure: "12",
    title: "Fruit, not dairy",
    description: "Built from fruit flavors instead of a dairy ice-cream base.",
  },
  {
    icon: "leaf",
    figure: "0g",
    title: "0 g fat on 2008 panels",
    description:
      "Every flavor's 2008 panel logged 0 g fat and 0 mg cholesterol.",
  },
  {
    icon: "heart",
    figure: "2003–05",
    title: "Healthy Snack pilot",
    description:
      "Included in Connecticut's Team Nutrition Healthy Snack pilot.",
  },
  {
    icon: "cup",
    figure: "2007",
    title: "Recipe to confirm",
    description:
      "Wheat protein is on the 2007 list; confirm today's recipe.",
  },
];

export const schoolHomeBenefits: {
  icon: "cup" | "flavors" | "school" | "leaf" | "fruit";
  figure: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "school",
    figure: "Day",
    title: "Where students eat",
    description: "Meals and snacks happen at school — that is where Fruiticana can reach students.",
  },
  {
    icon: "fruit",
    figure: "Fruit",
    title: "Another way to enjoy fruit",
    description: "A frozen fruit treat on a lunch or snack line, not a parlor dessert.",
  },
  {
    icon: "cup",
    figure: "4 oz",
    title: "A familiar treat feel",
    description: "Cold, smooth cups students recognize as a treat at meal or snack time.",
  },
  {
    icon: "leaf",
    figure: "2003–05",
    title: "A documented school chapter",
    description: "Once included in Connecticut’s Team Nutrition Healthy Snack pilot.",
  },
];
