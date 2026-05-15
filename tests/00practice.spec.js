


import {test, expect } from '@playwright/test';


test("amazon logIn" , async ({page}) => {

    await page.goto(`https://www.amazon.in/`);

    await page.waitForTimeout(5000);

    try{
        
    await page.click('text=Continue shopping',{

        timeout:3000
    })
    
        console.log("clicked continue shopping");
    }
    catch{
        console.log("continue shopping page not displayed");
        
    }

    await page.waitForTimeout(3000);

    await page.locator(`//input[@name="field-keywords" and @type="text" ]`).fill(`vivo v70pro`);

    await page.locator(`//input[@value="Go"]`).click();

    await page.waitForTimeout(3000);
})