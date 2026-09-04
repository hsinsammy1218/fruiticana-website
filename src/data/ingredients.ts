/**
 * Fruiticana school kitchen recipe ingredients.
 * Source lineup matches the original myfruiticana.com product pages.
 *
 * The line “Mar/az” is left unexpanded — the source is truncated
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
  { name: "Wheat protein", amount: "as needed" },
  {
    name: "Dextrose / starch",
    amount: "as needed",
    note: "Only if the fruit is not ripe enough",
  },
  { name: "Emulsifier (E471, E412)", amount: "as needed" },
  {
    name: "Agave nectar",
    amount: "as needed",
    note: "Only if the fruit is not ripe enough",
  },
  { name: "Citric acid", amount: "as needed" },
  { name: "Guar gum", amount: "as needed" },
  {
    name: "Mar/az",
    amount: "as needed",
    note: "As written on the product pages; wording not expanded here",
  },
];

/** Alias so older imports keep working. */
export const historicalIngredients = recipeIngredients;

export const recipeYield =
  "Yield: school single-serve cups (4 oz / ½ cup each)";

export const recipeServings = "Serves students in cafeteria or snack service";

export const recipeIntro =
  "A simple in-house recipe for schools: fruit-first ingredients your kitchen can work with — without specialty outside-dessert cost.";

export const recipeMethod = [
  "Start with fresh fruit as the base of the mix.",
  "Blend with the remaining ingredients until smooth.",
  "Freeze, then portion into student single-serve cups (4 oz).",
  "Serve in the cafeteria or snack program — made in-house, without specialty outside-dessert cost.",
] as const;

export const recipeIngredientsSource =
  "Ingredient lineup from Fruiticana product pages.";

export const recipeIngredientsNotice =
  "Confirm this recipe and allergen policy before school service. Wheat protein appears on the list — treat gluten carefully until your kitchen verifies the mix.";

/** @deprecated Prefer recipeIngredientsSource */
export const historicalIngredientsSource = recipeIngredientsSource;

/** @deprecated Prefer recipeIngredientsNotice */
export const historicalIngredientsNotice = recipeIngredientsNotice;

export const wheatProteinFlag =
  "Allergen note: wheat protein is on the recipe list. Confirm gluten status before serving students.";
