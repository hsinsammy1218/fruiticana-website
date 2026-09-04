/**
 * Copy for the For Schools page. Historical school-program facts are labeled
 * in the UI; nothing here claims Fruiticana is on menus today.
 */

export const schoolsIntro = {
  eyebrow: "For schools",
  title: "Fruiticana for Schools",
  description:
    "A refreshing frozen dessert option worth exploring. This page is for administrators, food-service directors, nutrition staff, private-school leaders, and partners evaluating whether Fruiticana could fit a cafeteria, snack program, or district conversation.",
} as const;

export const schoolAudiences = [
  "School administrators and principals",
  "Superintendents and private-school directors",
  "Food-service directors and cafeteria managers",
  "Nutrition coordinators and purchasing staff",
  "District decision-makers and distributors",
] as const;

export type SchoolUse = {
  slug: string;
  title: string;
  figure: string;
  figureLabel: string;
  description: string;
};

export const schoolUses: SchoolUse[] = [
  {
    slug: "cafeteria",
    title: "School cafeteria",
    figure: "4 oz",
    figureLabel: "Single-serve cup",
    description:
      "A fruit-based frozen dessert option for meal service or à la carte, historically offered in individual 4 oz single-serve cups rather than a dairy ice-cream scoop.",
  },
  {
    slug: "snack",
    title: "Healthy snack program",
    figure: "2003–05",
    figureLabel: "Team Nutrition pilot",
    description:
      "Fruiticana participated in Connecticut’s two-year Team Nutrition Healthy Snack pilot. That program required vendors to meet nutrition standards and use moderate single-serving portions.",
  },
  {
    slug: "private",
    title: "Private school",
    figure: "12",
    figureLabel: "Original flavors",
    description:
      "Independent and private schools evaluating a fruit-forward dessert for dining halls, snack windows, or special events can review the same 12 flavor sheets and nutrition documentation.",
  },
  {
    slug: "district",
    title: "District-level evaluation",
    figure: "2008",
    figureLabel: "Lab panels on file",
    description:
      "Nutrition, procurement, and leadership teams can share product sheets, 2008 laboratory panels, and Connecticut program records internally before a tasting or bid conversation.",
  },
  {
    slug: "events",
    title: "School events",
    figure: "4 oz",
    figureLabel: "Single-serve cup",
    description:
      "Historical serving ideas included 4 oz cups and other single-serve formats that can be discussed for fairs, family nights, or limited-time service — availability is to be confirmed.",
  },
  {
    slug: "distribution",
    title: "Food-service distribution",
    figure: "4 oz",
    figureLabel: "Cup size",
    description:
      "Distributors and food-service partners can inquire about the 4 oz single-serve cup size, the flavor lineup, and documentation needed to evaluate Fruiticana for school accounts.",
  },
  {
    slug: "summer",
    title: "Summer and after-school programs",
    figure: "4 oz",
    figureLabel: "Single-serve idea",
    description:
      "Possible applications include summer feeding and after-school snacks. These are program conversations — not a claim that those programs currently serve Fruiticana.",
  },
  {
    slug: "campus",
    title: "Campus food service",
    figure: "12",
    figureLabel: "Flavor options",
    description:
      "Private-school dining halls and campus food service can review the same flavor sheets, historical portions, and nutrition documentation used by K–12 evaluators.",
  },
];

export const schoolFitPoints = [
  {
    figure: "12",
    title: "Fruit-based",
    body: "Built around fruit rather than a traditional dairy ice-cream base, with 12 original flavors spanning five fruit families.",
  },
  {
    figure: "4 oz",
    title: "Individual portions",
    body: "The historical school program used single-serving cups, including a recorded 4 oz (½ cup) laboratory serving.",
  },
  {
    figure: "2003–05",
    title: "Documented school chapter",
    body: "Connecticut Team Nutrition participation (2003–2005) and later distribution to local Connecticut schools after consumer testing in 2005–2006.",
  },
  {
    figure: "2003",
    title: "Lactose-free concept",
    body: "Originally designed in 2003 as an option for people avoiding lactose. Current formulation still needs verification.",
  },
] as const;

export const schoolAvailabilityNote =
  "Fruiticana is not listing current school-menu placements on this site. Historical Connecticut participation is shared so decision-makers can evaluate fit. Product availability, current nutrition, and food-service partnerships are confirmed through a school inquiry.";
