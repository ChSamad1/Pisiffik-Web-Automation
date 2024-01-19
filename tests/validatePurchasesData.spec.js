const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const { dashboardPage } = require('../pages/dashboard.page')
const {customerPage} = require('../pages/customer.page')
const { purchasesPage} = require('../pages/purchases.page')
const staticData = require('../data/staticData')

test("Purchases Validation", async ({page}) => {
  

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const customer = new customerPage(page)
    const purchases = new purchasesPage(page)
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl) 
    await purchases.gotoPurchasesPage()
    await expect(purchases.purchasesHeading).toBeVisible()
    await expect(purchases.purchaseParagraph).toBeVisible()
    
    // await expect(purchases.purchaesFromToDate).toBeVisible()
    await purchases.purchaseFromTo('2023-11-11')
    // await page.pause()
    await purchases.purchasesToDate('2023-11-18')
    
    await purchases.purchasesEntriesOption()

    await purchases.purchasesTableHeader()

    await purchases.purchasesTableBody()
    // await page.waitForTimeout(3000)


    await purchases.purchasesEntriesNoPerPg()

    await purchases.purchasesNextPageNavigation()
    
    await purchases.purchasesEntriesNoPerPg()

    await purchases.purchasesPreviousPgNavigation()

    await purchases.purchasesEntriesNoPerPg()

    await purchases.purchasesSearchOpt('Augustine Andersen Brandt')


    //await page.waitForTimeout(3000)

   



    





})




// test.skip('test', async ({ page }) => {
//     await page.goto('/');
//     await page.getByPlaceholder('Enter your email').click();
//     await page.getByPlaceholder('Enter your email').fill('admin@pisiffik.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('SA@Pisiffik2023$');
//     await page.getByPlaceholder('Enter your password').press('Enter');
//     await page.getByRole('link', { name: 'Purchases' }).click();
//     await page.locator('#from_date').fill('2023-11-11');
//     await page.locator('#to_date').fill('2023-11-18');
//   });
