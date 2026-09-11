import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NutritionPanel } from "@/components/nutrition/NutritionPanel";
import { getFlavor } from "@/data/flavors";

describe("NutritionPanel", () => {
  it("renders the full 2008 Nutrition Facts panel for a flavor", () => {
    const mango = getFlavor("mango");
    if (!mango) throw new Error("mango flavor missing");

    render(<NutritionPanel flavor={mango} />);

    expect(screen.getByRole("heading", { name: "Mango" })).toBeInTheDocument();
    expect(screen.getByText("Nutrition analysis (2008)")).toBeInTheDocument();
    expect(screen.getByText(/1\/2 cup \(4 oz\)/)).toBeInTheDocument();
    expect(screen.getByText("Calories")).toBeInTheDocument();
    expect(screen.getByText("150")).toBeInTheDocument();
    expect(screen.getByText(/calories from fat/i)).toBeInTheDocument();
    expect(screen.getByText("Total Fat")).toBeInTheDocument();
    expect(screen.getByText("Saturated Fat")).toBeInTheDocument();
    expect(screen.getByText("Trans Fat")).toBeInTheDocument();
    expect(screen.getByText("Cholesterol")).toBeInTheDocument();
    expect(screen.getByText("Sodium")).toBeInTheDocument();
    expect(screen.getByText("Total Carbohydrate")).toBeInTheDocument();
    expect(screen.getByText("Dietary Fiber")).toBeInTheDocument();
    expect(screen.getByText("Sugars")).toBeInTheDocument();
    expect(screen.getByText("Protein")).toBeInTheDocument();
    expect(screen.getByText("Vitamin A")).toBeInTheDocument();
    expect(screen.getByText("Vitamin C")).toBeInTheDocument();
    expect(screen.getByText("Calcium")).toBeInTheDocument();
    expect(screen.getByText("Iron")).toBeInTheDocument();
    expect(screen.getByText(/independent 2008 analysis/i)).toBeInTheDocument();
  });

  it("leaves Banana calories blank rather than guessing", () => {
    const banana = getFlavor("banana");
    if (!banana) throw new Error("banana flavor missing");

    render(<NutritionPanel flavor={banana} />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    expect(screen.getByText("\u2014")).toBeInTheDocument();
    expect(
      screen.getByText(/calorie value for this flavor was not legible/i),
    ).toBeInTheDocument();
  });
});
