const {test, expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const { dashboardPage } = require('../pages/dashboard.page')
const  staticData = require('../data/staticData')

 test("Dashboard Validation", async({page}) =>{

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    await login.gotoLoginPage()
    await login.Login(staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)       
    await expect(dashboard.dashboardHeading).toBeVisible()
    await dashboard.dropdownNavigation()
    await expect(dashboard.bellIcon).toBeVisible()
    await expect(dashboard.userAdmin).toBeVisible()

    const cardsElementsToBeVisible =[
        dashboard.totalLoyaltyCustomersCard,
        dashboard.activeLoyaltyMembersCard,
        dashboard.newMembersTodayCard,
        dashboard.totalPointsEarnedCard,
        dashboard.totalRedeemPointsCard,
        dashboard.blankCard,
    ]    

        for(let element of cardsElementsToBeVisible){
    await expect(element).toBeVisible()
        
}

        const elementsToBeVisible = [
        dashboard.latestActiveOffers,
        dashboard.offerList,
        dashboard.effectiveTillDate,
    ]

    for(let gridDV of elementsToBeVisible){
    await expect(gridDV).toBeVisible()
     }

     // foreach loop
    //await page.pause()
    const elementValues = await page.$$('my-2 py-1')
     for(const elementValue of elementValues)
     {
        const values = await elementValue.textContent()
        console.log(values)

     }
     
     await dashboard.navigatetofferPage()
     await expect(dashboard.offerpageHeading).toBeVisible()
})