import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FeatureCard } from "@/components/ui/FeatureCard";

describe("FeatureCard", () => {
  it("renders a scannable figure next to the title", () => {
    render(
      <FeatureCard
        icon="cup"
        figure="3 oz"
        title="Individual Portions"
        description="Historical school cups."
      />,
    );

    expect(screen.getByText("3 oz")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Individual Portions" })).toBeVisible();
    expect(screen.getByText("Historical school cups.")).toBeVisible();
  });
});
