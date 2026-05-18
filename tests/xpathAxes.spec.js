
import{test, expect} from '@playwright/test';
import { only, skip } from 'node:test';


test("xpath axes" , async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(3000);

    await page.locator(`//div[@class = "form-group"]/child::input[@id = "name"]`).fill("admin");


})

test("google page" , async ({page}) => {


    await page.goto(`https:www.google.com/`);

    await page.waitForTimeout(3000);

    //await page.locator(`//div[@class="FPdoLc T14B5e iThwld"]/descendant::input[@name="btnI"]`).click();

    await page.locator(`//div[@class="FPdoLc T14B5e iThwld"]/center/input[@name="btnI"]`).click();

    await page.waitForTimeout(3000);
})


test("calender", async({page}) => {

    await page.goto("https://www.google.com/");

    await page.waitForTimeout(3000);

    await page.locator(`//textarea[@name="q"]`).fill("calender").press('Enter');

    await page.waitForTimeout(2000);

    await page.locator(`//h3[text()='Calendar 2026']`).click();

    await page.waitForTimeout(3000);
})