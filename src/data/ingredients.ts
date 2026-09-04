/**
 * Fruiticana ingredient list for school kitchen / recipe review.
 * Source lineup matches the original myfruiticana.com product pages.
 *
 * The archived line “Mar/az” is left unexpanded — the source is truncated
 * and must not be guessed.
 */

export type RecipeIngredient = {
  name: string;
  /** Optional recipe-style amount when known; otherwise omit. */
  amount?: string;
  /** Short note shown beside the ingredient (e.g. “if fruit isn’t ripe”). */
  note?: string;
};

/** @deprecated Prefer recipeIngredients; kept for existing imports/tests. */
export type HistoricalIngredient = RecipeIngredient;

export const recipeIngredients: RecipeIngredient[] = [
  { name: "Fresh fruit", amount: "main base" },
  { name: "Wheat protein" },
  {
    name: "Dextrose / starch",
    note: "Only if the fruit is not ripe enough",
  },
  { name: "Emulsifier (E471, E412)" },
  {
    name: "Agave nectar",
    note: "Only if the fruit is not ripe enough",
  },
  { name: "Citric acid" },
  { name: "Guar gum" },
  {
    name: "Mar/az",
    note: "As written on the original product pages; wording not expanded here",
  },
];

/** Alias so older imports keep working. */
export const historicalIngredients = recipeIngredients;

export const recipeYield =
  "Makes creamless frozen dessert for school single-serve cups (4 oz).";

export const recipeIntro =
  "A simple in-house recipe for schools: fruit-first ingredients your kitchen can work with — without specialty outside-dessert cost.";

export const historicalIngredientsSource =
  "Ingredient lineup from Fruiticana product pages on myfruiticana.com (Wayback Machine, March 2007).";

export const historicalIngredientsNotice =
  "Confirm this recipe against your current Fruiticana formulation and allergen policy before school service. Wheat protein appears on the list, so treat gluten carefully until your kitchen verifies the current mix.";

export const wheatProteinFlag =
  "Wheat protein is on the recipe list. Confirm gluten status with your current Fruiticana formulation before serving students.";
