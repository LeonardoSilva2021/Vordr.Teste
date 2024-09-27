import { test, expect } from '@playwright/test';

test('Url base', async ({ page }) => {

  //Acessando url
  await page.goto('https://www.saucedemo.com/');

  //Tando o titulo
  await expect(page).toHaveTitle(/Swag Labs/);
});