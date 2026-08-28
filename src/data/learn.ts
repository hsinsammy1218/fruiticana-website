/**
 * Classroom learning content for /learn.
 *
 * This is educational material for schools: fruit science, nutrition-label
 * literacy, and a historical case study of Connecticut's Team Nutrition snack
 * pilot. It is NOT a current school-sales pitch, a lesson-plan product, or a
 * nutrition/medical claim. Historical program facts stay labeled as history.
 */

export type GradeBand = "elementary" | "middle" | "high";

export type FruitLesson = {
  slug: string;
  fruitName: string;
  /** Botanical or culinary category students can look up. */
  plantPart: string;
  family: string;
  typicalOrigin: string;
  classroomFact: string;
  tryThis: string;
};

export type ScienceCard = {
  title: string;
  body: string;
};

export type LabelTerm = {
  term: string;
  meaning: string;
};

export type DiscussionPrompt = {
  band: GradeBand;
  label: string;
  audience: string;
  questions: string[];
};

export type ClassroomActivity = {
  title: string;
  duration: string;
  materials: string;
  steps: string[];
  why: string;
};

export const learnIntro = {
  eyebrow: "For schools",
  title: "A free classroom resource about fruit, frozen desserts, and a real snack-pilot story",
  description:
    "Teachers and students can use this page to study fruit science, practice reading Nutrition Facts panels, and examine a documented Connecticut school snack tasting as a primary-source case study. Nothing here requires buying a product.",
} as const;

export const learnAudience = [
  {
    title: "Elementary",
    body: "Name fruits, sort plant parts, and build a sensory vocabulary (sweet, tart, creamy, icy).",
  },
  {
    title: "Middle school",
    body: "Map where fruits grow, compare historical labels, and model how freezing changes texture.",
  },
  {
    title: "High school",
    body: "Evaluate sources, distinguish claims from evidence, and discuss how schools choose snacks.",
  },
] as const;

export const learnModules = [
  {
    id: "fruits",
    title: "Twelve fruits to know",
    summary: "Botany, geography, and one classroom-ready fact for each original flavor.",
  },
  {
    id: "science",
    title: "Frozen dessert science",
    summary: "Ice crystals, texture, and why fruit-based frozen desserts feel different from juice.",
  },
  {
    id: "labels",
    title: "How to read a Nutrition Facts panel",
    summary: "Label literacy using Fruiticana's 2008 laboratory panels as dated examples.",
  },
  {
    id: "case-study",
    title: "Connecticut snack-pilot case study",
    summary: "A historical USDA Team Nutrition tasting, and how to read it as a source.",
  },
  {
    id: "classroom",
    title: "Discussion questions & activities",
    summary: "Grade-banded prompts and grocery-store labs that work without the product.",
  },
] as const;

export const fruitLessons: FruitLesson[] = [
  {
    slug: "apricot",
    fruitName: "Apricot",
    plantPart: "Drupe (stone fruit) — a fleshy fruit with one hard pit",
    family: "Rose family (Rosaceae)",
    typicalOrigin: "Central and East Asia; now grown in many temperate orchards",
    classroomFact:
      "Apricots are close relatives of peaches and plums. The fuzzy skin and single pit are clues that botanists group them as drupes.",
    tryThis:
      "Compare an apricot pit with a peach pit. How are the fruits similar besides color?",
  },
  {
    slug: "mango",
    fruitName: "Mango",
    plantPart: "Drupe — one large, flattened seed inside a fibrous pit",
    family: "Cashew family (Anacardiaceae)",
    typicalOrigin: "South Asia; widely grown in tropical climates",
    classroomFact:
      "A mango is a tree fruit. The stringy fibers you sometimes taste are part of how the flesh attaches to the pit.",
    tryThis:
      "On a world map, mark countries known for mango harvests. What climate do they share?",
  },
  {
    slug: "pineapple",
    fruitName: "Pineapple",
    plantPart: "Multiple fruit — many flowers fuse into one fruit",
    family: "Bromeliad family (Bromeliaceae)",
    typicalOrigin: "South America; now grown in tropical regions worldwide",
    classroomFact:
      "A pineapple is not a single berry. Each diamond on the skin started as a separate flower on one stalk.",
    tryThis:
      "Count the spiral rows on a pineapple skin. Why might a plant pack flowers that tightly?",
  },
  {
    slug: "banana",
    fruitName: "Banana",
    plantPart: "Berry (botanically) from a giant herb, not a woody tree",
    family: "Banana family (Musaceae)",
    typicalOrigin: "Southeast Asia; major crops in tropical countries",
    classroomFact:
      "Banana plants look like trees but are giant herbs. The 'trunk' is stacked leaf bases, which is why it is softer than wood.",
    tryThis:
      "Peel a banana and look for tiny brown specks. Those are remnants of ovules in a berry.",
  },
  {
    slug: "raisin",
    fruitName: "Raisin (dried grape)",
    plantPart: "Berry that has been dried — water removed, sugars concentrated",
    family: "Grape family (Vitaceae)",
    typicalOrigin: "Grapes from the Mediterranean and Central Asia; raisins made wherever grapes dry well",
    classroomFact:
      "Drying is a food-preservation method. Removing water slows spoilage and changes texture, sweetness, and shelf life.",
    tryThis:
      "Weigh grapes, then raisins. Why does a smaller handful of raisins taste sweeter?",
  },
  {
    slug: "strawberry",
    fruitName: "Strawberry",
    plantPart: "Accessory fruit — the red part is swollen receptacle; the seeds are achenes",
    family: "Rose family (Rosaceae)",
    typicalOrigin: "Garden strawberries are hybrids; wild relatives grow in the Americas and Europe",
    classroomFact:
      "The 'seeds' on the outside are tiny fruits called achenes. The red, juicy part is not the botanical fruit.",
    tryThis:
      "Gently scrape a few achenes off a strawberry. How is this different from an apple's seeds?",
  },
  {
    slug: "lemonade",
    fruitName: "Lemon",
    plantPart: "Hesperidium — a citrus berry with a leathery rind and juice vesicles",
    family: "Rue family (Rutaceae)",
    typicalOrigin: "Likely South or Southeast Asia; now grown in warm, sunny regions",
    classroomFact:
      "Fruiticana's Lemonade flavor is inspired by lemon. Lemons pack sour citric acid in juice sacs you can see when you cut one.",
    tryThis:
      "Taste a lemon drop of juice, then a slice of orange. Which tastes more sour, and why might that help a plant?",
  },
  {
    slug: "blueberry",
    fruitName: "Blueberry",
    plantPart: "True berry with many small seeds inside",
    family: "Heath family (Ericaceae)",
    typicalOrigin: "North America; related species grow in cool, acidic soils",
    classroomFact:
      "Blueberries often grow on shrubs in acidic soil. The dusty 'bloom' on the skin is a natural wax that slows water loss.",
    tryThis:
      "Rub a blueberry. Does the bloom wipe off? What job might that coating do?",
  },
  {
    slug: "grapefruit",
    fruitName: "Grapefruit",
    plantPart: "Hesperidium — a citrus hybrid",
    family: "Rue family (Rutaceae)",
    typicalOrigin: "Caribbean hybrid of pomelo and sweet orange; now grown in subtropical areas",
    classroomFact:
      "Grapefruit is a hybrid fruit. Crossing plants can create new flavors, colors, and sizes that neither parent had alone.",
    tryThis:
      "Compare grapefruit, orange, and lemon rinds. Which is thickest, and how might that protect the fruit?",
  },
  {
    slug: "apple",
    fruitName: "Apple",
    plantPart: "Pome — core with seeds, surrounded by the fleshy part we eat",
    family: "Rose family (Rosaceae)",
    typicalOrigin: "Central Asia (wild apple forests); now grown in temperate orchards worldwide",
    classroomFact:
      "The star you see when you cut an apple crosswise is the core. Each point of the star can hold a seed.",
    tryThis:
      "Cut an apple across the middle (not stem to blossom). Sketch the star and count the seed chambers.",
  },
  {
    slug: "orange",
    fruitName: "Orange",
    plantPart: "Hesperidium — segments filled with juice vesicles",
    family: "Rue family (Rutaceae)",
    typicalOrigin: "East Asia; now a major crop in warm climates",
    classroomFact:
      "An orange segment is a bundle of juice-filled hairs. Peeling along the membranes is following the fruit's built-in packaging.",
    tryThis:
      "Separate one orange segment and pop a juice vesicle. How is this different from apple flesh?",
  },
  {
    slug: "cantaloupe",
    fruitName: "Cantaloupe",
    plantPart: "Pepo (melon) — a berry with a thick rind, in the gourd family",
    family: "Gourd family (Cucurbitaceae)",
    typicalOrigin: "West Asia and Africa for related melons; now grown in warm summer gardens",
    classroomFact:
      "Cantaloupe is a melon, related to cucumbers and squash. The netted rind is a clue you are looking at a pepo, not a citrus fruit.",
    tryThis:
      "Compare cantaloupe seeds with cucumber seeds. What family traits do you notice?",
  },
];

export const scienceCards: ScienceCard[] = [
  {
    title: "States of matter in a frozen dessert",
    body: "A scoop is a mixture: solid ice crystals, some liquid water, and trapped air. Warm it in your mouth and the solids melt — a physical change, not a new substance.",
  },
  {
    title: "Why texture depends on crystal size",
    body: "Large ice crystals feel icy or gritty. Small crystals feel smoother. Stirring, freezing speed, and ingredients all influence crystal size. That is materials science you can taste.",
  },
  {
    title: "Fruit vs. dairy ice cream (as a concept)",
    body: "Traditional ice cream is built around milk fat and milk proteins. A fruit-based frozen dessert starts from fruit. The two can look similar in a cup and still be different food systems. Fruiticana was historically created as a lactose-free alternative — a design choice, not a medical recommendation.",
  },
  {
    title: "Water, sugar, and freezing point",
    body: "Sugar dissolved in water lowers the freezing point, so a sweet mixture stays scoopable at freezer temperatures instead of turning into a solid ice brick. This is the same idea behind salting icy roads, with sugar instead of salt.",
  },
];

export const labelTerms: LabelTerm[] = [
  {
    term: "Serving size",
    meaning:
      "The amount the rest of the numbers describe. Double the serving and you double the calories and nutrients listed.",
  },
  {
    term: "Calories",
    meaning:
      "A measure of energy in the serving. Labels do not tell you whether a food is 'healthy' by themselves.",
  },
  {
    term: "% Daily Value",
    meaning:
      "A comparison to a 2,000-calorie reference diet, not a personal target. 5% DV is low; 20% DV is high — a teaching rule of thumb, not medical advice.",
  },
  {
    term: "Total fat, carbohydrate, protein",
    meaning:
      "The three macronutrients. Fruit-based desserts often get most of their calories from carbohydrate (including natural fruit sugars).",
  },
  {
    term: "Vitamins and minerals",
    meaning:
      "Micronutrients listed as % Daily Value. Different fruits contribute different amounts — which is why comparing panels is a useful classroom exercise.",
  },
  {
    term: "Source and date",
    meaning:
      "Scientists always ask when data was collected and by whom. Fruiticana's panels are from Northeast Laboratories, Inc., report #20080318F (March 18, 2008). They are historical examples, not a current product label.",
  },
];

export const labelLiteracyNotes = [
  "A Nutrition Facts panel is a primary source with a method and a date. Treat it like a lab report, not a slogan.",
  "Banana's calorie line was illegible on the 2008 scan, so this site leaves it blank. That is scientific honesty: do not invent a number to make a chart look complete.",
  "Comparing two flavors is fair only when the serving size matches. These historical panels use a 1/2 cup (4 oz / 90 g) serving.",
  "Reading a label is not the same as judging a whole diet. One food is one data point.",
] as const;

export const caseStudy = {
  title: "Connecticut Team Nutrition Healthy Snack Pilot",
  period: "September 30, 2003 – September 30, 2005",
  summary:
    "Fruiticana was included in student taste tests and samplings for a Connecticut school snack pilot. The program ran through a USDA-funded Team Nutrition grant to the Connecticut State Department of Education. A December 2004 letter in Fruiticana's historical file describes that participation.",
  whatStudentsShouldNotice: [
    "The dates are specific. A grant with a start and end date is easier to check than a vague 'used in schools' claim.",
    "USDA Team Nutrition funded nutrition education and healthier school-food efforts. Inclusion in a tasting is not the same as a current USDA endorsement of a brand.",
    "Each pilot school — not the state — chose which products to purchase. Taste tests and buying decisions are different events.",
    "A later 2005–2006 localized Connecticut pilot included distribution to local schools and an independently owned parlor. That is a separate chapter from the Team Nutrition grant window.",
    "Past participation does not mean Fruiticana is in school cafeterias today. This site does not claim current school availability.",
  ],
  sourceQuestions: [
    "Who wrote the 2004 letter, and what was that person's job?",
    "What exactly did the letter say Fruiticana did — taste tests, sales, or both?",
    "What would you still need to know before calling this a 'school-approved snack'?",
    "How is a grant-funded pilot different from a statewide menu requirement?",
  ],
} as const;

export const discussionPrompts: DiscussionPrompt[] = [
  {
    band: "elementary",
    label: "Elementary (about grades 2–5)",
    audience: "Build fruit knowledge and careful observation.",
    questions: [
      "Which of the twelve fruits grow on trees, shrubs, or vines?",
      "What words describe how a frozen dessert feels — creamy, icy, sticky, cold?",
      "Why might a scientist leave a blank on a chart instead of guessing?",
      "If your class ran a fruit tasting, how would you make it fair for every fruit?",
    ],
  },
  {
    band: "middle",
    label: "Middle school (about grades 6–8)",
    audience: "Connect botany, geography, and data.",
    questions: [
      "A strawberry's 'seeds' are on the outside. How does that change what we mean by 'fruit'?",
      "Why do mango, pineapple, and banana prefer different climates than apple?",
      "Using two historical Nutrition Facts panels, which nutrients change the most between flavors? What might explain that?",
      "Design a school snack taste test: how many students, how do you hide brand names, and how do you record results?",
    ],
  },
  {
    band: "high",
    label: "High school (about grades 9–12)",
    audience: "Practice source evaluation and food-system thinking.",
    questions: [
      "The business PDF is both a historical record and a marketing document. How can both be true?",
      "What is the difference between a facility registration, a certification, and an endorsement?",
      "How should a school nutrition director weigh student taste, cost, storage, and evidence?",
      "If a company shares old lab data, what questions should journalists or students ask before repeating the numbers as current facts?",
    ],
  },
];

export const classroomActivities: ClassroomActivity[] = [
  {
    title: "Grocery-store fruit lab",
    duration: "40–50 minutes",
    materials: "As many of the twelve fruits as you can find, paper plates, pencils, a simple tasting chart",
    steps: [
      "Do not use the frozen dessert. Use real fruit so every student can participate.",
      "For each fruit, record color, smell, texture, and a 'sweet / tart / mild' rating.",
      "Match each sample to its plant-part type (drupe, berry, pome, hesperidium, pepo, dried berry).",
      "As a class, vote on which sensory words would describe a frozen version of that fruit.",
    ],
    why: "Sensory science and plant classification without requiring a branded product.",
  },
  {
    title: "Fruit origin map",
    duration: "30–40 minutes",
    materials: "World map, stickers or pins, the fruit cards on this page",
    steps: [
      "Place each fruit on a map using the 'typical origin' note — remind students that crops travel.",
      "Group fruits by climate (tropical, subtropical, temperate).",
      "Discuss why a Connecticut school in 2004 might still serve flavors inspired by tropical fruit.",
    ],
    why: "Geography, agriculture, and the idea that food systems are global.",
  },
  {
    title: "Label detectives",
    duration: "30 minutes",
    materials: "This site's Nutrition page (or printed panels), two flavor names assigned per pair",
    steps: [
      "Find serving size, calories, total carbohydrate, and vitamin C on each historical panel.",
      "Note the lab name, report number, and year. Write one sentence: 'This data is from ___ in ___.'",
      "Record any blank values. Discuss why a blank is more trustworthy than a guess.",
      "Share whether the two flavors differ more in vitamins or in calories.",
    ],
    why: "Nutrition-label literacy and respect for dated scientific sources.",
  },
  {
    title: "Design a fair school tasting",
    duration: "25–35 minutes",
    materials: "Notebook or whiteboard",
    steps: [
      "Read the Connecticut Team Nutrition case study on this page.",
      "List possible biases: brand logos, serving temperature, who speaks first, friends' opinions.",
      "Write a protocol: sample size, how samples are labeled, how votes are counted, who is excluded (allergies).",
      "Optional: actually taste two fruits using that protocol.",
    ],
    why: "Turns a historical snack pilot into a lesson on experimental design.",
  },
];

export const educatorGoals = [
  {
    title: "Science practices",
    body: "Observe, classify, record data, and refuse to invent missing measurements.",
  },
  {
    title: "Health literacy (not medical advice)",
    body: "Read a Nutrition Facts panel as a document with a serving size, a date, and limits.",
  },
  {
    title: "History and civics",
    body: "See how a USDA-funded state grant, local schools, and a small company interacted in 2003–2006.",
  },
  {
    title: "Media literacy",
    body: "Separate a documented tasting from a present-tense endorsement or a 'buy this' claim.",
  },
] as const;

export const classroomGuidelines = [
  "This page is free informational content. It is not an official curriculum, a USDA lesson plan, or a school-food contract.",
  "Do not present Fruiticana as a current cafeteria item unless your school has verified that independently.",
  "Skip medical, diet, or disease claims. Fruit science and label reading do not require them.",
  "Allergens for a current Fruiticana formula are not published here yet. For any tasting, use whole fruit you already serve and follow your school's allergy policy.",
] as const;

export function getFruitLesson(slug: string): FruitLesson | undefined {
  return fruitLessons.find((lesson) => lesson.slug === slug);
}
