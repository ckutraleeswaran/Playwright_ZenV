import { test, expect } from '@playwright/test';

test("facebook login", async ({ page }) => {

    await page.goto('https://www.facebook.com/', {WaitUntill: "domcontentLoaded"});

    await page.waitForTimeout(3000);

    // email or phone
    await page.locator(`//input[@name="email"]`).fill(`admin`);

    // password
    await page.locator(`//input[@name="pass"]`).fill('Admin@123');

    // login button
    await page.locator('[name="login"]').click();

    await page.waitForTimeout(3000);

});