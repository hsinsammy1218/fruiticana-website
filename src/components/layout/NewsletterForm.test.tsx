import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

describe("NewsletterForm", () => {
  it("shows an error for an invalid email", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);

    await user.type(screen.getByLabelText(/stay fresh/i), "not-an-email");
    await user.click(screen.getByRole("button", { name: /notify me/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Please enter a valid email address.",
    );
  });

  it("acknowledges a valid email without claiming a live signup", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);

    await user.type(screen.getByLabelText(/stay fresh/i), "you@example.com");
    await user.click(screen.getByRole("button", { name: /notify me/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      /sign-ups aren't live yet/i,
    );
  });
});
