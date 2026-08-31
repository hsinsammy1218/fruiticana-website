import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NutritionSelector } from "@/components/nutrition/NutritionSelector";

describe("NutritionSelector", () => {
  it("defaults to the first flavor and shows historical facts", () => {
    render(<NutritionSelector />);

    expect(screen.getByRole("link", { name: "Apricot" })).toHaveAttribute(
      "aria-current",
      "true",
    );
    expect(screen.getByRole("heading", { name: "Apricot" })).toBeInTheDocument();
    expect(screen.getByText("Historical (2008)")).toBeInTheDocument();
    expect(screen.getByText(/northeast laboratories/i)).toBeInTheDocument();
  });

  it("deep-links a flavor from the selected slug", () => {
    render(<NutritionSelector selectedSlug="mango" />);

    expect(screen.getByRole("link", { name: "Mango" })).toHaveAttribute(
      "aria-current",
      "true",
    );
    expect(screen.getByRole("heading", { name: "Mango" })).toBeInTheDocument();
  });

  it("points each flavor at a shareable nutrition URL", () => {
    render(<NutritionSelector />);

    expect(screen.getByRole("link", { name: "Banana" })).toHaveAttribute(
      "href",
      "/product?flavor=banana#nutrition",
    );
  });
});
