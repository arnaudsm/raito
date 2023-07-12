import { test, expect } from '@playwright/test'

const isHomePage = async (page) => {
    await expect(page).toHaveURL("/#/")
    await expect(page).toHaveTitle("Raito | Mini Markdown CMS ✨📝 | Raito")
    await expect(page.getByRole('link', { name: 'Raito Logo Home' })).toBeVisible()
    await expect(await page.getByText("Arnaud de Saint Meloir").getAttribute('href')).toEqual("https://arnaud.at")
    await expect(await page.getByText("the examples").getAttribute('href')).toEqual("#/examples")
}

const isExamplePage = async (page) => {
    await expect(page).toHaveURL("/#/examples")
    await expect(page).toHaveTitle("Examples | Raito")
    await expect(page.getByRole('heading', { name: 'Examples' })).toBeVisible()
}

test('Homepage', async ({ page }) => {
    await page.goto('/')
    await isHomePage(page)
})

test('Examples', async ({ page }) => {
    await page.goto('/#/examples')
    await isExamplePage(page)
})

test('Navbar', async ({ page }) => {
    await page.goto('/')
    await isHomePage(page)
    await page.locator("#navbar").getByText("Examples").click()
    await isExamplePage(page)
    await page.locator("#navbar").getByText("Home").click()
    await isHomePage(page)
})

test('Anchors', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL("/#/")
    await page.getByText("the examples").click()
    await expect(page).toHaveURL("/#/examples")
})
