import { test, expect } from '@playwright/test';

test('har en  titel', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  let title:string = await page.title();
  console.log("Title = ", title);
  await expect(page).toHaveTitle("Demo Web Shop");
});
