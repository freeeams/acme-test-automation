import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/homepageDima'
import { LoginTestPage } from '../pages/loginpageDima'
test('homepage text test', async ({ page }) => {
    let newLoginTest = new LoginTestPage(page)
    await page.goto('https://demo.applitools.com/')
    await newLoginTest.loginTest('freams', 'drop_C4')
    let newHomePage = new HomePage(page)
    newHomePage.expectedMessage('ACME')
})

