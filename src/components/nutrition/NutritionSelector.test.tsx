import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { NutritionSelector } from "@/components/nutrition/NutritionSelector";

const { replace, searchParams } = vi.hoisted(() => ({
  replace: vi.fn(),
  searchParams: new URLSearchParams(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace }),
  usePathname: () => "/nutrition",
  useSearchParams: () => searchParams,
}));

describe("NutritionSelector", () => {
  beforeEach(() => {
    replace.mockClear();
    searchParams.delete("flavor");
  });

  it("defaults to the first flavor and shows historical facts", () => {
    render(<NutritionSelector />);

    expect(screen.getByRole("button", { name: "Apricot" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(
      screen.getByRole("heading", { name: "Apricot" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Historical (2008)")).toBeInTheDocument();
    expect(screen.getByText(/northeast laboratories/i)).toBeInTheDocument();
  });

  it("deep-links a flavor from the query string", () => {
    searchParams.set("flavor", "mango");
    render(<NutritionSelector />);

    expect(screen.getByRole("button", { name: "Mango" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("heading", { name: "Mango" })).toBeInTheDocument();
  });

  it("updates the shareable URL when another flavor is chosen", async () => {
    const user = userEvent.setup();
    render(<NutritionSelector />);

    await user.click(screen.getByRole("button", { name: "Banana" }));

    expect(replace).toHaveBeenCalledWith("/nutrition?flavor=banana", {
      scroll: false,
    });
    expect(screen.getByRole("heading", { name: "Banana" })).toBeInTheDocument();
    expect(
      screen.getByText(/calorie value for this flavor was not legible/i),
    ).toBeInTheDocument();
  });
});
