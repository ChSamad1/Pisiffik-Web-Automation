const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const { dashboardPage } = require('../pages/dashboard.page')
const {customerPage} = require('../pages/customer.page')
const { purchasesPage} = require('../pages/purchases.page')
const staticData = require('../data/staticData')

test("validatePurchasesData Validation", async ({page}) => {
  
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
    
    await purchases.purchasesEntriesOption('10 25 50 100')

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
