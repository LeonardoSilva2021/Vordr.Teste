import test, { expect } from "@playwright/test";

test(
    'Filter price high low product',
    async ({ page }) => {

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

        //Click no botão de filtoro
        const clickSelect = page.locator('select[data-test="product-sort-container"]');
        await expect(clickSelect).toBeVisible();
        await clickSelect.click();

        //Espero terminar de aparecer as opções
        await page.waitForTimeout(500);

        //Seliciono uma opção
        await page.selectOption('select[data-test="product-sort-container"]', 'hilo');
    }
);