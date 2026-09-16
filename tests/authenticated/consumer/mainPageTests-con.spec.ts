import { test, expect } from '@playwright/test';
import { MainPage } from '../../../pages/mainPage';

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function formatPrice(value: number): string {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}



test('test av huvudsida consumer', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.expectTitle('The Hoff Store');
});


const products = [
  { name: 'Apple', price: 15, vat: 1.2 },
  { name: 'Banana', price: 23, vat: 1.204 },
  { name: 'Orange', price: 34, vat: 1.25 },
  { name: 'Grape', price: 4, vat: 1.2 },
  { name: 'Bicycle', price: 999, vat: 1.2 },
  { name: 'Samsung S5', price: 4999, vat: 1.2 },
  { name: 'Toy train', price: 399, vat: 1.198 },
  { name: 'Cup of Coffee', price: 29, vat: 1.2 },
  { name: 'Chair', price: 299, vat: 1.2 },
  { name: 'TV', price: 9500, vat: 1.2 },
];

const kvantitet = Array.from({ length: 4 }, (_, i) => i + 1);
for (const product of products) {
  for (const antal of kvantitet) {
      test(`Köp ${antal} ${product.name} - Consumer`, async ({ page }) => {
        const mainPage = new MainPage(page);

          await mainPage.goto();
          await mainPage.selectProduct(product.name);
          await mainPage.selectAmount(antal.toString());
          await mainPage.addToCart();
          const rawTotal = roundToOneDecimal(product.price * product.vat * antal);
          const totalPris = formatPrice(rawTotal);
          
          if (rawTotal > 10000) {
            await expect(page.getByText('Insufficient funds!')).toBeVisible();
          } else {
          await mainPage.clickBuyButton();
          await mainPage.buyerNameInput('Frans');
          await mainPage.buyeraddressInput('Nathorstgatan 1');
          await mainPage.confirmPurchaseButton();
          
          await expect(mainPage.amountTotal()).toHaveText(totalPris.toString());
  }})
        }
      };


test('test räkna summa kundkorg', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.expectTitle('The Hoff Store');
});      

test('test att tömma kundkorg', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.expectTitle('The Hoff Store');
});

test('Verifiera namn och adress', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.expectTitle('The Hoff Store');
});