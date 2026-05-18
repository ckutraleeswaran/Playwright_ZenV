import{test,expect} from '@playwright/test';

test("singleDropDown",async({page}) =>{
    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.waitForTimeout(3000);
    const single = page.locator(`//select[@id="country"]`);

    // await page.locator(`//select[@id="country"]`).selectOption("India");
    await single.selectOption("India");
    await page.waitForTimeout(3000);

    // await page.locator(`//select[@id="country"]`).selectOption({value : "uk"});
    await single.selectOption({value : "uk"});
    await page.waitForTimeout(3000);

    // await page.locator(`//select[@id="country"]`).selectOption({index : 3});
    await single.selectOption({index : 3});
    await page.waitForTimeout(3000);
})
test("multiple_DropDown_Selection",async({page}) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.waitForTimeout(3000);

    const multiSelect = page.locator(`//select[@id="colors"]`)

    await multiSelect.selectOption(["Red","White","Blue"]);
    await page.waitForTimeout(4000);
})
