import { expect } from '@playwright/test'
import { test } from "./playwright.config"

const isHomePage = async ({ page, prefix, baseUrl }) => {
    await expect(page).toHaveURL(baseUrl + "/")
    await expect(page).toHaveTitle("Raito | Mini Markdown CMS ✨📝 | Raito")
    await expect(page.getByRole('link', { name: 'Raito Logo' })).toBeVisible()
    await expect(await page.locator('#content img').getAttribute("src")).toEqual("logo.svg")
    await expect(await page.getByText("Arnaud de Saint Meloir").getAttribute('href')).toEqual("https://arnaud.at")
}

const isDocsPage = async ({ page, prefix, baseUrl }) => {
    await expect(page).toHaveURL(baseUrl + "/docs")
    await expect(page).toHaveTitle("Docs | Raito")
    await expect(page.getByRole('heading', { name: 'Docs' })).toBeVisible()
    await expect(await page.getByRole('link', { name: 'Absolute Link' }).getAttribute('href')).toEqual("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    await expect(await page.getByRole('link', { name: 'Relative Link' }).getAttribute('href')).toEqual(prefix + "/subdir/b")
}

test('Homepage', async ({ page, prefix, baseUrl }) => {
    await page.goto(baseUrl + '/')
    await isHomePage({ page, prefix, baseUrl })
})

test('Docs', async ({ page, prefix, baseUrl }) => {
    await page.goto(baseUrl + '/docs')
    await isDocsPage({ page, prefix, baseUrl })
})

test('Navbar', async ({ page, prefix, baseUrl }) => {
    await page.goto(baseUrl + '/')
    await isHomePage({ page, prefix, baseUrl })
    await page.locator("#navbar").getByText("Docs").click()
    await isDocsPage({ page, prefix, baseUrl })
    await page.locator("#navbar").getByText("Raito").click()
    await isHomePage({ page, prefix, baseUrl })
})

test('Anchors', async ({ page, prefix, baseUrl }) => {
    await page.goto(baseUrl + '/')
    await expect(page).toHaveURL(baseUrl + "/")
    await page.getByText("📄 Docs").click()
    await expect(page).toHaveURL(baseUrl + "/docs")
})

test('History', async ({ page, prefix, baseUrl }) => {
    await page.goto(baseUrl + '/')
    await expect(page.getByRole('heading', { name: 'Raito | Mini Markdown CMS ✨📝' })).toBeVisible()
    await expect(page).toHaveURL(baseUrl + "/")

    await page.getByText("📄 Docs").click()
    await expect(page).toHaveURL(baseUrl + "/docs")
    await expect(page.getByRole('heading', { name: 'Docs' })).toBeVisible()

    await page.goBack()
    await expect(page).toHaveURL(baseUrl + "/")
    await expect(page.getByRole('heading', { name: 'Raito | Mini Markdown CMS ✨📝' })).toBeVisible()

    await page.goForward()
    await expect(page).toHaveURL(baseUrl + "/docs")
    await expect(page.getByRole('heading', { name: 'Docs' })).toBeVisible()
})

test('Subdirectories', async ({ page, prefix, baseUrl }) => {
    await page.goto(baseUrl + '/subdir/a')
    await expect(page).toHaveURL(baseUrl + "/subdir/a")
    await expect(await page.getByRole('link', { name: 'Raito Logo' }).getAttribute('href')).toEqual(prefix + "/")
    await expect(await page.getByText("Docs").getAttribute('href')).toEqual(prefix + "/docs")
    await expect(await page.getByText("Homepage #1").getAttribute('href')).toEqual(prefix || "/")
    await expect(await page.getByText("Homepage #2").getAttribute('href')).toEqual(prefix || "/")

    await page.getByText("b").click()
    await expect(page).toHaveURL(baseUrl + "/subdir/b")

    await page.getByRole('link', { name: 'a', exact: true }).click()
    await expect(page).toHaveURL(baseUrl + "/subdir/a")

    await page.goto(baseUrl + '/subdir/subsubdir/c')
    await expect(await page.getByText("b").getAttribute('href')).toEqual(prefix + "/subdir/b")
    await expect(await page.getByText("Homepage").getAttribute('href')).toEqual(prefix || "/")
})
