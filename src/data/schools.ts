/**
 * Copy for the For Schools page. Historical school-program facts are labeled
 * in the UI; nothing here claims Fruiticana is on menus today.
 */

export const schoolsIntro = {
  eyebrow: "For schools",
  title: "How Fruiticana could fit a school food program",
  description:
    "Fruiticana is a fruit-based frozen dessert originally developed as a refreshing alternative to traditional dairy ice cream. This page is for administrators, food-service directors, nutrition staff, and partners evaluating whether it belongs in a cafeteria, snack program, or district conversation.",
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
  description: string;
};

export const schoolUses: SchoolUse[] = [
  {
    slug: "cafeteria",
    title: "School cafeteria",
    description:
      "A fruit-based frozen dessert option for meal service or à la carte, historically offered in individual cups rather than a dairy ice-cream scoop.",
  },
  {
    slug: "snack",
    title: "Healthy snack program",
    description:
      "Fruiticana participated in Connecticut’s Team Nutrition Healthy Snack pilot. That program required vendors to meet nutrition standards and use moderate single-serving portions.",
  },
  {
    slug: "private",
    title: "Private school",
    description:
      "Independent and private schools evaluating a fruit-forward dessert for dining halls, snack windows, or special events can review the same nutrition and program documentation.",
  },
  {
    slug: "district",
    title: "District-level evaluation",
    description:
      "Nutrition, procurement, and leadership teams can share product sheets, historical lab panels, and Connecticut program records internally before a tasting or bid conversation.",
  },
  {
    slug: "events",
    title: "School events",
    description:
      "Historical serving ideas included cups and other single-serve formats that can be discussed for fairs, family nights, or limited-time service — availability is to be confirmed.",
  },
  {
    slug: "distribution",
    title: "Food-service distribution",
    description:
      "Distributors and food-service partners can inquire about institutional servings, flavor lineup, and documentation needed to evaluate Fruiticana for school accounts.",
  },
];

export const schoolFitPoints = [
  {
    title: "Fruit-based",
    body: "Built around fruit rather than a traditional dairy ice-cream base.",
  },
  {
    title: "Lactose-free concept",
    body: "Originally designed as an option for people avoiding lactose. Current formulation still needs verification.",
  },
  {
    title: "Individual portions",
    body: "The historical school program used single-serving cups, including an institutional 3 oz size recorded in the business documents.",
  },
  {
    title: "Documented school chapter",
    body: "Connecticut Team Nutrition participation (2003–2005) and later distribution to local Connecticut schools after consumer testing.",
  },
] as const;

export const schoolAvailabilityNote =
  "Fruiticana is not listing current school-menu placements on this site. Historical Connecticut participation is shared so decision-makers can evaluate fit. Product availability, current nutrition, and food-service partnerships are confirmed through a school inquiry.";
