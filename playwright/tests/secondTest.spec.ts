import { test, expect } from '@playwright/test';

test('Korrekt URL', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  let url:string = await page.url();
  console.log("url = ", url);
  await expect(page).toHaveURL(/demowebshop/);
});
