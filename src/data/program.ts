/**
 * Proposed Fruiticana school program.
 *
 * These facts may be stated as the proposed standard setup. They are not a
 * claim that Fruiticana is on school menus today. Do not invent unverified
 * logistics (staffing, payment, school obligations, flavors) or a sales-share
 * percentage.
 */

import type { FactStat } from "@/data/facts";

export const proposedModelNotice =
  "Figures and steps below describe Fruiticana’s proposed standard school setup. They are not a claim that Fruiticana is on school menus today.";

export const programNumbers: FactStat[] = [
  {
    value: "2",
    label: "Machines per participating school",
    note: "Proposed standard setup",
  },
  {
    value: "4",
    label: "Fruiticana flavor options",
    note: "Two flavors in each machine",
  },
];

export const programHowCopy = {
  id: "how-it-works",
  eyebrow: "How it works",
  homeTitle: "How it works",
  schoolsTitle: "We Bring the Program. You Bring the Students.",
  description:
    "Fruiticana provides the machines, stays involved, and gives students an exciting new way to eat fruit.",
  numbersIntro:
    "Fruiticana provides and maintains the equipment and stays involved in operating the program.",
} as const;

export type ProgramStep = {
  step: string;
  title: string;
  body: string;
  icon: "machine" | "flavors" | "heart" | "fruit" | "school";
};

export const programSteps: ProgramStep[] = [
  {
    step: "01",
    title: "We Provide the Machines",
    body: "Fruiticana supplies the serving equipment. Under the proposed model, the school does not purchase the machines.",
    icon: "machine",
  },
  {
    step: "02",
    title: "We Bring the Flavors",
    body: "Two machines with two flavors per machine under the proposed standard setup — four fruit flavor choices for students.",
    icon: "flavors",
  },
  {
    step: "03",
    title: "We Stay Involved",
    body: "Fruiticana maintains the equipment and remains involved in operation and serving. We’re not simply dropping off equipment and leaving.",
    icon: "heart",
  },
  {
    step: "04",
    title: "Students Enjoy Fruiticana",
    body: "Students have access to an exciting new way to eat fruit — a frozen fruit experience they can look forward to.",
    icon: "fruit",
  },
];

export const equipmentCopy = {
  title: "We Bring Fruiticana to You.",
  body: "Fruiticana provides the equipment needed to serve Fruiticana at participating schools.",
} as const;

export const partnershipCopy = {
  eyebrow: "A hands-on partnership",
  title: "We’re not simply dropping off equipment and leaving.",
  body: "Fruiticana provides the product and equipment and remains involved in the operation, maintenance, and serving process.",
} as const;

export type ValueExchangeColumn = {
  key: "fruiticana" | "students" | "school";
  label: string;
  title: string;
  items: readonly string[];
};

export const valueExchange = {
  eyebrow: "The value exchange",
  title: "What each partner receives",
  description:
    "The administrator’s view of the proposed model: Fruiticana brings the program, students get the experience, and the school hosts a hands-on partnership.",
  columns: [
    {
      key: "fruiticana",
      label: "Fruiticana",
      title: "Provides",
      items: [
        "Machines",
        "Product",
        "Maintenance",
        "Operational involvement",
        "Serving support",
      ],
    },
    {
      key: "students",
      label: "Students",
      title: "Receive",
      items: [
        "Access to Fruiticana",
        "Multiple fruit flavors",
        "A new way to enjoy fruit",
      ],
    },
    {
      key: "school",
      label: "School",
      title: "Receives",
      items: [
        "Machines without purchase",
        "Hands-on Fruiticana partnership",
        "Documentation for school review",
      ],
    },
  ] satisfies ValueExchangeColumn[],
  schoolObligations:
    "The exact obligations of the school still need to be documented. Request school information and we will walk through them rather than guess.",
} as const;

export type TrustHubLink = {
  label: string;
  href: string;
  description: string;
};

export const trustHub = {
  eyebrow: "Research Fruiticana",
  title: "Learn Everything About Fruiticana.",
  description:
    "A principal or administrator should not have to schedule a meeting just to understand the basics. Review Fruiticana’s story, product, nutrition, school program, and historical documentation here.",
  links: [
    {
      label: "Our Story",
      href: "/about",
      description: "Who Fruiticana is and why it exists.",
    },
    {
      label: "Product Information",
      href: "/product",
      description: "What Fruiticana is, flavors, and servings.",
    },
    {
      label: "Nutrition",
      href: "/product#nutrition",
      description: "2008 Nutrition Facts panels for school review.",
    },
    {
      label: "Ingredients",
      href: "/product#ingredients",
      description: "The 2007 documented ingredient list.",
    },
    {
      label: "School Program",
      href: "/schools",
      description: "How the proposed school model works.",
    },
    {
      label: "Historical Connecticut Program",
      href: "/about",
      description: "The 2003–2005 Team Nutrition chapter.",
    },
    {
      label: "Documentation",
      href: "/resources",
      description: "Letters and records for independent review.",
    },
    {
      label: "FAQs",
      href: "/schools#faq",
      description: "Answers for principals and food-service teams.",
    },
    {
      label: "Contact Information",
      href: "/contact",
      description: "Request school information to start a conversation.",
    },
  ] satisfies TrustHubLink[],
} as const;
