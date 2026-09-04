import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FeatureCard } from "@/components/ui/FeatureCard";

describe("FeatureCard", () => {
  it("keeps the figure and title in a compact readable stack", () => {
    render(
      <FeatureCard
        icon="cup"
        figure="4 oz"
        title="Student portions"
        description="Individual cups for meal or snack service."
      />,
    );

    expect(screen.getByText("4 oz")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Student portions" })).toBeVisible();
    expect(screen.getByText("Individual cups for meal or snack service.")).toBeVisible();
  });
});
