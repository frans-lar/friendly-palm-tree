import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const authFileBus = path.join(__dirname, '../.auth/business.json');

setup('authenticate as business user', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill(process.env.USERNAME!);
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByLabel('role').selectOption('Business');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Log Out' })).toBeVisible();
  await page.context().storageState({ path: authFileBus });
});
