import { test, expect } from '@playwright/test'

const prefix = "/#"
const baseUrl = "http://localhost:3000" + prefix

const isHomePage = async (page) => {
    await expect(page).toHaveURL(baseUrl + "/")
    await expect(page).toHaveTitle("Raito | Mini Markdown CMS ✨📝 | Raito")
    await expect(page.getByRole('link', { name: 'Raito Logo Home' })).toBeVisible()
    await expect(await page.locator('#content img').getAttribute("src")).toEqual("logo.svg")
    await expect(await page.getByText("Arnaud de Saint Meloir").getAttribute('href')).toEqual("https://arnaud.at")
}

const isDocsPage = async (page) => {
    await expect(page).toHaveURL(baseUrl + "/docs")
    await expect(page).toHaveTitle("Docs | Raito")
    await expect(page.getByRole('heading', { name: 'Docs' })).toBeVisible()
    await expect(await page.getByRole('link', { name: 'Absolute Link' }).getAttribute('href')).toEqual("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    await expect(await page.getByRole('link', { name: 'Relative Link' }).getAttribute('href')).toEqual("/#/subdir/b")
}

test('Homepage', async ({ page }) => {
    await page.goto(baseUrl + '/')
    await isHomePage(page)
})

test('Docs', async ({ page }) => {
    await page.goto(baseUrl + '/docs')
    await isDocsPage(page)
})

test('Navbar', async ({ page }) => {
    await page.goto(baseUrl + '/')
    await isHomePage(page)
    await page.locator("#navbar").getByText("Docs").click()
    await isDocsPage(page)
    await page.locator("#navbar").getByText("Home").click()
    await isHomePage(page)
})

test('Anchors', async ({ page }) => {
    await page.goto(baseUrl + '/')
    await expect(page).toHaveURL(baseUrl + "/")
    await page.getByText("📄 Docs").click()
    await expect(page).toHaveURL(baseUrl + "/docs")
})

test('History', async ({ page }) => {
    await page.goto(baseUrl + '/')
    await page.getByText("📄 Docs").click()
    await expect(page).toHaveURL(baseUrl + "/docs")
    await page.goBack()
    await expect(page).toHaveURL(baseUrl + "/")
    await page.goForward()
    await expect(page).toHaveURL(baseUrl + "/docs")
})

test('Subdirectories', async ({ page }) => {
    await page.goto(baseUrl + '/subdir/a')
    await expect(page).toHaveURL(baseUrl + "/subdir/a")
    await expect(await page.getByRole('link', { name: 'Raito Logo Home' }).getAttribute('href')).toEqual(prefix + "/")
    await expect(await page.getByText("Docs").getAttribute('href')).toEqual(prefix + "/docs")
    await expect(await page.getByText("Homepage #1").getAttribute('href')).toEqual(prefix)
    await expect(await page.getByText("Homepage #2").getAttribute('href')).toEqual(prefix)

    await page.getByText("b").click()
    await expect(page).toHaveURL(baseUrl + "/subdir/b")

    await page.getByText("a").click()
    await expect(page).toHaveURL(baseUrl + "/subdir/a")

    await page.goto(baseUrl + '/subdir/subsubdir/c')
    await expect(await page.getByText("b").getAttribute('href')).toEqual("/#/subdir/b")
    await expect(await page.getByText("Homepage").getAttribute('href')).toEqual(prefix)
})
