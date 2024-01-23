const {test,expect} = require('@playwright/test')
const{loginPage} = require('../pages/login.page')
const{dashboardPage} = require('../pages/dashboard.page')
const {reasonsPage} = require('../pages/customerSupports/reasons.page')
const staticData = require('../data/staticData')

test.only ('Reasons Validation', async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const reasons = new reasonsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await reasons.gotoreasonsPage()
    await expect(reasons.reasonsHeading).toBeVisible()
    //await reasons.reasonsAddNewOptions()
    await page.waitForTimeout(3000)

    // const addNewBtn = await page.textContent(reasons.reasonsAddNewDetails)
    // console.log('number of columns:',await elements.count())
    // //expect (await elements.count()).toBe(11)
    

    

    const  reasonsEntriesOptions = await page.textContent(reasons.reasonsEntriesOpt)
    await expect(reasonsEntriesOptions).toContain('10')
    await expect(reasonsEntriesOptions).toContain('25')
    await expect(reasonsEntriesOptions).toContain('50')
    await expect(reasonsEntriesOptions).toContain('100')


    //await reasons.reasonsSearchOpt('Complaint')

    await reasons.reasonsTableDetals('Address')

    // const gridTable = await page.locator('table-light')
    // const elements = await page.locator('tbody tr ')
    // console.log('number of columns:',await elements.count())
    // expect (await elements.count()).toBe(6)
    const list = page.locator('tr > . ');
await expect(list).toHaveCount(0);


    await reasons.reasonEntriesNoPerPg()    


})
