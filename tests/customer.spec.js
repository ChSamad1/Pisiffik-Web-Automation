const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const { dashboardPage } = require('../pages/dashboard.page')
const {customerPage} = require('../pages/customer.page')
const staticData = require('../data/staticData')

test ("Customer Validation" , async ({page}) =>{

const login = new loginPage(page)
const dashboard = new dashboardPage(page)
const customer = new customerPage(page)
await login.gotoLoginPage()
await login.Login(staticData.email,staticData.password) 
await expect(dashboard.page).toHaveURL(staticData.dashboardUrl) 
//await page.pause()
await expect(customer.customerMenu).click()
await expect(customer.page).toHaveURL(staticData.customerUrl) 
await expect(customer.customerHeading).toBeVisible()
await customer.cDropDownNavigation()
await expect(customer.search).toBeVisible()

})


// const CelementsToBeVisible = [
//     customer.sNOGrid,
//     customer.loyaltyIdGrid,
//     customer.customerNameGrid,
//     customer.emailCard,
//     customer.phoneCard,
//     customer.earnedPointsCard,
//     customer.pointsRedeemCard
//     customer.availablePointsCard,
//     customer.statusCard,
//     customer.actionCard,

// ]

// for(let gridCV of CelementsToBeVisible){
//    await expect(gridCV).toBeVisible() 

// }
