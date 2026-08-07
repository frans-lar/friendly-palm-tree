import { test, expect } from '@playwright/test';

test('har en  titel', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Demo Web Shop/);
});
