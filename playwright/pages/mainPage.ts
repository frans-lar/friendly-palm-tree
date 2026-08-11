import { Page, expect } from '@playwright/test';

export class MainPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async expectTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}
