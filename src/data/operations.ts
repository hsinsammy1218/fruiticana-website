/**
 * School implementation: proposed-model facts vs. details that still need
 * current confirmation. Do not invent equipment specs, pricing splits,
 * staffing, or logistics.
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
    title: "Fruiticana provides the machines",
    body: "Under the proposed model, Fruiticana supplies the serving equipment. The school does not purchase the machines.",
  },
  {
    title: "Two machines, two flavors each",
    body: "The proposed standard setup is two Fruiticana machines per school, with two flavors in each machine — four fruit flavor choices for students.",
  },
  {
    title: "Fruiticana maintains the equipment",
    body: "Fruiticana remains involved after installation: maintaining and servicing the machinery so the program can keep functioning.",
  },
  {
    title: "Fruiticana stays involved in serving",
    body: "This is a hands-on partnership. Fruiticana does not simply drop off equipment and leave cafeteria staff responsible for everything.",
  },
  {
    title: "The school receives 1/3 of sales",
    body: "The participating school receives one-third (1/3) of Fruiticana sales generated through its Fruiticana program.",
  },
];

export const schoolOperations: SchoolOperation[] = [
  {
    question: "Who provides the machines?",
    status: "known",
    answer:
      "Fruiticana provides the machinery under the proposed model. The school does not purchase the Fruiticana machines.",
  },
  {
    question: "How many machines and flavors?",
    status: "known",
    answer:
      "The proposed standard setup is two machines per school, with two flavors in each machine. Which four flavors a school would offer still needs to be confirmed.",
  },
  {
    question: "Who maintains the machines?",
    status: "known",
    answer:
      "Fruiticana maintains and services the machinery and intends to remain involved after installation.",
  },
  {
    question: "Who operates the program?",
    status: "known",
    answer:
      "Fruiticana remains actively involved in operation, maintenance, and serving rather than leaving the machines with the school. Exact day-to-day staffing still needs to be documented.",
  },
  {
    question: "What does the school receive?",
    status: "known",
    answer:
      "Under the proposed model, the participating school receives one-third (1/3) of Fruiticana sales generated through its program. How the remaining portion is allocated has not been published.",
  },
  {
    question: "What does participation cost the school?",
    status: "to-confirm",
    answer:
      "Fruiticana provides the equipment under the proposed model. This site does not publish a participation fee, product cost to the school, or a promise of a no-cost program. Other costs, if any, still need to be documented.",
  },
  {
    question: "How do students receive Fruiticana?",
    status: "to-confirm",
    answer:
      "Whether students purchase Fruiticana, receive it through a meal or snack program, or both still needs to be confirmed.",
  },
  {
    question: "What are the school’s obligations?",
    status: "to-confirm",
    answer:
      "The exact obligations of a participating school — space, access, staffing support, or other responsibilities — have not been published.",
  },
  {
    question: "What about installation, power, storage, and payment?",
    status: "to-confirm",
    answer:
      "Installation requirements, electricity, storage, restocking, cleaning, serving schedule, and payment processing have not been published.",
  },
  {
    question: "Does the historical 4 oz cup still apply?",
    status: "to-confirm",
    answer:
      "A 4 oz (½ cup) cup is the laboratory and historical institutional serving on record. Whether that format applies to the proposed machine program still needs to be confirmed.",
  },
];
