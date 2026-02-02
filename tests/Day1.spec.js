import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.locator('//input[@id="email"]').fill('manish')
  await page.locator('//input[@name="pass"]').fill('manish123')
  await page.locator('//button[text()="Log in"]').click()
  await page.waitForTimeout(3000)
});
//Xpath locator
//id--------------------->//input[@id="email"]
//name------------------->//input[@name="email"]
//class------------------->//input[@class="inputtext _55r1 _6luy"]
//attributes and values---->//input[@type="text"]
//text--------------------->//button[text()="Log in"]
