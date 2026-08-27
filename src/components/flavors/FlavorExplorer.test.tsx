import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FlavorExplorer } from "@/components/flavors/FlavorExplorer";

describe("FlavorExplorer", () => {
  it("lists all 12 flavors by default", () => {
    render(<FlavorExplorer />);

    expect(screen.getByText("Showing 12 flavors.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /mango/i })).toHaveAttribute(
      "href",
      "/flavors/mango",
    );
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("filters by fruit family and announces the count", async () => {
    const user = userEvent.setup();
    render(<FlavorExplorer />);

    await user.click(screen.getByRole("button", { name: "Citrus" }));

    expect(screen.getByRole("button", { name: "Citrus" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText("Showing 3 flavors in Citrus.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /lemonade/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /grapefruit/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /orange/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /mango/i })).not.toBeInTheDocument();
  });

  it("can return to the full lineup", async () => {
    const user = userEvent.setup();
    render(<FlavorExplorer />);

    await user.click(screen.getByRole("button", { name: "Melon" }));
    expect(screen.getByText("Showing 1 flavor in Melon.")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "All" }));
    expect(screen.getByText("Showing 12 flavors.")).toBeInTheDocument();
  });
});
