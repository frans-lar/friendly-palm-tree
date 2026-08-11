import { test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('test av huvudsida', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.expectTitle('Demo Web Shop');
});
