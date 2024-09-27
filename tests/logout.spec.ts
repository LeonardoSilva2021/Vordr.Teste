import test, { expect } from "@playwright/test";

test('logout', async ({ page }) => {

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

    //Click no botão do menu
    const buttonMenu = page.locator('button[id="react-burger-menu-btn"]');
    await expect(buttonMenu).toBeVisible();
    await buttonMenu.click();

     //Click no botão de logout
     const buttonLogout = page.locator('a[data-test="logout-sidebar-link"]');
     await expect(buttonLogout).toBeVisible();
     await buttonLogout.click();
})