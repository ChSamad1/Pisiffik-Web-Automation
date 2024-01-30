const {test,expect} = require('@playwright/test')
const{loginPage} = require('../pages/login.page')
const{dashboardPage} = require('../pages/dashboard.page')
const{earnPointsPage} = require('../pages/earnPoints.page')
const {toastermsg} = require('../utils/commonHelper')
const staticData = require('../data/staticData')


test('Earn Points Validation', async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const earnPoints = new earnPointsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await earnPoints.navigatetoEarnPointsPage()
    await expect(earnPoints.page).toHaveURL(staticData.earnpointsUrl)
    await expect(earnPoints.earnPointsHeading).toBeVisible()
    await earnPoints.earnPointsLoyalityAmountDetails('90')
    // await page.waitForTimeout(3000)
    
    await earnPoints.earnPointsLoyalityPointsDetails('4')
    // await page.waitForTimeout(3000)

    await earnPoints.earnPointsSaveButton()

    await toastermsg(page,earnPoints.toasterMessage,'Points Updated Successfully.')


})