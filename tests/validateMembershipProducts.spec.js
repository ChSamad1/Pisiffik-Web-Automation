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
   //  await membershipProducts.membershipProductsAddMembershipProductBtn()
   //  await membershipProducts.membershipProductsAddMembershipBtnSearchOption('591659')
   //  await membershipProducts.membershipProductsTableRedeemPointsEntry('40')  
   //  await membershipProducts.membershipProductsTableRebateAmountEntry('3000') 
   //  await membershipProducts.membershipProductsTableStartDateEntry('2024-01-25T17:15')
   //  await membershipProducts.membershipProductsTableEndDateEntry('2024-01-27T13:20')
   //  await membershipProducts.membershipProductTableSwitchStatusSlide()
   //  await membershipProducts.membershipProductsTableProductSelOption()
   //  await membershipProducts.membershipProductsTableAddOption()

   //  await membershipProducts.membershipProductsSearchBoxOpt('591659')
   //  await membershipProducts.membershipProductsTableEntryDelOption()
    //await membershipProducts.membershipProductsTableEntryDelOptionConformation()

    const entriesOption = await page.textContent(membershipProducts.membershipProductsEntriesOpt)
    await expect(entriesOption).toContain('10')
    await expect(entriesOption).toContain('25')
    await expect(entriesOption).toContain('50')
    await expect(entriesOption).toContain('100')

 


    
    
    })
