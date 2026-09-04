import { cn } from "@/lib/cn";
import { fmtAmount, fmtDv } from "@/lib/nutrition";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import type { Flavor } from "@/data/flavors";

function Row({
  label,
  amount,
  dv,
  indent,
  strong,
}: {
  label: string;
  amount: string;
  dv?: string;
  indent?: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between border-b border-line py-1.5 text-sm",
        indent && "pl-4",
      )}
    >
      <span className={cn(strong ? "font-semibold text-green-deep" : "text-ink")}>
        <span className={cn(strong && "font-bold")}>{label}</span>{" "}
        <span className="text-muted">{amount}</span>
      </span>
      {dv ? <span className="font-semibold text-green-deep">{dv}</span> : null}
    </div>
  );
}

export function NutritionPanel({ flavor }: { flavor: Flavor }) {
  const n = flavor.nutrition;
  return (
    <div className="rounded-xl2 border border-line bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className="h-3.5 w-3.5 rounded-full"
            style={{ backgroundColor: flavor.accent }}
            aria-hidden="true"
          />
          <h3 className="text-lg font-bold text-green-deep">{flavor.name}</h3>
        </div>
        <HistoricalNotice variant="inline" label="Historical (2008)" />
      </div>

      <div className="mt-4 border-t-4 border-green-deep pt-2">
        <p className="text-sm text-muted">
          Serving size <span className="font-semibold text-ink">{n.servingSize}</span>{" "}
          ({n.servingGrams} g)
        </p>

        <div className="mt-2 flex items-end justify-between border-b-4 border-green-deep pb-1">
          <span className="text-sm font-bold text-green-deep">Calories</span>
          <span className="font-sans text-4xl font-extrabold text-green-deep">
            {fmtAmount(n.calories)}
          </span>
        </div>

        <p className="mt-1 text-right text-xs text-muted">% Daily Value*</p>

        <div className="mt-1">
          <Row
            label="Total Fat"
            amount={fmtAmount(n.totalFatG, "g")}
            dv={fmtDv(n.totalFatDv)}
            strong
          />
          <Row
            label="Saturated Fat"
            amount={fmtAmount(n.saturatedFatG, "g")}
            dv={fmtDv(n.saturatedFatDv)}
            indent
          />
          <Row label="Trans Fat" amount={fmtAmount(n.transFatG, "g")} indent />
          <Row
            label="Cholesterol"
            amount={fmtAmount(n.cholesterolMg, "mg")}
            dv={fmtDv(n.cholesterolDv)}
            strong
          />
          <Row
            label="Sodium"
            amount={fmtAmount(n.sodiumMg, "mg")}
            dv={fmtDv(n.sodiumDv)}
            strong
          />
          <Row
            label="Total Carbohydrate"
            amount={fmtAmount(n.totalCarbG, "g")}
            dv={fmtDv(n.totalCarbDv)}
            strong
          />
          <Row
            label="Dietary Fiber"
            amount={fmtAmount(n.dietaryFiberG, "g")}
            dv={fmtDv(n.dietaryFiberDv)}
            indent
          />
          <Row label="Sugars" amount={fmtAmount(n.sugarsG, "g")} indent />
          <Row label="Protein" amount={fmtAmount(n.proteinG, "g")} strong />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-line pt-3 text-sm">
          <div className="flex justify-between">
            <span className="text-ink">Vitamin A</span>
            <span className="font-semibold text-green-deep">{fmtDv(n.vitaminADv)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink">Vitamin C</span>
            <span className="font-semibold text-green-deep">{fmtDv(n.vitaminCDv)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink">Calcium</span>
            <span className="font-semibold text-green-deep">{fmtDv(n.calciumDv)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink">Iron</span>
            <span className="font-semibold text-green-deep">{fmtDv(n.ironDv)}</span>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted">
          * Percent Daily Values are based on a 2,000 calorie diet.
          {n.calories === null
            ? " The calorie value for this flavor was not legible in the source document and is intentionally left blank."
            : ""}
        </p>
        <p className="mt-1 text-xs text-muted">
          Source: {n.lab}, report #{n.reportNumber} (2008). Historical analysis.
        </p>
      </div>
    </div>
  );
}
