import { cn } from "@/lib/cn";
import {
  recipeIngredients,
  recipeIntro,
  recipeMethod,
  recipePrep,
  recipeServings,
  recipeYield,
  type RecipeIngredient,
} from "@/data/ingredients";

type IngredientRecipeProps = {
  className?: string;
  ingredients?: RecipeIngredient[];
};

/**
 * Cookbook-style recipe card for school kitchens.
 * Reuses brand tokens (cream, green/lime/yellow bar, rounded-xl2, shadow-soft)
 * and the shared recipe data module — not a second ingredients UI.
 */
export function IngredientRecipe({
  className,
  ingredients = recipeIngredients,
}: IngredientRecipeProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-xl2 border border-line bg-cream shadow-soft",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green via-lime to-yellow"
        aria-hidden="true"
      />

      <header className="border-b border-dashed border-line px-6 pb-6 pt-8 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
          School kitchen recipe
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-green-deep sm:text-4xl">
          Fruiticana Creamless Ice Cream
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {recipeIntro}
        </p>
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div>
            <dt className="font-semibold text-green-deep">Yield</dt>
            <dd className="text-muted">{recipeYield}</dd>
          </div>
          <div>
            <dt className="font-semibold text-green-deep">Service</dt>
            <dd className="text-muted">{recipeServings}</dd>
          </div>
          <div>
            <dt className="font-semibold text-green-deep">Prep</dt>
            <dd className="text-muted">{recipePrep}</dd>
          </div>
        </dl>
      </header>

      <div className="grid gap-0 lg:grid-cols-2">
        <section
          className="px-6 py-7 sm:px-10"
          aria-labelledby="recipe-ingredients-heading"
        >
          <h4
            id="recipe-ingredients-heading"
            className="font-display text-2xl font-bold text-green-deep"
          >
            Ingredients
          </h4>
          <ul className="mt-5">
            {ingredients.map((item) => (
              <li
                key={item.name}
                className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-x-4 border-b border-dashed border-line/90 py-3 last:border-b-0 sm:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <span className="pt-0.5 text-sm font-medium italic text-green-600">
                  {item.amount ?? "—"}
                </span>
                <span>
                  <span className="font-semibold text-green-deep">{item.name}</span>
                  {item.note ? (
                    <span className="mt-0.5 block text-sm leading-snug text-muted">
                      {item.note}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-t border-dashed border-line bg-white px-6 py-7 sm:px-10 lg:border-l lg:border-t-0"
          aria-labelledby="recipe-method-heading"
        >
          <h4
            id="recipe-method-heading"
            className="font-display text-2xl font-bold text-green-deep"
          >
            Method
          </h4>
          <ol className="mt-5 space-y-4">
            {recipeMethod.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/12 text-sm font-bold text-green-600"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <p className="pt-1.5 text-base leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
