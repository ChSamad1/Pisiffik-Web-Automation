const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const { dashboardPage } = require('../pages/dashboard.page')
const {customerPage} = require('../pages/customer.page')
const staticData = require('../data/staticData')

test("Customer Validation" , async ({page}) =>{
    
    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const customer = new customerPage(page)
    await login.gotoLoginPage()
    await login.Login(staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await customer.navigatetocustomerPage() 
    await expect(customer.page).toHaveURL(staticData.customerUrl)
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


      //for customer header table  grid
    const customerTableHeaderList = await page.textContent(customer.customerTableHeader)
    await expect(customerTableHeaderList).toContain('S.No')
    // for table body
    await page.waitForTimeout(3000)
    const customerTableBody = await page.textContent(customer.customerTableData)
    await expect(customerTableBody).toContain('1')
    await page.waitForTimeout(3000)

  

    await customer.customerEntries()
    await customer.customerNextPageNavigation()
   // await page.waitForTimeout(3000)
    await customer.customerEntries()

    await customer.customerPreviousPgNavigation()
    //await page.waitForTimeout(3000) 
    await customer.customerEntries()
    
    await customer.customerSearchOpt()  
  
    
    
//    another way to see count
//    const gridTable = await page.locator('table-light')
//    const elements = await page.locator('tbody tr ')
//    console.log('number of columns:',await elements.count())
//    expect (await elements.count()).toBe(11)

})