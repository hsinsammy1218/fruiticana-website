import { test, expect } from "@playwright/test";

test.describe("contact form", () => {
  test("validates empty required fields", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter your email.")).toBeVisible();
    await expect(page.getByText("Please enter a message.")).toBeVisible();
    await expect(page.getByLabel(/name/i)).toBeFocused();
  });

  test("rejects an invalid email and a short message", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/name/i).fill("Sam");
    await page.getByLabel(/email/i).fill("not-an-email");
    await page.getByLabel(/message/i).fill("Hi there");
    await page.getByRole("button", { name: "Send message" }).click();

    await expect(
      page.getByText("Please enter a valid email address."),
    ).toBeVisible();

    await page.getByLabel(/email/i).fill("sam@example.com");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText(/at least 10 characters/i)).toBeVisible();
  });

  test("submits a valid inquiry without claiming delivery", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/name/i).fill("Sam");
    await page.getByLabel(/email/i).fill("sam@example.com");
    await page.getByLabel(/inquiry type/i).selectOption("Retailers");
    await page.getByLabel(/message/i).fill(
      "We would like to stock Fruiticana in our shop.",
    );
    await page.getByRole("button", { name: "Send message" }).click();

    const status = page.getByRole("status").filter({ hasText: /thanks, sam/i });
    await expect(status).toBeVisible();
    await expect(status).toContainText(/doesn.?t deliver messages/i);
  });

  test("shows coming-soon contact details and store locator", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByText("Coming soon").first()).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Availability information is coming soon",
      }),
    ).toBeVisible();
  });
});
