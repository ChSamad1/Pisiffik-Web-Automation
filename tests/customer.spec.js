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
    
    const options = await page.textContent(customer.statusOptions)
    await expect(options).toContain('Select Status')
    await expect(options).toContain('Active')
    await expect(options).toContain('InActive')

    const employeeOption = await page.textContent(customer.employeeStatusOption)
    await expect(employeeOption).toContain('Select Option')
    await expect(employeeOption).toContain('Yes')
    await expect(employeeOption).toContain('No')

    await customer.customerStatussFilterbtn()

    const entriesOption = await page.textContent(customer.entriesOptionBar)
    await expect(entriesOption).toContain('10')
    await expect(entriesOption).toContain('25')
    await expect(entriesOption).toContain('50')
    await expect(entriesOption).toContain('100')

    //  await customer.customerSearchOpt()

      //for customer header table  grid
    const customerTableHeaderList = await page.textContent(customer.customerTableHeader)
    await expect(customerTableHeaderList).toContain('S.No')
    // for table body
    const customerTableBody = await page.textContent(customer.customerTableData)
    await expect(customerTableBody).toContain('1')


    // const customerentries = await page.textContent(customer.customerEntriesPerpage)
    // await expect(customerentries).toContain('Showing 1 to 10 of 9,094 entries')
    await expect(customer.customerEntriesPerpage).toBeVisible()
    await customer.customerNextPageNavigation()
    await expect(customer.customerEntriesPerpage).toBeVisible()

    //await page.waitForTimeout(3000)
    // const customerEntriesPg2 = await page.textContent(customer.customerEntriesPerpage)
    // await expect(customerEntriesPg2).toContain('Showing 11 to 20 of 9,094 entries')
    await customer.customerPreviousPgNavigation()
    await expect(customer.customerEntriesPerpage).toBeVisible() 

    await customer.customerSearchOpt()  


    //await page.waitForTimeout(3000)

    // const customerEntriesPreviousPg1 = await page.textContent(customer.customerEntriesPerpage)
    // await expect(customerEntriesPreviousPg1).toContain('Showing 1 to 10 of 9,094 entries')
    

    
    
//another way to see count
//const gridTable = await page.locator('table-light')
//    const elements = await page.locator('thead tr th')
//    console.log('number of columns:',await elements.count())
//    expect (await elements.count()).toBe(11)

})