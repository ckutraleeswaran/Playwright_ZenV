import{test, expect} from '@playwright/test';

test("assertion", async({page}) => {

await page.goto(`https://testautomationpractice.blogspot.com/`);
await page.waitForTimeout(3000);
await expect(page).toHaveURL(`https://testautomationpractice.blogspot.com/`);

await expect(page).toHaveTitle(`Automation Testing Practice`);
await page.waitForTimeout(3000);

//store the locator in a variable
const text = page.locator(`//p[@class="description"]/child::span`);
//
await expect(text).toBeVisible();
//should be give full text value
await expect(text).toHaveText('For Selenium, Cypress & Playwright');
//can be give partial text value
await expect(text).toContainText(`For Selenium, Cypress `);



const textBox = page.locator(`//input[@id="name"]`);

await expect(textBox).toBeEmpty();

await textBox.fill(`kutraleeswaran`);

await expect(textBox).toHaveValue(`kutraleeswaran`);





})