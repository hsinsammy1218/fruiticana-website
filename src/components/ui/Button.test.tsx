import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/Button";
import { SkipLink } from "@/components/layout/SkipLink";

describe("Button", () => {
  it("renders a native button by default", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  it("renders a link when given an href", () => {
    render(<Button href="/contact">Request School Information</Button>);
    expect(
      screen.getByRole("link", { name: "Request School Information" }),
    ).toHaveAttribute("href", "/contact");
  });
});

describe("SkipLink", () => {
  it("points at the main landmark", () => {
    render(<SkipLink />);
    expect(
      screen.getByRole("link", { name: "Skip to main content" }),
    ).toHaveAttribute("href", "#main");
  });
});
