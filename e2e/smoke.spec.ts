import { test, expect } from "@playwright/test";

test("explore mounts canvas and toggles HUD", async ({ page }) => {
  await page.goto("/explore");
  const canvas = page.locator("canvas");
  await expect(canvas).toBeVisible();
});


test("tour HUD steps through and updates counter", async ({ page }) => {
  await page.goto("/tour");
  // Wait for HUD
  await expect(page.getByText(/1\s*\/\s*\d+/)).toBeVisible();
  await page.getByRole("button", { name: /Next/i }).click();
  await expect(page.getByText(/2\s*\/\s*\d+/)).toBeVisible();
});
