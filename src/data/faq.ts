/**
 * School-administrator FAQ. Answers stay claim-safe: historical facts
 * are dated, and current certifications, pricing, and availability are
 * not invented.
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
    "Plain answers for principals, food-service directors, nutrition staff, and parents who are helping a school decide.",
} as const;

export const faqItems: FaqItem[] = [
  {
    question: "What is Fruiticana?",
    answer:
      "Fruiticana is a fruit-based frozen treat with the smooth feel of ice cream. It was created so students have another way to enjoy fruit — a cold, familiar treat experience built around fruit rather than a dairy ice-cream base.",
  },
  {
    question: "Is Fruiticana ice cream?",
    answer:
      "It is a creamless frozen dessert originally introduced as Fruiticana Creamless Ice Cream. The idea is the taste and feel of a frozen dessert, made from fruit flavors instead of traditional dairy ice cream with fruit mixed in.",
  },
  {
    question: "Why does Fruiticana exist?",
    answer:
      "Fruiticana exists because healthy eating should not have to feel boring or forced. Fruit is nutritious, but telling children to eat more fruit does not necessarily make them excited about it. The goal is to make fruit something students can look forward to eating.",
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
      "The original documented lineup is Apricot, Mango, Pineapple, Banana, Raisin, Strawberry, Lemonade, Blueberry, Grapefruit, Apple, Orange, and Cantaloupe. Those names are shown so schools can see that the idea starts with fruit. Which flavors would be offered in a current school program still needs to be confirmed.",
    href: { label: "See the original flavors", url: "/product#flavors" },
  },
  {
    question: "How would a school serve it?",
    answer:
      "The documented school format is a 4 oz (½ cup) single-serve cup, prepared in-house for a cafeteria or snack line. Equipment, storage, staffing, and day-to-day kitchen steps for a current program are still being documented.",
    href: { label: "See how it works", url: "/#how-it-works" },
  },
  {
    question: "What does it cost a school?",
    answer:
      "This site does not publish a price. Fruiticana is not offered here as a no-cost program. The documented idea is in-house preparation so a school is not paying a specialty outside-dessert vendor. What a current program would cost still needs to be confirmed.",
  },
  {
    question: "Does Fruiticana have a current FDA or American Heart Association endorsement?",
    answer:
      "No current certification or endorsement is claimed here. Fruiticana LLC had a U.S. FDA facility registration for 2008–2009, which is a facility registration — not an FDA product approval. A 2005 American Heart Association letter thanks Fruiticana for participating in a food certification program; that letter is not a current product endorsement. Connecticut Team Nutrition participation was a historical pilot, not a live USDA or state approval.",
    href: { label: "Review the documents", url: "/resources" },
  },
  {
    question: "How can our school get started?",
    answer:
      "Request school information. Share your school, role, and whether you are looking at cafeteria service, a snack program, or nutrition review. Inquiry delivery is not connected yet; the form is ready for when a verified inbox is in place.",
    href: { label: "Request School Information", url: "/contact" },
  },
];
