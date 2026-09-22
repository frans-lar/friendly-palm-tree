import { test, expect } from '@playwright/test';
import { MainPage } from '../../../pages/mainPage';

test('test av huvudsida business', async ({ page }) => {
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

const kvantitet_kop = Array.from({ length: 4 }, (_, i) => i + 1);
for (const product of products) {
  for (const antal of kvantitet_kop) {
      test(`Köp ${antal} ${product.name} - Business`, async ({ page }) => {
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
          
          await expect(mainPage.amountTotalreceipt()).toHaveText(totalPris.toString());
  }})
        }
      };
     

const kvantitet_varukorg = Array.from({ length: 15 }, (_, i) => i + 1);
for (const product of products) {
  for (const antal of kvantitet_varukorg) {
      test(`Varukorg ${antal} ${product.name} - Business`, async ({ page }) => {
        const mainPage = new MainPage(page);

          await mainPage.goto();
          await mainPage.selectProduct(product.name);
          await mainPage.selectAmount(antal.toString());
          await mainPage.addToCart();
          const totalPris = product.price * antal;

          if (totalPris > 10000) {
            await expect(page.getByText('Insufficient funds!')).toBeVisible();
          } else {
          
          await expect(mainPage.amountGrandTotal()).toHaveText(totalPris.toString());
  }})
        }
      };


for (const product of products) {
  test(`Köp ${product.name} och ta bort från varukorg - Business`, async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.selectProduct(product.name);
    await mainPage.selectAmount("1");
    await mainPage.addToCart();
    await mainPage.clickRemoveButton();
    await expect(mainPage.amountGrandTotal()).toHaveText("0");
  }

  )
};

const name = 'Frans';
const address = 'Nathorstgatan 1';

test('Verifiera namn och adress', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.selectProduct("Banana");
  await mainPage.selectAmount("1");
  await mainPage.addToCart();
  await mainPage.clickBuyButton();
  await mainPage.buyerNameInput(name);
  await mainPage.buyeraddressInput(address);
  await mainPage.confirmPurchaseButton();

  await expect(page.locator('#name')).toHaveText(`Thank you for your purchase, ${name}`);
  await expect(page.locator('#address')).toHaveText(`It will be shipped to:  ${address}`);

});