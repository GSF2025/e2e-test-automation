import { test, expect } from '@playwright/test';

test.describe('Responsive Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://website-04db7b0f.npd.wyr.mybluehost.me/staging/1386/');
    await expect(page).toHaveTitle(/Hamba/);
  });

  test('should display the menu on desktop', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should display the menu on mobile', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByLabel('Menu Toggle')).toBeVisible();
  });
});