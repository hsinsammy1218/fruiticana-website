/**
 * School implementation: documented facts vs. details that still need
 * current confirmation. Do not invent equipment, pricing, or logistics.
 */

export type OperationStatus = "known" | "to-confirm";

export type SchoolOperation = {
  question: string;
  status: OperationStatus;
  answer: string;
};

export const knownOperations: {
  title: string;
  body: string;
}[] = [
  {
    title: "Prepared in the school kitchen",
    body: "The documented model is in-house preparation, so a school is not bringing in a specialty outside frozen dessert.",
  },
  {
    title: "4 oz single-serve cups",
    body: "The school serving on record is a moderate 4 oz (½ cup) cup, matching the Nutrition Facts serving.",
  },
  {
    title: "Offered to students at meals or snack",
    body: "Students would receive Fruiticana as an individual cup on a cafeteria tray or snack line — not a parlor scoop.",
  },
  {
    title: "Meant to avoid an extra outside-dessert cost",
    body: "The idea is that kitchens make Fruiticana themselves, rather than paying a specialty dessert vendor. What a current program would cost a school is not published here.",
  },
];

export const schoolOperations: SchoolOperation[] = [
  {
    question: "How does Fruiticana get to the school?",
    status: "to-confirm",
    answer:
      "The documented idea is in-house preparation. How a current recipe or mix would reach a kitchen still needs to be confirmed.",
  },
  {
    question: "How is it stored?",
    status: "to-confirm",
    answer:
      "Storage, freezer type, and hold times for a current program have not been published.",
  },
  {
    question: "How is it served?",
    status: "known",
    answer:
      "The record describes individual 4 oz (½ cup) single-serve cups for cafeteria or snack service.",
  },
  {
    question: "Who prepares it?",
    status: "to-confirm",
    answer:
      "In-house kitchen preparation is the documented model. Which staff would do the work in a current program still needs to be confirmed.",
  },
  {
    question: "What equipment is required?",
    status: "to-confirm",
    answer:
      "An equipment list for blending, freezing, or holding has not been published.",
  },
  {
    question: "Who provides the equipment?",
    status: "to-confirm",
    answer:
      "Whether a school already has what it needs, or whether Fruiticana would supply equipment, still needs to be confirmed.",
  },
  {
    question: "What do cafeteria staff need to do?",
    status: "to-confirm",
    answer:
      "Day-to-day kitchen steps for a current program have not been written as a school SOP yet.",
  },
  {
    question: "How do students receive it?",
    status: "known",
    answer:
      "Students receive an individual cup at meal or snack service, rather than a scooped parlor portion.",
  },
  {
    question: "How does payment work?",
    status: "to-confirm",
    answer:
      "Meal-account, à la carte, snack-program, and billing details for a current program have not been published.",
  },
  {
    question: "What does it cost the school?",
    status: "to-confirm",
    answer:
      "Pricing is not listed on this site. The documented idea is avoiding a specialty outside-dessert vendor cost through in-house preparation — not a promise of no cost.",
  },
];
