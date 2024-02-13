const {test,expect} = require('@playwright/test')
const{loginPage} = require('../../pages/login.page')
const{dashboardPage} = require('../../pages/dashboard.page')
const{prodcutssidebarPage} = require('../../pages/Products/productssidebar.page')
const staticData = require('../../data/staticData')

test('productssidebar', async ({page}) => {
    
    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const products = new prodcutssidebarPage(page)
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await products.ProductsDownButton()
}
)