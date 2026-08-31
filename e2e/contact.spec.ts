import { test, expect } from "@playwright/test";
import { fillSchoolInquiry } from "./helpers";

test.describe("contact form", () => {
  test("validates empty required fields", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Submit school inquiry" }).click();

    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(
      page.getByText("Please enter your school or organization."),
    ).toBeVisible();
    await expect(page.getByText("Please enter your email.")).toBeVisible();
    await expect(page.getByText("Please enter a message.")).toBeVisible();
    await expect(page.getByLabel(/^name/i)).toBeFocused();
  });

  test("rejects an invalid email and a short message", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/^name/i).fill("Sam");
    await page.getByLabel(/school \/ organization/i).fill("Lincoln Elementary");
    await page.getByLabel(/email/i).fill("not-an-email");
    await page.getByLabel(/message/i).fill("Hi there");
    await page.getByRole("button", { name: "Submit school inquiry" }).click();

    await expect(
      page.getByText("Please enter a valid email address."),
    ).toBeVisible();

    await page.getByLabel(/email/i).fill("sam@example.com");
    await page.getByRole("button", { name: "Submit school inquiry" }).click();
    await expect(page.getByText(/at least 10 characters/i)).toBeVisible();
  });

  test("submits a valid school inquiry without claiming delivery", async ({
    page,
  }) => {
    await page.goto("/contact");
    await fillSchoolInquiry(page, { interest: "School Cafeteria" });
    await page.getByRole("button", { name: "Submit school inquiry" }).click();

    const status = page.getByRole("status").filter({ hasText: /thanks, sam/i });
    await expect(status).toBeVisible();
    await expect(status).toContainText(/doesn.?t deliver messages/i);
  });

  test("preselects interest from the query string", async ({ page }) => {
    await page.goto("/contact?interest=Healthy%20Snack%20Program");
    await expect(page.getByLabel(/interest type/i)).toHaveValue(
      "Healthy Snack Program",
    );
  });

  test("shows coming-soon contact details without a store locator", async ({
    page,
  }) => {
    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: "What happens next" })).toBeVisible();
    await expect(page.getByText("Coming soon").first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /availability information is coming soon/i }),
    ).toHaveCount(0);
  });
});
