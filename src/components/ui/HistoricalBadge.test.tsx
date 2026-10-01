import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";

describe("HistoricalBadge", () => {
  it("uses light on-deep text on the accent (berry) tone", () => {
    const { container } = render(<HistoricalBadge label="School documentation" />);
    const badge = screen.getByText("School documentation");
    expect(badge.className).toMatch(/bg-berry/);
    expect(badge.className).toMatch(/text-on-deep/);
    expect(badge.className).not.toMatch(/text-green-deep/);
    const dot = container.querySelector("[aria-hidden='true']");
    expect(dot?.className).toMatch(/bg-cream/);
  });

  it("uses dark green-deep text on the surface (card) tone for AA contrast", () => {
    const { container } = render(
      <HistoricalBadge label="Nutrition analysis" tone="surface" />,
    );
    const badge = screen.getByText("Nutrition analysis");
    expect(badge.className).toMatch(/bg-card\/90/);
    expect(badge.className).toMatch(/text-green-deep/);
    expect(badge.className).not.toMatch(/text-on-deep/);
    const dot = container.querySelector("[aria-hidden='true']");
    expect(dot?.className).toMatch(/bg-berry/);
  });
});
