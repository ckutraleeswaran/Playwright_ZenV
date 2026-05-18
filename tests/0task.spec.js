
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
//Task : ( 15 - 05 - 2026 )
//1.Select any one - Yes / No
test("yes or no radio button", async({page}) => {

    await page.goto(`https://letcode.in/radio`);
    await page.waitForTimeout(3000);

    await page.locator(`//input[@id="yes" and @name="answer"]`).check();

    // assertion: hard assert
    await expect(page.locator(`//input[@id="yes" and @name="answer"]`)).toBeChecked();

    await page.waitForTimeout(3000);

});
//2.Confirm you can select only one radio button ( Yes / No )
test("Confirm you can select only one radio button", async({page}) => {

    await page.goto(`https://letcode.in/radio`);
    await page.waitForTimeout(3000);

    const yes = page.locator(`//input[@id="one"]`); // yes radio button locator
    const no = page.locator(`//input[@id="two"]`);  // no radio button locator

    // lets check assertion

    await yes.check();
    await page.pause();

    await expect(yes).toBeChecked();          // assertion for yes radio button is must be checked
    await expect(no).not.toBeChecked();       // assertion for no radio button should not checked

    await no.check();
    await page.pause();

    await expect(no).toBeChecked();
    await expect(yes).not.toBeChecked();

    await page.pause();

});
//3.Find the bug (Yes / No)
test("Find the bug radio button", async({page}) => {

    await page.goto(`https://letcode.in/radio`);
    await page.waitForTimeout(3000);

    const yes = page.locator(`//input[@id="nobug"]`); // yes radio button locator
    const no = page.locator(`//input[@id="bug"]`);    // no radio button locator

    // lets check assertion

    await yes.check();

    if(await yes.isChecked()) {

        await page.pause();
        await expect(no).not.toBeChecked();

        await no.check();

        if(await no.isChecked()) {

            await page.pause();
            await expect.soft(yes).not.toBeChecked();

            console.log(`yes and no radio buttons are works. so, it's a bug`);
        }
        else {
            console.log(`only 'yes' radio button works`);
        }
    }
    else {
        console.log(`yes and no radio buttons are not working.`);
    }

});
//4.Find which one is selected ( Foo / Bar ) By : kutraleeswaran
test("Find which one is selected radio button", async({page}) => {

    await page.goto(`https://letcode.in/radio`);
    await page.waitForTimeout(3000);

    const foo = page.locator(`//input[@id="foo"]`);       // yes radio button locator
    const notfoo = page.locator(`//input[@id="notfoo"]`); // no radio button locator

    // lets check assertion

    await foo.check();

    if(await foo.isChecked()) {

        //await page.pause();
        await expect(notfoo).not.toBeChecked();

        await notfoo.check();

        if(await notfoo.isChecked()) {

            //await page.pause();
            await expect.soft(foo).not.toBeChecked();

            console.log(`notfoo radio selected.`);
        }
        else {
            console.log(`only 'foo' radio button works`);
        }
    }
    else {
        console.log(`foo and notfoo radio buttons are not working.`);
    }

});
//5.Confirm last field is disabled ( Going & Not_going & Maybe ) By : kutraleeswaran
test("Confirm last field is disabled", async({page}) => {

    await page.goto(`https://letcode.in/radio`);
    await page.waitForTimeout(3000);

    const going = page.locator(`//input[@id="going"]`);
    const notGoing = page.locator(`//input[@id="notG"]`);
    const maybe = page.locator(`//input[@id="maybe"]`);

    await going.check();
    await expect(going).toBeChecked();

    await notGoing.check();
    await expect(notGoing).toBeChecked();
    await expect(going).not.toBeChecked();

    if(await maybe.isDisabled()) {
        console.log(`'maybe' radio button is disabled`);
    }
    else {
        console.log(`'maybe' radio button is not disabled`);
    }

});
