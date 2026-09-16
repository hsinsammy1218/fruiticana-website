/**
 * Homepage story copy. Keep claim-safe: mission and fruit first,
 * historical facts dated, current operations left honest where unverified.
 */

export const heroCopy = {
  line1: "An Exciting New Way",
  line2: "to Eat Fruit",
  subhead:
    "A fruit-based frozen treat created so students can get excited about eating fruit.",
  originalNote:
    "Originally introduced as Fruiticana Creamless Ice Cream — smooth like ice cream, built from real fruit.",
  primaryCta: {
    label: "Bring Fruiticana to Your School",
    href: "/contact",
  },
  secondaryCta: {
    label: "See How It Works",
    href: "#how-it-works",
  },
} as const;

export const whyCopy = {
  eyebrow: "Our why",
  title: "Healthy Choices Should Still Be Exciting",
  description:
    "Fruiticana exists because children should have food choices that can be both enjoyable and health-conscious. Fruit is nutritious — but simply telling students to eat more of it does not make them look forward to it.",
  question: "What if fruit could become something students actually look forward to?",
  body: "That question is why Fruiticana was created: to give students another way to enjoy fruit.",
} as const;

export type FruitJourneyStep = {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

export const ideaCopy = {
  eyebrow: "The idea",
  title: "Fruit They Know. A New Way to Enjoy It.",
  description:
    "Fruiticana starts with fruit, then creates a cold, smooth frozen experience students already understand as a treat.",
  steps: [
    {
      title: "Real Fruit",
      body: "Flavors begin with fruit students already know.",
      image: "/images/flavors/strawberry.webp",
      imageAlt: "Fresh strawberries",
    },
    {
      title: "Fruiticana",
      body: "Fruit becomes a creamless frozen treat.",
    },
    {
      title: "Cold, Smooth, Frozen Experience",
      body: "The feel of a frozen dessert, built around fruit.",
      image: "/images/flavors/blueberry.webp",
      imageAlt: "Fresh blueberries",
    },
    {
      title: "Something Students Can Get Excited About",
      body: "Another way to enjoy fruit — one that feels like a treat.",
      image: "/images/flavors/mango.webp",
      imageAlt: "Ripe mango",
    },
  ] satisfies FruitJourneyStep[],
} as const;

export const productCopy = {
  eyebrow: "What's Fruiticana?",
  title: "A fruit-based frozen treat for students",
  description:
    "Fruiticana takes the cold, smooth experience students already enjoy and builds it around fruit — not dairy ice cream with fruit mixed in.",
} as const;

export const flavorsCopy = {
  eyebrow: "It starts with fruit",
  title: "Original fruit flavors",
  description:
    "These are the original documented Fruiticana flavors. Each one starts with fruit. Which flavors a school can offer today still needs to be confirmed.",
  cta: { label: "View All Flavors", href: "/product#flavors" },
} as const;

export const healthCopy = {
  eyebrow: "Fruit at the center",
  title: "Health and enjoyment belong together",
  description:
    "Better food choices work best when students actually want to eat them. Fruiticana is meant to sit where fruit, taste, and fun meet — so a health-conscious choice can still feel exciting.",
  notice:
    "Figures below come from 2008 Nutrition Facts panels and a 2007 ingredient list. Current testing is needed before launch for calories, fat, fiber, total sugar, added sugar, dairy and lactose status, and allergens.",
  nutritionCta: { label: "See the Nutrition Information", href: "/product#nutrition" },
  ingredientsCta: { label: "What's actually in Fruiticana?", href: "/product#ingredients" },
} as const;

export const whySchoolsCopy = {
  eyebrow: "Why schools?",
  title: "Schools Are Where Students Eat",
  description:
    "Children spend a large part of their day at school, and many eat meals and snacks there. Fruiticana wants to work with schools because that is where students can be introduced to another way of experiencing fruit.",
  cta: { label: "See how Fruiticana can fit a school", href: "/schools" },
} as const;

export const historyCopy = {
  badge: "Connecticut school programs",
  title: "We've Been in Connecticut Schools Before",
  body:
    "Research and development began around 2003. Company documentation reports that about 30,000 consumers sampled the idea. Fruiticana then participated in the Connecticut Team Nutrition Healthy Snack pilot and was later supplied to participating local Connecticut schools.",
  distinction:
    "This is historical participation. It is not a current state, USDA, or school-district endorsement.",
  today:
    "Today the original idea is being brought back with a renewed focus on students and health-conscious food experiences.",
  cta: { label: "Read Our Story", href: "/about" },
  steps: [
    {
      period: "2003",
      title: "Research and development",
      body: "Work begins on a frozen dessert built around fruit.",
    },
    {
      period: "Sampling",
      title: "Connecticut consumer sampling",
      body: "Product trial sampling in the Connecticut area.",
    },
    {
      period: "2003–05",
      title: "Team Nutrition Healthy Snack Pilot",
      body: "Historical participation in Connecticut’s school snack pilot.",
    },
    {
      period: "2005–06",
      title: "Local school distribution",
      body: "Fruiticana supplied to participating Connecticut schools.",
    },
    {
      period: "Today",
      title: "The original idea, renewed",
      body: "A renewed focus on students and enjoyable fruit.",
    },
  ],
} as const;

export const howCopy = {
  id: "how-it-works",
  eyebrow: "How it works",
  title: "Bringing Fruiticana to Your School",
  description:
    "After the why, here is the how — as far as the record currently shows. Some serving details for a present-day program are still being documented.",
  knownTitle: "What the record already shows",
  pendingTitle: "What a school team will want to confirm",
  pendingIntro:
    "These questions still need current answers before a school launch. Request school information and we will walk through them with you rather than guess.",
  photoCaption:
    "Illustrative photo — a frozen treat portioned for school kitchens in a 4 oz single-serve cup.",
} as const;

export const trustCopy = {
  eyebrow: "Supporting documents",
  title: "A documented Connecticut chapter, shared for review",
  description:
    "School teams can read the 2003–2005 Connecticut Team Nutrition Healthy Snack pilot letter, later local-school service notes, and independent 2008 Nutrition Facts panels for all 12 original flavors. These are historical records — not current certifications.",
  docsCta: { label: "View Documentation", href: "/resources" },
  nutritionCta: { label: "View Nutrition Information", href: "/product#nutrition" },
} as const;

export const closingCta = {
  title: "Let's Give Students a New Way to Enjoy Fruit.",
  description:
    "Request school information to talk through the idea, the original flavors, nutrition documentation, and how a conversation with your school could start.",
  secondary: { label: "See How It Works", href: "#how-it-works" },
} as const;
