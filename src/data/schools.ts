/**
 * Copy for the schools page.
 */

export const schoolsIntro = {
  title: "Bring Fruiticana to Your School",
  description:
    "Fruiticana wants to give students an exciting new way to eat fruit — and is willing to put resources behind that vision. Under the proposed model, Fruiticana provides the machines, maintains them, stays involved, and the participating school receives 1/3 of Fruiticana sales generated through its program.",
} as const;

export const schoolAudiences = [
  "Principals and school administrators",
  "Food-service directors and cafeteria managers",
  "Nutrition coordinators and wellness staff",
  "Superintendents and district leaders",
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
    figure: "Students",
    figureLabel: "Where they already eat",
    description:
      "A fruit-based frozen experience offered where students already have meals and snacks — not a parlor dessert brought in from outside.",
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
      "Independent and private schools evaluating a fruit-forward dessert can review the original 12 flavor sheets and nutrition documentation. Which four flavors a proposed two-machine setup would offer still needs to be confirmed.",
  },
  {
    slug: "district",
    title: "District-level evaluation",
    figure: "1/3",
    figureLabel: "School share of sales",
    description:
      "Nutrition, procurement, and leadership teams can review the proposed partnership — equipment provided, Fruiticana involvement, and 1/3 of program sales — before a tasting or program conversation.",
  },
  {
    slug: "events",
    title: "School events",
    figure: "Fruit",
    figureLabel: "A new way to enjoy it",
    description:
      "Fruiticana is meant to give students something they can look forward to. Event or limited-time service details still need to be confirmed.",
  },
  {
    slug: "summer",
    title: "Summer and after-school programs",
    figure: "Kids",
    figureLabel: "Meet them where they are",
    description:
      "Possible applications include summer feeding and after-school snacks. Reach out to discuss how the proposed program could fit.",
  },
  {
    slug: "campus",
    title: "School dining hall",
    figure: "12",
    figureLabel: "Flavor options",
    description:
      "Private-school dining halls and student meal programs can review the same flavor sheets, nutrition documentation, and proposed school partnership used by K–12 evaluators.",
  },
];

export const schoolFitPoints = [
  {
    figure: "2",
    title: "Machines provided",
    body: "Fruiticana supplies two serving machines per participating school under the proposed standard setup. The school does not purchase them.",
  },
  {
    figure: "4",
    title: "Fruit flavor choices",
    body: "Two flavors per machine gives students four fruit flavor options. Which four flavors would be offered still needs to be confirmed.",
  },
  {
    figure: "1/3",
    title: "School share of sales",
    body: "The participating school receives one-third of Fruiticana sales generated through its program. This is an advantage — not the Fruiticana mission.",
  },
  {
    figure: "Hands-on",
    title: "We stay involved",
    body: "Fruiticana maintains the equipment and remains involved in operation and serving rather than dropping machines off and leaving.",
  },
] as const;

export const whySchoolsPageCopy = {
  title: "Why Fruiticana works with schools",
  description:
    "Schools are where children spend much of the day and where many students already eat meals and snacks. That is the opportunity: reaching students with another way to enjoy fruit — not treating schools as a sales market.",
} as const;

/**
 * The student side of the school decision. Language stays defensible — how the
 * product is designed and what it is — never "students love it / approved /
 * prefer it."
 */
export const studentAppealIntro = {
  title: "Made for Kids to Enjoy",
  description:
    "Fruiticana is not simply another item for a cafeteria line. The goal is a treat students recognize — and another way to enjoy fruit.",
} as const;

export const studentAppeal: {
  icon: "scoop" | "fruit" | "cup" | "heart";
  figure?: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "scoop",
    title: "Smooth like a treat",
    description:
      "A creamless frozen dessert with the smooth, scoopable feel students know from ice cream.",
  },
  {
    icon: "fruit",
    figure: "12",
    title: "Flavors that start with fruit",
    description:
      "Twelve original fruit flavors across tropical, berry, citrus, orchard, and melon — built from fruit, not a dairy base.",
  },
  {
    icon: "heart",
    title: "A new way to eat fruit",
    description:
      "The idea is an exciting fruit experience students can look forward to — not a lecture about eating more fruit.",
  },
  {
    icon: "cup",
    title: "Made with students in mind",
    description:
      "Created so students can enjoy fruit while they are young, with the hope that appreciation continues as they grow.",
  },
];
