import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact/ContactForm";

async function fillRequired(
  user: ReturnType<typeof userEvent.setup>,
  extras?: { message?: string; email?: string },
) {
  await user.type(screen.getByLabelText(/^name/i), "Sam");
  await user.type(screen.getByLabelText(/school or district/i), "Lincoln Elementary");
  await user.type(
    screen.getByLabelText(/email/i),
    extras?.email ?? "sam@example.com",
  );
  await user.type(
    screen.getByLabelText(/message/i),
    extras?.message ?? "We would like nutrition sheets for a cafeteria review.",
  );
}

describe("ContactForm", () => {
  it("shows validation errors when required fields are empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /request information/i }));

    expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
    expect(
      screen.getByText("Please enter your school or district."),
    ).toBeInTheDocument();
    expect(screen.getByText("Please enter your email.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a message.")).toBeInTheDocument();
    expect(screen.getByLabelText(/^name/i)).toHaveAttribute("aria-invalid", "true");
  });

  it("rejects an invalid email address", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequired(user, { email: "not-an-email" });
    await user.click(screen.getByRole("button", { name: /request information/i }));

    expect(
      screen.getByText("Please enter a valid email address."),
    ).toBeInTheDocument();
  });

  it("asks for a longer message when the note is too short", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequired(user, { message: "Hi there" });
    await user.click(screen.getByRole("button", { name: /request information/i }));

    expect(
      screen.getByText(/at least 10 characters/i),
    ).toBeInTheDocument();
  });

  it("defaults interest to School Food Service", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/interest type/i)).toHaveValue(
      "School Food Service",
    );
  });

  it("lets the visitor pick an interest type", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const select = screen.getByLabelText(/interest type/i);
    await user.selectOptions(select, "Cafeteria");
    expect(select).toHaveValue("Cafeteria");
  });

  it("preselects an interest when provided", () => {
    render(<ContactForm defaultInterest="Healthy Snack Program" />);
    expect(screen.getByLabelText(/interest type/i)).toHaveValue(
      "Healthy Snack Program",
    );
  });

  it("shows an honest success state that does not claim delivery", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequired(user);
    await user.click(screen.getByRole("button", { name: /request information/i }));

    const status = screen.getByRole("status");
    expect(status).toHaveTextContent(/thanks, sam/i);
    expect(status).toHaveTextContent(/doesn.?t deliver messages/i);
  });

  it("resets after submitting another inquiry", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequired(user);
    await user.click(screen.getByRole("button", { name: /request information/i }));
    await user.click(screen.getByRole("button", { name: /submit another inquiry/i }));

    expect(screen.getByLabelText(/^name/i)).toHaveValue("");
    expect(
      screen.getByRole("button", { name: /request information/i }),
    ).toBeInTheDocument();
  });

  it("silently succeeds when the honeypot is filled", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const honeypot = document.getElementById("website");
    expect(honeypot).toBeTruthy();
    await user.type(honeypot as HTMLInputElement, "https://spam.example");
    await user.click(screen.getByRole("button", { name: /request information/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/thanks/i);
  });
});
