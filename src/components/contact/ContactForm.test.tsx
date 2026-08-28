import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact/ContactForm";

describe("ContactForm", () => {
  it("shows validation errors when required fields are empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a message.")).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toHaveAttribute("aria-invalid", "true");
  });

  it("rejects an invalid email address", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Sam");
    await user.type(screen.getByLabelText(/email/i), "not-an-email");
    await user.type(screen.getByLabelText(/message/i), "We would like to stock Fruiticana.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText("Please enter a valid email address."),
    ).toBeInTheDocument();
  });

  it("asks for a longer message when the note is too short", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Sam");
    await user.type(screen.getByLabelText(/email/i), "sam@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hi there");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText(/at least 10 characters/i),
    ).toBeInTheDocument();
  });

  it("lets the visitor pick an inquiry type", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const select = screen.getByLabelText(/inquiry type/i);
    await user.selectOptions(select, "Retailers");
    expect(select).toHaveValue("Retailers");
  });

  it("preselects a school inquiry when provided", () => {
    render(<ContactForm defaultInquiry="Schools & Institutions" />);
    expect(screen.getByLabelText(/inquiry type/i)).toHaveValue(
      "Schools & Institutions",
    );
  });

  it("shows an honest success state that does not claim delivery", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Sam");
    await user.type(screen.getByLabelText(/email/i), "sam@example.com");
    await user.type(
      screen.getByLabelText(/message/i),
      "We would like to stock Fruiticana in our shop.",
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    const status = screen.getByRole("status");
    expect(status).toHaveTextContent(/thanks, sam/i);
    expect(status).toHaveTextContent(/doesn.?t deliver messages/i);
  });

  it("resets after writing another message", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Sam");
    await user.type(screen.getByLabelText(/email/i), "sam@example.com");
    await user.type(
      screen.getByLabelText(/message/i),
      "We would like to stock Fruiticana in our shop.",
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));
    await user.click(screen.getByRole("button", { name: /write another message/i }));

    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("silently succeeds when the honeypot is filled", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const honeypot = document.getElementById("website");
    expect(honeypot).toBeTruthy();
    await user.type(honeypot as HTMLInputElement, "https://spam.example");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/thanks/i);
  });
});
