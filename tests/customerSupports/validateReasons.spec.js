const {test,expect} = require('@playwright/test')
const{loginPage} = require('../../pages/login.page')
const{dashboardPage} = require('../../pages/dashboard.page')
const{customerSupportsPage} = require('../../pages/customerSupports/customerSupports.page')
const {reasonsPage} = require('../../pages/customerSupports/reasons.page')
const staticData = require('../../data/staticData')

test('Reasons Validation', async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const customerSupports = new customerSupportsPage(page)
    const reasons = new reasonsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await customerSupports.navigateToCustomerOption()
    await reasons.navigateToReasonsPage()
    await expect(reasons.page).toHaveURL(staticData.reasonsUrl)
    await expect(reasons.reasonsHeading).toBeVisible()
    await reasons.reasonsAddNewOptions()
    await page.waitForTimeout(3000)


    await reasons.reasonsAddNewData('Ali')
    await page.waitForTimeout(6000)

    const noOfColAfterInsEntry = await page.locator(reasons.reasonsTableDetails)
    await page.waitForTimeout(5000)

    console.log('number of columns After inserting New column:',await noOfColAfterInsEntry.count())
    expect (await noOfColAfterInsEntry.count()).toBe(7)

     await reasons.reasonEntriesNoPerPg()  
     
     await reasons.reasonsDelInsertingEntry()

    const noOfColAfterDelEntry = await page.locator(reasons.reasonsTableDetails)
    console.log('number of columns After Deleting New column:', await  noOfColAfterDelEntry.count())
    expect (await noOfColAfterDelEntry.count()).toBe(6)

    
    const  reasonsEntriesOptions = await page.textContent(reasons.reasonsEntriesOpt)
    await expect(reasonsEntriesOptions).toContain('10')
    await expect(reasonsEntriesOptions).toContain('25')
    await expect(reasonsEntriesOptions).toContain('50')
    await expect(reasonsEntriesOptions).toContain('100')


    await reasons.reasonsSearchOpt('Complaint')
    await page.waitForTimeout(3000)
    await reasons.reasonsTableDetals('Address')

    await reasons.reasonEntriesNoPerPg()   
 


})
