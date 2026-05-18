import{test, expect} from '@playwright/test';

test("radioButton", async({page}) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.waitForTimeout(3000);

    await page.locator(`//input[@id="male"]`).check();

    await expect(page.locator(`//input[@id="male"]`)).toBeChecked();

    await expect(page.locator(`//input[@id="female"]`)).not.toBeChecked();
    await Page.pause();

    //uncheck doesn't work in radio button, it will automatically uncheck the other radio button when we check another one.
    //Example;
    await page.locator(`//input[@id="male"]`).uncheck();
    
    await expect(page.locator(`//input[@id="male"]`)).not.toBeChecked();

})


test("checkBox", async({page}) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.waitForTimeout(3000);

    await page.locator(`//input[@id="sunday"]`).check();

    await expect(page.locator(`//input[@id="sunday"]`)).toBeChecked();


    await page.locator(`//input[@id="sunday"]`).uncheck();

    await expect(page.locator(`//input[@id="sunday"]`)).not.toBeChecked();
    await Page.pause();

})

test("multipleCheckBox", async({page}) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.waitForTimeout(3000);

    let days = [`//input[@id="sunday"]`,`//input[@id="tuesday"]`,`//input[@id="thursday"]`,`//input[@id="saturday"]`];

    for(let i of days){
            await page.locator(i).check();
    }
    await page.pause();

})