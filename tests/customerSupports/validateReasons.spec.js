const {test,expect} = require('@playwright/test')
const{loginPage} = require('../../pages/login.page')
const{dashboardPage} = require('../../pages/dashboard.page')
const {reasonsPage} = require('../../pages/customerSupports/reasons.page')
const {customerSupportsPage} =require('../../pages/customerSupports/customerSupports.page')
const staticData = require('../../data/staticData')

test('Reasons Validation', async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const reasons = new reasonsPage(page)
    const customersupport =new customerSupportsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await customersupport.navigateToCustomerOption()
    await reasons.navigateToReasonsPage()
    await expect (reasons.reasonsHeading).toBeVisible()
    await reasons.reasonsAddNewButton()
    await reasons.reasonsAddNewButtonDetails('hamza')
    await reasons.reasonsSaveButton()
    await reasons.reasonsDeleteButton()
    await reasons.reasonsDeleteButtonYes()
    await reasons.reasonsDeleteMsgOk()




})