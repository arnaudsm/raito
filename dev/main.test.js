import { test, expect } from '@playwright/test'

const isHomePage = async (page) => {
    await expect(page).toHaveURL("/#/")
    await expect(page).toHaveTitle("Raito | Mini Markdown CMS ✨📝 | Raito")
    await expect(page.getByRole('link', { name: 'Raito Logo Home' })).toBeVisible()
    await expect(await page.locator('#content img').getAttribute("src")).toEqual("logo.svg")
    await expect(await page.getByText("Arnaud de Saint Meloir").getAttribute('href')).toEqual("https://arnaud.at")
}

const isDocsPage = async (page) => {
    await expect(page).toHaveURL("/#/docs")
    await expect(page).toHaveTitle("Docs | Raito")
    await expect(page.getByRole('heading', { name: 'Docs' })).toBeVisible()
}

test('Homepage', async ({ page }) => {
    await page.goto('/')
    await isHomePage(page)
})

test('Docs', async ({ page }) => {
    await page.goto('/#/docs')
    await isDocsPage(page)
})

test('Navbar', async ({ page }) => {
    await page.goto('/')
    await isHomePage(page)
    await page.locator("#navbar").getByText("Docs").click()
    await isDocsPage(page)
    await page.locator("#navbar").getByText("Home").click()
    await isHomePage(page)
})

test('Anchors', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL("/#/")
    await page.getByText("📄 Docs").click()
    await expect(page).toHaveURL("/#/docs")
})
