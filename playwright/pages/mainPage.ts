import { Page, expect } from '@playwright/test';

export class MainPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async expectTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  checkRadioButton(chosenValue: string) {
    return this.page.getByLabel(chosenValue);
  }

  async isButtonChecked(chosenValue: string){
   await expect (this.page.getByLabel(chosenValue)).toBeChecked();

  }
  voteButton(){
     return this.page.getByRole('button', { name: 'Vote'});
  }

}
