import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FeatureCard } from "@/components/ui/FeatureCard";

describe("FeatureCard", () => {
  it("leads with a scannable figure before the title", () => {
    render(
      <FeatureCard
        icon="cup"
        figure="4 oz"
        title="Single-serve cups"
        description="Individual portions for a cafeteria line."
      />,
    );

    expect(screen.getByText("4 oz")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Single-serve cups" })).toBeVisible();
    expect(screen.getByText("Individual portions for a cafeteria line.")).toBeVisible();
  });
});
