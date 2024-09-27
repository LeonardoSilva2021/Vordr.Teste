import test, { expect } from "@playwright/test";

test('purchase completed', async ({ page }) => {

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

    //Vejo o carinho
    const viewCart = page.locator('a[data-test="shopping-cart-link"]');
    await expect(viewCart).toBeVisible();
    await viewCart.click();

    //Click no botão checkout
    const checkoutButton = page.locator('button[data-test="checkout"]');
    await expect(checkoutButton).toBeVisible();
    await checkoutButton.click();

    //Seleciono e seto o primeiro nome
    const firstNameTxt = page.locator( 'input[data-test="firstName"]');
    await expect(firstNameTxt).toBeVisible();
    await firstNameTxt.fill('Leonardo');

    //Seleciono e seto o sobrenome
    const lastNameTxt = page.locator('input[data-test="lastName"]');
    await expect(lastNameTxt).toBeVisible();
    await lastNameTxt.fill('Gonçalves');

    //seleciono e seto código postal
    const postalCodeTxt = page.locator('input[data-test="postalCode"]');
    await expect(postalCodeTxt).toBeVisible();
    await postalCodeTxt.fill('08295-005');

    //Click no botão continue
    const continueButton = page.locator('input[data-test="continue"]');
    await expect(continueButton).toBeVisible();
    await continueButton.click();

    //Click no botão finish
    const finishButton = page.locator('button[data-test="finish"]');
    await expect(finishButton).toBeVisible();
    await finishButton.click();

    //CLick no botão back home
    const backHomeButton = page.locator('button[data-test="back-to-products"]');
    await expect(backHomeButton).toBeVisible();
    await backHomeButton.click();
});