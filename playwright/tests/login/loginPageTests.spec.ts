import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';



test('har en  titel', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.expectTitle('Login Page');
});
