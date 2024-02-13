const {test,expect} = require('@playwright/test')
const{loginPage} = require('../../pages/login.page')
const{dashboardPage} = require('../../pages/dashboard.page')
const{prodcutssidebarPage} = require('../../pages/Products/productssidebar.page')
const{CategoryPage} = require('../../pages/Products/category.page')
const staticData = require('../../data/staticData')

test('Category', async ({page}) => {
    test.slow()
    
    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const products = new prodcutssidebarPage(page)
    const category = new CategoryPage(page)
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await products.ProductsDownButton()
    await category.NavToCategory()
    await expect(category.page).toHaveURL(staticData.categoryUrl)
    await category.selectStatus('true')
    await category.ClearFilter()
    await expect (category.AddNewBtn).toBeVisible()
    // await category.isActiveRadioSelected()
    // await category.isInActiveRadioSelected()
    // await category.EnterName('test')
    // await category.uploadBannerImage()
    // await category.uploadImage()
    // await category.CategorySelector()
    // await category.CategorySearch('-Nonfood')
    const entriesOption = await page.textContent(category.showEntry)
    await expect (entriesOption).toContain('10')
    await expect (entriesOption).toContain('25')
    await expect (entriesOption).toContain('50')
    await expect (entriesOption).toContain('100')
    await category.ShowingEntries()
    await category.TableHead()
    await category.BodyHead()
    await category.NextButton()
    await category.Search('test')
})
    