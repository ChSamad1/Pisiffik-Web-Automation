const {test,expect} = require('@playwright/test')
const{loginPage} = require('../../pages/login.page')
const{dashboardPage} = require('../../pages/dashboard.page')
const{customerSupportsPage} = require('../../pages/customerSupports/customerSupports.page')

const staticData = require('../../data/staticData')

test ('customerSupport Validation', async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const customerSupports = new customerSupportsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await customerSupports.navigateToCustomerOption()
    
    
    

    
})