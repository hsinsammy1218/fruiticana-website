/**
 * Flavor catalog.
 *
 * The 12 flavors match the original Fruiticana lineup documented in the
 * 2003-2011 business PDF: Apricot, Mango, Pineapple, Banana, Raisin,
 * Strawberry, Lemonade, Blueberry, Grapefruit, Apple, Orange, Cantaloupe.
 *
 * Nutrition values are transcribed from the historical laboratory analysis in
 * that PDF (Northeast Laboratories, Inc., report #20080318F, dated 2008-03-18).
 * They are labeled HISTORICAL everywhere in the UI and MUST be re-verified
 * against the current formulation before being published as a product label.
 *
 * Images are intentionally replaceable placeholder artwork
 * (`/images/flavors/<slug>.svg`). TODO: replace with real product photography
 * (WebP) once available; then set alt text from `imageAlt`.
 */

export type FlavorCategory =
  | "Tropical"
  | "Berry"
  | "Citrus"
  | "Orchard"
  | "Melon";

export type FlavorStatus = "original";

export type NutritionStatus = "historical-analysis";

/** A single Nutrition Facts panel value that may be missing in the source. */
export type Amount = number | "<1" | null;

export type NutritionFacts = {
  source: "historical-lab";
  lab: string;
  reportNumber: string;
  reportDate: string; // ISO date
  servingSize: string;
  servingGrams: number;
  calories: Amount;
  caloriesFromFat: Amount;
  totalFatG: number;
  totalFatDv: number;
  saturatedFatG: number;
  saturatedFatDv: number;
  transFatG: number;
  cholesterolMg: number;
  cholesterolDv: number;
  sodiumMg: number;
  sodiumDv: number;
  totalCarbG: number;
  totalCarbDv: number;
  dietaryFiberG: Amount;
  dietaryFiberDv: number;
  sugarsG: number;
  proteinG: Amount;
  vitaminADv: number;
  vitaminCDv: number;
  calciumDv: number;
  ironDv: number;
};

export type Flavor = {
  slug: string;
  name: string;
  category: FlavorCategory;
  /** Fruit accent color; used contextually, never as global chrome. */
  accent: string;
  tagline: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  status: FlavorStatus;
  nutritionStatus: NutritionStatus;
  nutrition: NutritionFacts;
};

const LAB = {
  source: "historical-lab",
  lab: "Northeast Laboratories, Inc.",
  reportNumber: "20080318F",
  reportDate: "2008-03-18",
  servingSize: "1/2 cup (4 oz)",
  servingGrams: 90,
} as const;

const flavorCatalog: Omit<Flavor, "nutritionStatus">[] = [
  {
    slug: "apricot",
    name: "Apricot",
    category: "Orchard",
    accent: "#F2A65A",
    tagline: "Soft, sun-warmed orchard fruit.",
    description: "Mellow, honeyed apricot with a gentle tang.",
    detail:
      "A smooth scoop built around the soft, sun-ripened sweetness of apricot - delicate, golden, and never heavy.",
    image: "/images/flavors/apricot.svg",
    imageAlt: "Apricot Fruiticana frozen dessert",
    featured: false,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 100,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 10,
      sodiumDv: 0,
      totalCarbG: 25,
      totalCarbDv: 8,
      dietaryFiberG: "<1",
      dietaryFiberDv: 0,
      sugarsG: 14,
      proteinG: 0,
      vitaminADv: 25,
      vitaminCDv: 15,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "mango",
    name: "Mango",
    category: "Tropical",
    accent: "#F5B942",
    tagline: "Golden and tropical.",
    description: "Ripe, juicy mango with a velvety finish.",
    detail:
      "Peak-season mango blended into a silky frozen scoop - bright, tropical, and endlessly refreshing.",
    image: "/images/flavors/mango.svg",
    imageAlt: "Mango Fruiticana frozen dessert",
    featured: true,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 150,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 15,
      sodiumDv: 0,
      totalCarbG: 36,
      totalCarbDv: 12,
      dietaryFiberG: 1,
      dietaryFiberDv: 4,
      sugarsG: 26,
      proteinG: 0,
      vitaminADv: 10,
      vitaminCDv: 10,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    category: "Tropical",
    accent: "#F3C53F",
    tagline: "Bright, tangy, tropical.",
    description: "Sun-ripe pineapple with a lively snap.",
    detail:
      "Juicy pineapple turns tart-sweet and creamy - a tropical scoop with a refreshing edge.",
    image: "/images/flavors/pineapple.svg",
    imageAlt: "Pineapple Fruiticana frozen dessert",
    featured: true,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 130,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 15,
      sodiumDv: 0,
      totalCarbG: 33,
      totalCarbDv: 11,
      dietaryFiberG: 0,
      dietaryFiberDv: 0,
      sugarsG: 27,
      proteinG: 0,
      vitaminADv: 0,
      vitaminCDv: 10,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "banana",
    name: "Banana",
    category: "Tropical",
    accent: "#E9C64E",
    tagline: "Smooth and mellow.",
    description: "Creamy banana, naturally sweet.",
    detail:
      "Ripe banana gives this scoop a naturally smooth, mellow sweetness - comforting and easy to love.",
    image: "/images/flavors/banana.svg",
    imageAlt: "Banana Fruiticana frozen dessert",
    featured: false,
    status: "original",
    nutrition: {
      ...LAB,
      // Calorie value is not legible in the source scan; left null rather than guessed.
      calories: null,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 10,
      sodiumDv: 0,
      totalCarbG: 28,
      totalCarbDv: 9,
      dietaryFiberG: 3,
      dietaryFiberDv: 12,
      sugarsG: 20,
      proteinG: 0,
      vitaminADv: 0,
      vitaminCDv: 15,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "raisin",
    name: "Raisin",
    category: "Orchard",
    accent: "#6E4B57",
    tagline: "Deep and naturally sweet.",
    description: "Rich, mellow sweetness from the vine.",
    detail:
      "An unexpected favorite - the deep, caramel-like sweetness of raisin in a smooth frozen scoop.",
    image: "/images/flavors/raisin.svg",
    imageAlt: "Raisin Fruiticana frozen dessert",
    featured: false,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 100,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 20,
      sodiumDv: 1,
      totalCarbG: 24,
      totalCarbDv: 8,
      dietaryFiberG: 4,
      dietaryFiberDv: 16,
      sugarsG: 16,
      proteinG: "<1",
      vitaminADv: 0,
      vitaminCDv: 2,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "strawberry",
    name: "Strawberry",
    category: "Berry",
    accent: "#EF5B5B",
    tagline: "Ripe, red, and classic.",
    description: "Bright, ripe strawberry - a timeless favorite.",
    detail:
      "Ripe strawberries make a bright, fragrant scoop that tastes like the best of summer.",
    image: "/images/flavors/strawberry.svg",
    imageAlt: "Strawberry Fruiticana frozen dessert",
    featured: true,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 130,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 15,
      sodiumDv: 0,
      totalCarbG: 32,
      totalCarbDv: 11,
      dietaryFiberG: 2,
      dietaryFiberDv: 8,
      sugarsG: 15,
      proteinG: 0,
      vitaminADv: 0,
      vitaminCDv: 90,
      calciumDv: 0,
      ironDv: 2,
    },
  },
  {
    slug: "lemonade",
    name: "Lemonade",
    category: "Citrus",
    accent: "#EBD64E",
    tagline: "Cool and zesty.",
    description: "Zesty lemonade with a refreshing bite.",
    detail:
      "All the zip of a cold glass of lemonade, frozen into a bright, palate-cleansing scoop.",
    image: "/images/flavors/lemonade.svg",
    imageAlt: "Lemonade Fruiticana frozen dessert",
    featured: false,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 120,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 15,
      sodiumDv: 0,
      totalCarbG: 30,
      totalCarbDv: 10,
      dietaryFiberG: 0,
      dietaryFiberDv: 0,
      sugarsG: 22,
      proteinG: 0,
      vitaminADv: 2,
      vitaminCDv: 50,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "blueberry",
    name: "Blueberry",
    category: "Berry",
    accent: "#5865A8",
    tagline: "Deep berry, gently sweet.",
    description: "Plump blueberries, cool and mellow.",
    detail:
      "Sweet-tart blueberries fold into a smooth, deep-purple scoop with a mellow berry finish.",
    image: "/images/flavors/blueberry.svg",
    imageAlt: "Blueberry Fruiticana frozen dessert",
    featured: true,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 140,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 15,
      sodiumDv: 0,
      totalCarbG: 34,
      totalCarbDv: 11,
      dietaryFiberG: 2,
      dietaryFiberDv: 8,
      sugarsG: 20,
      proteinG: 0,
      vitaminADv: 0,
      vitaminCDv: 10,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "grapefruit",
    name: "Grapefruit",
    category: "Citrus",
    accent: "#F2795F",
    tagline: "Crisp and refreshing.",
    description: "Bittersweet grapefruit, bright and clean.",
    detail:
      "Ruby grapefruit brings a crisp, bittersweet brightness - refreshing and grown-up.",
    image: "/images/flavors/grapefruit.svg",
    imageAlt: "Grapefruit Fruiticana frozen dessert",
    featured: false,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 110,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 10,
      sodiumDv: 0,
      totalCarbG: 28,
      totalCarbDv: 9,
      dietaryFiberG: 1,
      dietaryFiberDv: 4,
      sugarsG: 20,
      proteinG: 0,
      vitaminADv: 0,
      vitaminCDv: 50,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "apple",
    name: "Apple",
    category: "Orchard",
    accent: "#D0453E",
    tagline: "Crisp and orchard-fresh.",
    description: "Cool, crisp apple - clean and simple.",
    detail:
      "Crisp orchard apple in a clean, refreshing scoop - simple and satisfying.",
    image: "/images/flavors/apple.svg",
    imageAlt: "Apple Fruiticana frozen dessert",
    featured: false,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 100,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 10,
      sodiumDv: 0,
      totalCarbG: 25,
      totalCarbDv: 8,
      dietaryFiberG: 0,
      dietaryFiberDv: 0,
      sugarsG: 16,
      proteinG: 0,
      vitaminADv: 0,
      vitaminCDv: 0,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "orange",
    name: "Orange",
    category: "Citrus",
    accent: "#F08A24",
    tagline: "Sweet and citrus-bright.",
    description: "Juicy orange, sweet and sunny.",
    detail:
      "Sweet, juicy orange delivers a sunny citrus scoop that's bright from the first bite.",
    image: "/images/flavors/orange.svg",
    imageAlt: "Orange Fruiticana frozen dessert",
    featured: true,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 120,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 15,
      sodiumDv: 0,
      totalCarbG: 30,
      totalCarbDv: 10,
      dietaryFiberG: 0,
      dietaryFiberDv: 0,
      sugarsG: 21,
      proteinG: 0,
      vitaminADv: 2,
      vitaminCDv: 50,
      calciumDv: 0,
      ironDv: 0,
    },
  },
  {
    slug: "cantaloupe",
    name: "Cantaloupe",
    category: "Melon",
    accent: "#F0A15A",
    tagline: "Cool melon, softly sweet.",
    description: "Ripe cantaloupe, mellow and juicy.",
    detail:
      "Ripe cantaloupe makes a softly sweet, juicy melon scoop - cool and unexpectedly elegant.",
    image: "/images/flavors/cantaloupe.svg",
    imageAlt: "Cantaloupe Fruiticana frozen dessert",
    featured: true,
    status: "original",
    nutrition: {
      ...LAB,
      calories: 120,
      caloriesFromFat: 0,
      totalFatG: 0,
      totalFatDv: 0,
      saturatedFatG: 0,
      saturatedFatDv: 0,
      transFatG: 0,
      cholesterolMg: 0,
      cholesterolDv: 0,
      sodiumMg: 25,
      sodiumDv: 1,
      totalCarbG: 28,
      totalCarbDv: 9,
      dietaryFiberG: 0,
      dietaryFiberDv: 0,
      sugarsG: 21,
      proteinG: 0,
      vitaminADv: 40,
      vitaminCDv: 40,
      calciumDv: 0,
      ironDv: 0,
    },
  },
];

export const flavors: Flavor[] = flavorCatalog.map((flavor) => ({
  ...flavor,
  nutritionStatus: "historical-analysis",
}));

export const flavorSlugs = flavors.map((f) => f.slug);

export const featuredFlavors = flavors.filter((f) => f.featured);

export const flavorCategories = Array.from(
  new Set(flavors.map((f) => f.category)),
) as FlavorCategory[];

export function getFlavor(slug: string): Flavor | undefined {
  return flavors.find((f) => f.slug === slug);
}

/** Related flavors: same category first, then fill from the rest. */
export function getRelatedFlavors(slug: string, count = 3): Flavor[] {
  const current = getFlavor(slug);
  if (!current) return [];
  const sameCategory = flavors.filter(
    (f) => f.slug !== slug && f.category === current.category,
  );
  const others = flavors.filter(
    (f) => f.slug !== slug && f.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}
