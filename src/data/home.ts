/**
 * Homepage story copy. Keep claim-safe: mission and fruit first,
 * historical facts dated, current operations left honest where unverified.
 */

export const heroCopy = {
  line1: "An Exciting New Way",
  line2: "to Eat Fruit",
  subhead:
    "A fruit-based frozen experience for students, brought to schools.",
  originalNote:
    "Originally introduced as Fruiticana Creamless Ice Cream — smooth like ice cream, built from real fruit.",
  primaryCta: {
    label: "Explore Fruiticana",
    href: "/product",
  },
  secondaryCta: {
    label: "Bring Fruiticana to Your School",
    href: "/contact",
  },
} as const;

export const whyCopy = {
  eyebrow: "Why Fruiticana",
  title: "What if kids wanted the fruit?",
  description:
    "Instead of only telling children they should eat fruit, Fruiticana asks how the experience can be exciting enough that they may actually want it.",
  question: "What if fruit could become something students look forward to?",
  body: "That question is why Fruiticana was created. This is our vision, not a guaranteed change in what students choose.",
} as const;

export type FruitJourneyStep = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export const ideaCopy = {
  eyebrow: "The idea",
  title: "Fruit. Reimagined.",
  description:
    "Fruiticana starts with fruit, then creates a cold, smooth frozen experience students already understand as a treat. It was originally introduced as Cream-Less Ice Crème.",
  steps: [
    {
      title: "Real Fruit",
      body: "Flavors begin with fruit students already know.",
      image: "/images/journey/real-fruit.webp",
      imageAlt:
        "Cut mango, strawberries, orange, pineapple, apple, and blueberries on a table",
    },
    {
      title: "Fruiticana",
      body: "Fruit becomes a creamless frozen treat.",
      image: "/images/journey/fruiticana.webp",
      imageAlt:
        "Pink and yellow frozen scoops in a cup beside fresh strawberry and mango",
    },
    {
      title: "Cold, Smooth, Frozen Experience",
      body: "The feel of a frozen dessert, built around fruit.",
      image: "/images/journey/frozen.webp",
      imageAlt: "A spoon lifting a smooth strawberry-mango frozen scoop from a cup",
    },
    {
      title: "Something Students Can Get Excited About",
      body: "Another way to enjoy fruit — one that feels like a treat.",
      image: "/images/journey/students.webp",
      imageAlt:
        "Students smiling in a school cafeteria while holding cups of frozen fruit treat",
    },
  ] satisfies FruitJourneyStep[],
} as const;

export const productCopy = {
  eyebrow: "What's Fruiticana?",
  title: "A fruit-based frozen treat for students",
  description:
    "Fruiticana takes the cold, smooth experience students already enjoy and builds it around fruit — not dairy ice cream with fruit mixed in.",
  cta: { label: "See flavors and nutrition", href: "/product" },
} as const;

export const startYoungCopy = {
  eyebrow: "Start young",
  title: "Foods we meet young can stay with us.",
  description:
    "Some foods stay with us because we first learned to enjoy them as children. Fruiticana’s vision is to introduce a positive experience with fruit during childhood that may continue as students grow.",
  hope: "Give students an enjoyable experience with fruit today, with the hope that their appreciation for fruit continues tomorrow.",
  whySchoolsTitle: "Why bring Fruiticana into schools?",
  whySchools:
    "Children spend a significant part of their day at school. Instead of waiting for families to discover Fruiticana somewhere else, the vision is to introduce the experience directly within schools — a place where students can discover another way to enjoy fruit. Schools are not merely a distribution channel. They are where students already are.",
} as const;

export const flavorsCopy = {
  eyebrow: "Flavors",
  title: "Find your fruit.",
  description:
    "These are original documented Fruiticana flavors, not a confirmed menu for today. A participating school would offer four at a time. Which four still needs to be confirmed.",
  cta: { label: "See all twelve flavors", href: "/product#flavors" },
} as const;

/** Homepage flavor bands, in visual order. */
export const homepageFlavorSlugs = [
  "strawberry",
  "mango",
  "blueberry",
  "orange",
  "pineapple",
  "cantaloupe",
] as const;

export const cupCopy = {
  eyebrow: "Product transparency",
  title: "Know what's in the cup.",
  description:
    "Schools can review ingredients, nutrition, servings, and flavors. The panels and ingredient list are historical records and still need current testing.",
  links: [
    {
      label: "Ingredients",
      href: "/product#ingredients",
      description: "The 2007 documented ingredient list.",
    },
    {
      label: "Nutrition",
      href: "/product#nutrition",
      description: "2008 Nutrition Facts panels for school review.",
    },
    {
      label: "Servings",
      href: "/product#servings",
      description: "The historical 4 oz laboratory serving.",
    },
    {
      label: "Flavors",
      href: "/product#flavors",
      description: "The original twelve fruit flavors.",
    },
  ],
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
    "Today the original idea is being brought back so students can have an exciting new way to eat fruit — through a proposed school partnership built around equipment Fruiticana provides and stays involved with.",
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
      body: "A renewed focus on students, enjoyable fruit, and a proposed school partnership.",
    },
  ],
} as const;

export const howCopy = {
  id: "how-it-works",
  eyebrow: "How it works",
  title: "Bringing Fruiticana to Your School",
  description:
    "Under the proposed model, Fruiticana provides the machines and stays involved with the school.",
  knownTitle: "What the proposed model already states",
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
  title: "Let's Bring Fruiticana to Your Students.",
  description:
    "Give students an exciting new way to experience fruit, and learn how the proposed Fruiticana school program could work at your school.",
  secondary: { label: "See how it works", href: "#how-it-works" },
} as const;
