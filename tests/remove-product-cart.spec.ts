import test, { expect } from "@playwright/test";

test('Remove product in cart', async ({ page }) => {
  
  //Acessando url 
  await page.goto('https://www.saucedemo.com/');

  //Seleciono e seto o nome de usuario 
  const usernameTxt = page.locator('input[data-test="username"]');
  await expect(usernameTxt).toBeVisible();
  await usernameTxt.fill('standard_user');

  //Seleciono e seto a senha de usuario
  const passwordTxt = page.locator('input[data-test="password"]');
  await expect(passwordTxt).toBeVisible();
  await passwordTxt.fill('secret_sauce');

  //Click no botão de login
  const loginButton = page.locator('input[data-test="login-button"]');
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  //Verifico se deu certo login
  await expect(page).toHaveURL(/\/inventory\.html/);

  //Adiciono o produto no carrinho
  const addToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();

  //Click no botão de remover para remover produto do carrinho
  const removeToCardButton = page.locator('button[data-test="remove-sauce-labs-backpack"]');
  await expect(removeToCardButton).toBeVisible();
  await removeToCardButton.click();
});