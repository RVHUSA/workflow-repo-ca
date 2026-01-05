import { test, expect } from "@playwright/test";

// Login-tests
test.describe("login", () => {
  // Successfull login
  test("user can login with valid credentials", async ({ page }) => {
    await page.goto("/login/index.html");
    await page.waitForSelector('input[name="email"]');

    // Fill in email and password from .env
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.locator('button[type="submit"]').click();

    // Check if logout-button is visible
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  // Wrong password
  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");
    await page.waitForSelector('input[name="email"]');

    // Enter the correct email, but the wrong password
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.locator('button[type="submit"]').click();

    // Check if login-error shows in #message-container
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
