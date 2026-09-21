/**
 * School-administrator FAQ. Answers stay claim-safe: historical facts
 * are dated, proposed-program facts are labeled as proposed, and current
 * certifications, pricing splits, and availability are not invented.
 */

export type FaqItem = {
  question: string;
  answer: string;
  href?: { label: string; url: string };
};

export const faqIntro = {
  eyebrow: "Questions schools ask",
  title: "FAQ for school teams",
  description:
    "Plain answers for principals, superintendents, food-service directors, and administrators who are reviewing Fruiticana.",
} as const;

export const faqItems: FaqItem[] = [
  {
    question: "What is Fruiticana?",
    answer:
      "Fruiticana is a fruit-based frozen product designed to provide an exciting new way to eat fruit. It has the smooth feel of ice cream, built around fruit rather than a dairy ice-cream base.",
  },
  {
    question: "Why was this created with students in mind?",
    answer:
      "Fruiticana wants to introduce positive experiences with fruit while students are young. Fruit is nutritious, but telling children to eat more fruit does not necessarily make them look forward to it. The goal is an enjoyable fruit experience today, with the hope that appreciation for fruit continues tomorrow. That is a vision, not a guaranteed health or behavior claim.",
  },
  {
    question: "Why does Fruiticana want to work with schools?",
    answer:
      "Fruiticana’s vision is to reach students directly through the school environment — where children already spend a significant part of their day. Schools are not merely a distribution channel. They are where students can discover another way to enjoy fruit.",
  },
  {
    question: "What equipment does Fruiticana provide?",
    answer:
      "Under the proposed standard model, Fruiticana provides two machines per participating school, with two flavors in each machine. Fruiticana supplies the serving equipment. The school does not purchase the machines.",
    href: { label: "See how the program works", url: "/schools#how-it-works" },
  },
  {
    question: "Who maintains the machines?",
    answer:
      "Fruiticana maintains the machinery. We’re not simply dropping off equipment and leaving.",
  },
  {
    question: "Who operates the program?",
    answer:
      "Fruiticana remains actively involved in operation, maintenance, and serving rather than leaving the machines with the school. Exact staffing, serving hours, restocking, and cleaning responsibilities still need to be documented.",
  },
  {
    question: "What does the school receive?",
    answer:
      "Under the proposed model, the participating school receives one-third (1/3) of Fruiticana sales generated through its program. How the remaining portion of sales is allocated has not been published.",
  },
  {
    question: "What does participation cost the school?",
    answer:
      "Fruiticana provides the equipment under the proposed model. This site does not publish a participation fee or a promise of a no-cost program. Other costs, if any, still need to be confirmed.",
  },
  {
    question: "Is Fruiticana in schools now?",
    answer:
      "This site does not claim that Fruiticana is on school menus today. Fruiticana has a documented chapter in Connecticut, including the 2003–2005 Team Nutrition Healthy Snack pilot and later supply to participating local schools. That history is not a current program, partnership, or endorsement.",
    href: { label: "Read the Connecticut story", url: "/about" },
  },
  {
    question: "What is actually in Fruiticana?",
    answer:
      "The original recipe is fruit-first. A 2007 product-page list includes fresh fruit, wheat protein, optional sweeteners if fruit is not ripe, emulsifiers, citric acid, and guar gum. Dairy is not listed as a base. Lactose-free was an original design concept. Wheat protein is on that list, so gluten status must be confirmed against a current formula. Allergens for today’s recipe are not published yet.",
    href: { label: "Read the ingredient list", url: "/product#ingredients" },
  },
  {
    question: "Is Fruiticana a healthy choice for students?",
    answer:
      "Fruiticana is meant to make a fruit-based choice feel enjoyable — not to replace fruit, meals, or nutrition education, and not as a medical product. Independent 2008 Nutrition Facts panels for all 12 original flavors recorded 0 g fat and 0 mg cholesterol per 4 oz serving. Calories and sugars varied by flavor. Those panels are historical. Current testing is needed before launch, including added sugar.",
    href: { label: "View 2008 Nutrition Facts panels", url: "/product#nutrition" },
  },
  {
    question: "Which flavors are available?",
    answer:
      "The original documented lineup is Apricot, Mango, Pineapple, Banana, Raisin, Strawberry, Lemonade, Blueberry, Grapefruit, Apple, Orange, and Cantaloupe. Under the proposed school setup, a participating school would offer four flavors at a time — two per machine. Which four still needs to be confirmed.",
    href: { label: "See the original flavors", url: "/product#flavors" },
  },
  {
    question: "How is Fruiticana served?",
    answer:
      "Fruiticana intends to remain involved in how the product is served and operated. The historical school format on record is a 4 oz (½ cup) single-serve cup. Serving vessel, schedule, restocking, cleaning, payment, installation, electricity, and storage for the proposed machine program are still being documented.",
  },
  {
    question: "Does Fruiticana have a current FDA or American Heart Association endorsement?",
    answer:
      "No current certification or endorsement is claimed here. Fruiticana LLC had a U.S. FDA facility registration for 2008–2009, which is a facility registration — not an FDA product approval. A 2005 American Heart Association letter thanks Fruiticana for participating in a food certification program; that letter is not a current product endorsement. Connecticut Team Nutrition participation was a historical pilot, not a live USDA or state approval.",
    href: { label: "Review the documents", url: "/resources" },
  },
  {
    question: "Where can our team research Fruiticana?",
    answer:
      "This website is the information center: Fruiticana’s story, product and nutrition information, school program details, Connecticut history, documentation, and FAQs are published here so a school can understand the basics before contacting us.",
    href: { label: "Learn everything about Fruiticana", url: "/#learn-everything" },
  },
  {
    question: "How can our school get started?",
    answer:
      "Request school information through the contact form, or email fruiticana1@hotmail.com / call 203-709-0992. Share your name, school, district, role, and a note about your students. The on-site form does not send messages yet, so use email or phone for follow-up.",
    href: { label: "Request School Information", url: "/contact" },
  },
];
