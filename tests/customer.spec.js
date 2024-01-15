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

    //await customer.customerSearchOpt()


    //await customer.customerSearchOpt()
      //for customer header table  grid
    const customerTableHeaderList = await page.textContent(customer.customerTableHeader)
    await expect(customerTableHeaderList).toContain('S.No')
    // for table body
    const customerTableBody = await page.textContent(customer.customerTableData)
    await expect(customerTableBody).toContain('1')

    await page.waitForTimeout(5000)

    await customer.nextPageBtn()
    
    
  
    

})

    // const tablePagination = await page.locator(customer.customerTablePagination)
    // await (tablePagination).count()

    // for (let p=0;p< await tablePagination.count();p++)
    // {
    //   if (p>0)
    //   {
    //     await tablePagination.nth(p).click()
    //   }

    //   for(let i=0;i<await rows.count();i++)
    //   {
    //     const row = rows.nth(i)
    //     const tds=row.locator('td')

    //     for(let j=0;j<await tds.count();j++)
    //     {
    //       tds.nth(j).textContent()
    //     }
    //   }
    //       }

    // const customerTableList = await page.getByRole('grid').allTextContents();
 

   //await page.waitForTimeout(3000)
//    // for table body
//    const list1 = page.locator('tbody')
//    await expect(list1).toHaveCount(1)
//    await expect(customer.showingEntriesPerPg).toBeVisible()



//another way to see count
//const gridTable = await page.locator('table-light')
//    const elements = await page.locator('thead tr th')
//    console.log('number of columns:',await elements.count())
//    expect (await elements.count()).toBe(11)






