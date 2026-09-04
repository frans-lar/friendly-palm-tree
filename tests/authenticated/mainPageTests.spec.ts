import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/mainPage';

test('test av huvudsida', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.expectTitle('The Hoff Store');
});


test('Köp ett äpple', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.selectProduct('Apple');
  await mainPage.selectAmount('1');
  await mainPage.addToCart();
  await mainPage.clickBuyButton();
  await mainPage.buyerNameInput('Frans');
  await mainPage.buyeraddressInput('Nathorstgatan 1');
  await mainPage.confirmPurchaseButton();
  await expect(mainPage.amountTotal()).toHaveText('12');
});

