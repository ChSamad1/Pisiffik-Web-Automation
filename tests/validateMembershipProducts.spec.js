const{test,expect} = require('@playwright/test')
const{loginPage} = require('../pages/login.page')
const{dashboardPage} = require('../pages/dashboard.page')
const { membershipProductsPage } = require('../pages/membershipProducts.page')
 const staticData = require('../data/staticData')

 test('Membership Products Validation', async({page})=>{


    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const membershipProducts = new membershipProductsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await membershipProducts.navigateTomembershipProductsPage()
    await expect(membershipProducts.page).toHaveURL(staticData.membershipProductsUrl)
    await expect(membershipProducts.membershipProductsHeading).toBeVisible()
    await membershipProducts.membershipProductsAddMembershipProductBtn()
    await membershipProducts.membershipProductsAddMembershipBtnSearchOption('SBS SAMSUNG S23 SKIN')
    await membershipProducts.membershipProductsTableRedeemPointsEntry('5')  
    await membershipProducts.membershipProductsTableRebateAmountEntry('90') 
    await membershipProducts.membershipProductsTableStartDateEntry('2024-02-01T17:52')
    await membershipProducts.membershipProductsTableEndDateEntry('2024-02-06T12:52')
    await membershipProducts.membershipProductTableSwitchStatusSlide()
    await membershipProducts.membershipProductsTableProductSelOption()
    await membershipProducts.membershipProductsTableAddOption()
    
    await membershipProducts.membershipProductsTableEntryDelOption()

    await membershipProducts.membershipProductsSearchBoxOpt('SBS SAMSUNG S23 SKIN')

    await page.waitForTimeout(1000)

    const entriesOption = await page.textContent(membershipProducts.membershipProductsEntriesOpt)
    await expect(entriesOption).toContain('10')
    await expect(entriesOption).toContain('25')
    await expect(entriesOption).toContain('50')
    await expect(entriesOption).toContain('100')

    await membershipProducts.membershipProductsEntries()
    await membershipProducts.membershipProductsNextPageBtn()
    await page.waitForTimeout(3000)

    await membershipProducts.membershipProductsEntries()

    await membershipProducts.membershipProductsPreviousPageBtn()

    await membershipProducts.membershipProductsEntries()

    
    })
