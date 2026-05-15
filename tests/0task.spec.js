
import{test, expect } from '@playwright/test';


test("Test case 1: Positive LogIn test", async ({page}) => {

    await page.goto(`https://practicetestautomation.com/`);
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(`https://practicetestautomation.com/`);
    await expect(page).toHaveTitle(`Practice Test Automation | Learn Selenium WebDriver`);

    //click practice option
    const practiceText = page.locator(`//a[text()='Practice']`);
        await expect(practiceText).toHaveText('Practice');
        await expect(practiceText).toContainText('Practice');
        await practiceText.click();

    await page.waitForTimeout(3000);

    await page.locator(`//div[@class="post-content"]/descendant::a[contains(text(),'Test Login Page')]`).click();
    await page.waitForTimeout(2000);

    //login page for test 1
    //userName field
    const userName = page.locator('//input[@id="username"]');

        await expect(userName).toBeEmpty();
        await userName.fill(`student`);
        await expect(userName).toHaveValue('student');

    //password field
    const password = page.locator(`//input[@id="password"]`);

        await expect(password).toBeEmpty();
        await password.fill(`Password123`);
        await expect(password).toHaveValue(`Password123`);

    //click login button
    const submitButton = page.locator(`//button[@id="submit"]`);
    await submitButton.click();

    await page.waitForTimeout(3000);

    //assertion for successful login

     await expect(page).toHaveURL(`https://practicetestautomation.com/logged-in-successfully/`);
     //tab assertion
     await expect(page).toHaveTitle(`Logged In Successfully | Practice Test Automation`);

     //success message assertion

    const successMessage = page.locator(`//div[@class="post-header"]`);
        await expect(successMessage).toHaveText(`Logged In Successfully`)
    
    const logoutButton = page.locator(`//a[text()='Log out']`);
        await expect(logoutButton).toHaveText('Log out');



})

test("Test case 2: Negative username test", async ({page}) => {

    await page.goto(`https://practicetestautomation.com/`);
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(`https://practicetestautomation.com/`);
    await expect(page).toHaveTitle(`Practice Test Automation | Learn Selenium WebDriver`);

    //click practice option
    const practiceText = page.locator(`//a[text()='Practice']`);
        await expect(practiceText).toHaveText('Practice');
        await expect(practiceText).toContainText('Practice');
        await practiceText.click();

    await page.waitForTimeout(3000);

    await page.locator(`//div[@class="post-content"]/descendant::a[contains(text(),'Test Login Page')]`).click();
    await page.waitForTimeout(2000);

    //login page for test 1
    //userName field
    const userName = page.locator('//input[@id="username"]');

        await expect(userName).toBeEmpty();
        await userName.fill(`teacher`);                     //invalid userName
        await expect.soft(userName).toHaveValue('student ');

    //password field
    const password = page.locator(`//input[@id="password"]`);

        await expect(password).toBeEmpty();
        await password.fill(`Password123`);
        await expect(password).toHaveValue(`Password123`);

    //click login button
    const submitButton = page.locator(`//button[@id="submit"]`);
    await submitButton.click();

    await page.waitForTimeout(3000);
    const errorMessage = page.locatorlocator('//div[@id="error"]')
    await expect.soft(errorMessage).toHaveText('Your username is invalid!');

    //assertion for successful login

     await expect.soft(page).toHaveURL(`https://practicetestautomation.com/logged-in-successfully/`);
     //tab assertion
     await expect.soft(page).toHaveTitle(`Logged In Successfully | Practice Test Automation`);

     //success message assertion

    const successMessage = page.locator(`//div[@class="post-header"]`);
        await expect(successMessage).toHaveText(`Logged In Successfully`)
    
    const logoutButton = page.locator(`//a[text()='Log out']`);
        await expect.soft(logoutButton).toHaveText('Log out');



})