import { test, expect } from "@playwright/test";
import { fillSchoolInquiry } from "./helpers";

test.describe("contact form", () => {
  test("validates empty required fields", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Request School Information" }).click();

    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter your school.")).toBeVisible();
    await expect(page.getByText("Please enter your email.")).toBeVisible();
    await expect(page.getByText("Please choose your role.")).toBeVisible();
    await expect(page.getByText("Please enter a city.")).toBeVisible();
    await expect(page.getByText("Please enter a state.")).toBeVisible();
    await expect(page.getByLabel(/^name/i)).toBeFocused();
  });

  test("rejects an invalid email and a short message", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/^name/i).fill("Sam");
    await page.getByRole("textbox", { name: /^school \/ organization/i }).fill("Lincoln Elementary");
    await page.getByLabel(/^role/i).selectOption("Principal");
    await page.getByLabel(/^city/i).fill("Waterbury");
    await page.getByLabel(/^state/i).fill("CT");
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
    await expect(status).toContainText(/does not send messages yet/i);
    await expect(status).toContainText(/fruiticana1@hotmail\.com/i);
  });

  test("defaults interest to School Food Service", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel(/reason for inquiry/i)).toHaveValue(
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
    await expect(page.getByLabel(/reason for inquiry/i)).toHaveValue(
      "Healthy Snack Program",
    );
  });

  test("shows published contact details without a store locator", async ({
    page,
  }) => {
    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: "What happens next" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ways to reach us" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "fruiticana1@hotmail.com" }),
    ).toHaveAttribute("href", "mailto:fruiticana1@hotmail.com");
    await expect(page.getByRole("link", { name: "203-709-0992" })).toHaveAttribute(
      "href",
      "tel:+12037090992",
    );
    await expect(page.getByText("16 Pleasant St, Waterbury, CT 06706")).toBeVisible();
    await expect(page.getByText("Coming soon")).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: /availability information is coming soon/i }),
    ).toHaveCount(0);
  });

  test("trims leading and trailing spaces on a valid inquiry", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/^name/i).fill("  Sam  ");
    await page.getByRole("textbox", { name: /^school \/ organization/i }).fill("  Lincoln Elementary  ");
    await page.getByLabel(/^role/i).selectOption("Principal");
    await page.getByLabel(/^city/i).fill("Waterbury");
    await page.getByLabel(/^state/i).fill("CT");
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
    await page.getByRole("textbox", { name: /^school \/ organization/i }).fill('Lincoln & Washington #1');
    await page.getByLabel(/^role/i).selectOption("Principal");
    await page.getByLabel(/^city/i).fill("Waterbury");
    await page.getByLabel(/^state/i).fill("CT");
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
    await expect(page.getByRole("status")).toContainText(/does not send messages yet/i);
    await expect(page.getByRole("status")).toContainText(/fruiticana1@hotmail\.com/i);
    await expect(
      page.getByRole("button", { name: "Request School Information" }),
    ).toHaveCount(0);
  });
});
