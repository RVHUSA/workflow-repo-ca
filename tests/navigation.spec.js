import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigates to the home page and checks first venue details", async ({
    page,
  }) => {
    // Navigate to the homepage
    await page.goto("/index.html");

    // Wait until venue container is loaded
    await page.locator("#venue-container > *").first().waitFor();

    // Click on the first venue
    const firstVenue = page.locator("#venue-container > *").first();
    await firstVenue.click();

    // Verify the heading on the venue details page
    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
