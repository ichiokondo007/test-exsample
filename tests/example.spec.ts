import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('screenshot example', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.screenshot({ path: 'screenshots/playwright-homepage.png' });
  });

  test('fill form example', async ({ page }) => {
    await page.goto('https://example.com');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'testpass');
    await page.click('button[type="submit"]');
  });
});