import { test, expect } from "@playwright/test";
import { fillSchoolInquiry } from "./helpers";

test.describe("contact form", () => {
  test("validates empty required fields", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Request School Information" }).click();

    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter your school.")).toBeVisible();
    await expect(page.getByText("Please enter your email.")).toBeVisible();
    await expect(page.getByText("Please enter a message.")).toBeVisible();
    await expect(page.getByLabel(/^name/i)).toBeFocused();
  });

  test("rejects an invalid email and a short message", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/^name/i).fill("Sam");
    await page.getByRole("textbox", { name: /^school \*/i }).fill("Lincoln Elementary");
    await page.getByLabel(/email/i).fill("not-an-email");
    await page.getByLabel(/message/i).fill("Hi there");
    await page.getByRole("button", { name: "Request School Information" }).click();

    await expect(
      page.getByText("Please enter a valid email address."),
    ).toBeVisible();

    await page.getByLabel(/email/i).fill("sam@example.com");
    await page.getByRole("button", { name: "Request School Information" }).click();
    await expect(page.getByText(/at least 10 characters/i)).toBeVisible();
  });

  test("submits a valid school inquiry without claiming delivery", async ({
    page,
  }) => {
    await page.goto("/contact");
    await fillSchoolInquiry(page, { interest: "Cafeteria" });
    await page.getByRole("button", { name: "Request School Information" }).click();

    const status = page.getByRole("status").filter({ hasText: /thanks, sam/i });
    await expect(status).toBeVisible();
    await expect(status).toContainText(/doesn.?t deliver messages/i);
  });

  test("defaults interest to School Food Service", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel(/interest type/i)).toHaveValue(
      "School Food Service",
    );
  });

  test("honeypot submissions show success without validating empty fields", async ({
    page,
  }) => {
    await page.goto("/contact");
    await page.locator("#website").fill("https://spam.example", { force: true });
    await page.getByRole("button", { name: "Request School Information" }).click();
    await expect(page.getByRole("status")).toBeVisible();
    await expect(page.getByText("Please enter your name.")).toHaveCount(0);
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

  test("trims leading and trailing spaces on a valid inquiry", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/^name/i).fill("  Sam  ");
    await page.getByRole("textbox", { name: /^school \*/i }).fill("  Lincoln Elementary  ");
    await page.getByLabel(/email/i).fill("  sam@example.com  ");
    await page.getByLabel(/message/i).fill(
      "  We would like nutrition sheets for a cafeteria review.  ",
    );
    await page.getByRole("button", { name: "Request School Information" }).click();
    await expect(page.getByRole("status").filter({ hasText: /thanks, sam/i })).toBeVisible();
  });

  test("accepts special characters and a long but valid message", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/^name/i).fill("Sam O'Brien-王");
    await page.getByRole("textbox", { name: /^school \*/i }).fill('Lincoln & Washington #1');
    await page.getByLabel(/email/i).fill("sam+food@example.com");
    await page.getByLabel(/message/i).fill(
      `Please send 2008 panels, the 4 oz serving notes, and the "Creamless Ice Cream" story.\n${"Fruit flavor review. ".repeat(40)}`,
    );
    await page.getByRole("button", { name: "Request School Information" }).click();
    await expect(
      page.getByRole("status").filter({ hasText: /thanks, sam o'brien-王/i }),
    ).toBeVisible();
  });

  test("submits from the keyboard without a mouse", async ({ page }) => {
    await page.goto("/contact");
    await fillSchoolInquiry(page);
    await page.getByRole("button", { name: "Request School Information" }).press("Enter");
    await expect(page.getByRole("status").filter({ hasText: /thanks, sam/i })).toBeVisible();
  });

  test("ignores a second submit click after the first succeeds", async ({ page }) => {
    await page.goto("/contact");
    await fillSchoolInquiry(page);
    await page.getByRole("button", { name: "Request School Information" }).evaluate((button) => {
      (button as HTMLButtonElement).click();
      (button as HTMLButtonElement).click();
    });
    await expect(page.getByRole("status")).toHaveCount(1);
    await expect(page.getByRole("status")).toContainText(/doesn.?t deliver messages/i);
    await expect(
      page.getByRole("button", { name: "Request School Information" }),
    ).toHaveCount(0);
  });
});
