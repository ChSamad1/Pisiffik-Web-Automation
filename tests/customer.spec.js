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
    await customer.gotocustomerPage()
    await expect(customer.customerHeading).toBeVisible()
    
    const options = await page.$$('#Status option')
    console.log("number of statusBar options:",options.length)
    await expect(options.length).toBe(3)
    
    const employeeOption = await page.$$('#Employee option')
    console.log("number of employeeBar options:",employeeOption.length)
    await expect(employeeOption.length).toBe(3)

    await customer.sFilterbutton()

    const entriesOption = await page.$$('#DataTables_Table_0_length option')
    console.log("number of EntriesBar options:",entriesOption.length)
    await expect(entriesOption.length).toBe(4)
    await expect(customer.search).toBeVisible()
   
   //for table grid
   const list = page.locator('.table-light')
   await expect(list).toHaveCount(1)
   //await page.waitForTimeout(3000)
   // for table body
   const list1 = page.locator('tbody')
   await expect(list1).toHaveCount(1)
   await expect(customer.showingEntriesPerPg).toBeVisible()



//another way to see count
//const gridTable = await page.locator('table-light')
//    const elements = await page.locator('thead tr th')
//    console.log('number of columns:',await elements.count())
//    expect (await elements.count()).toBe(11)



//await customer.cDropDownNavigation()
    // await expect(customer.filterButton).toBeVisible()


//     const cElementsToBeVisible =[
//         customer.sNOGrid,
//         customer.loyaltyIdGrid,
//         customer.customerNameGrid,
//         customer.emailCard,
//         customer.phoneCard,
//         customer.earnedPointsCard,
//         customer.pointsRedeemCard,
//         customer.availablePointsCard,
//         customer.earnedPointsCard,
//         customer.statusCard,
//         customer.actionCard,
        
//     ]
//    for (let gridCV of cElementsToBeVisible ){
//     await expect(gridCV).toBeVisible()
//    }

})
