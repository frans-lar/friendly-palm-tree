import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/mainPage';

test('test av huvudsida', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
  await mainPage.expectTitle('The Hoff Store');
});

const products = [
  { name: 'Apple', price: 12 },
  { name: 'Banana', price: 18.4 },
  { name: 'Orange', price: 27.2 },
  { name: 'Grape', price: 3.2},
  { name: 'Bicycle', price: 799.2 },
  { name: 'Samsung S5', price: 3999.2 },
  { name: 'Toy train', price: 319.2 },
  { name: 'Cup of Coffee', price: 23.2 },
  { name: 'Chair', price: 239.2 },
  { name: 'TV', price: 7600 },
];
const kvantitet = Array.from({ length: 4 }, (_, i) => i + 1);
for (const product of products) {
  for (const antal of kvantitet) {
      test(`Köp ${antal} ${product.name}`, async ({ page }) => {
        const mainPage = new MainPage(page);

          await mainPage.goto();
          await mainPage.selectProduct(product.name);
          await mainPage.selectAmount(antal.toString());
          await mainPage.addToCart();
          const totalPris = product.price * antal;

          if (totalPris > 10000) {
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
