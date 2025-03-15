import { test, expect } from '@playwright/test';

test('should navigate to about page', async ({ page }) => {
  await page.goto('https://website-04db7b0f.npd.wyr.mybluehost.me/staging/1386/');

  await expect(page).toHaveTitle(/Hamba/);
  
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveTitle(/About/);
});
