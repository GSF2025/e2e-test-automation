import { test, expect } from '@playwright/test';

test.describe('Nav Menu Options', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://website-04db7b0f.npd.wyr.mybluehost.me/staging/1386/');
    await expect(page).toHaveTitle(/Hamba/);
  });

  test('should navigate to about page', async ({ page }) => {

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveTitle(/About/);
  });

  // Testing for successful submenu click on nav bar
  test('Should open a submenu when "Our Services" is clicked in the nav bar.', async ({page}) => {

    await page.getByRole('link', { name: 'Our Services' }).click();
    await expect(page.getByRole('link', {name: 'Market Place',})).toBeVisible();
    await expect(page.getByRole('link', {name: 'Master Classes',})).toBeVisible();
  });
});