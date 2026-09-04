import { cn } from "@/lib/cn";
import {
  recipeIngredients,
  recipeIntro,
  recipeYield,
  type RecipeIngredient,
} from "@/data/ingredients";

type IngredientRecipeProps = {
  className?: string;
  ingredients?: RecipeIngredient[];
};

/**
 * Recipe-style ingredient card for school kitchens — clearer than a stack of pills.
 */
export function IngredientRecipe({
  className,
  ingredients = recipeIngredients,
}: IngredientRecipeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.5rem] border border-line bg-cream-100 shadow-soft",
        className,
      )}
    >
      <div className="border-b border-line bg-white px-6 py-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
          School kitchen recipe
        </p>
        <h3 className="mt-2 text-2xl font-extrabold text-green-deep">
          Fruiticana Creamless Ice Cream
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {recipeIntro}
        </p>
        <p className="mt-3 text-sm font-semibold text-green-deep">{recipeYield}</p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="px-6 py-6 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-600">
            Ingredients
          </p>
          <ul className="mt-4 divide-y divide-line/80">
            {ingredients.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-green-deep">{item.name}</p>
                  {item.note ? (
                    <p className="mt-0.5 text-sm leading-snug text-muted">{item.note}</p>
                  ) : null}
                </div>
                {item.amount ? (
                  <p className="shrink-0 text-sm font-medium tabular-nums text-green-600">
                    {item.amount}
                  </p>
                ) : (
                  <span className="shrink-0 text-sm text-muted/70" aria-hidden="true">
                    —
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line bg-white px-6 py-6 sm:px-8 lg:border-l lg:border-t-0">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-600">
            How to use it
          </p>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
            <li className="flex gap-3">
              <span className="font-bold text-green-deep">1.</span>
              <span>Start with fresh fruit as the base of the mix.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-deep">2.</span>
              <span>
                Blend with the remaining recipe ingredients until smooth.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-deep">3.</span>
              <span>
                Freeze and portion into student single-serve cups (4 oz).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-deep">4.</span>
              <span>
                Serve in the cafeteria or snack program — made in-house, without
                specialty outside-dessert cost.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
