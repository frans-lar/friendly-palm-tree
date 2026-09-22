import { Page, expect } from '@playwright/test';

export class MainPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/store2');
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
  async selectProduct(productName: string) {
    await this.page.getByTestId('select-product').selectOption(productName);
  }

   async selectAmount(amount: string) {
    await this.page.locator('#buyAmount').fill(amount);
  }

  async addToCart() {
    await this.page.getByRole('button', { name: 'Add to Cart' }).click();
  }
  async clickBuyButton() {
    await this.page.getByRole('button', { name: 'Buy' }).click();
    
  }
  async buyerNameInput(name: string) {
    await this.page.locator('#buyerName').fill(name);
  } 

   async buyeraddressInput(address: string) {
    await this.page.locator('#buyerAddress').fill(address);
  } 

    async confirmPurchaseButton() {
    await this.page.getByRole('button', { name: "Confirm Purchase" }).click();
  } 

    amountTotalreceipt() {
      return this.page.locator('#receiptGrandTotal');
  }  
    amountGrandTotal() {
      return this.page.locator('#grandTotal');
  } 
    async clickRemoveButton() {
      await this.page.getByRole('button', { name: 'Remove' }).click();
  } 

}

