import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

describe("MobileNavigation", () => {
  it("hides the drawer from assistive tech when closed", () => {
    const { container } = render(
      <MobileNavigation open={false} onClose={() => undefined} activeHref="/" />,
    );

    expect(container.firstChild).toBeNull();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("exposes a labeled dialog with primary links when open", () => {
    render(
      <MobileNavigation open onClose={() => undefined} activeHref="/schools" />,
    );

    expect(screen.getByRole("dialog", { name: "Site menu" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "For Schools" })).toHaveAttribute(
      "href",
      "/schools",
    );
    expect(screen.getByRole("link", { name: "For Schools" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Flavors & Nutrition" })).toHaveAttribute(
      "href",
      "/product",
    );
    expect(screen.getByRole("link", { name: "About Fruiticana" })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: "Resources" })).toHaveAttribute(
      "href",
      "/resources",
    );
    expect(
      screen.getByRole("link", { name: /request school information/i }),
    ).toHaveAttribute("href", "/contact");
    expect(screen.queryByRole("link", { name: "Learn" })).not.toBeInTheDocument();
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<MobileNavigation open onClose={onClose} activeHref="/" />);

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closes from the close button", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<MobileNavigation open onClose={onClose} activeHref="/" />);

    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
