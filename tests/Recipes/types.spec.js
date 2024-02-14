const {test,expect} = require('@playwright/test')
const{loginPage} = require('../../pages/login.page')
const{dashboardPage} = require('../../pages/dashboard.page')
const{recipessidebar} =require('../../pages/Recipes/recipessidebar.page')
const{types} =require('../../pages/Recipes/types.page')
const staticData = require('../../data/staticData')


test('Recipe Types Validation', async ({page}) =>{
    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const recipessidebarpg = new recipessidebar(page)
    const typespg = new types(page)
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await recipessidebarpg.RecipesNavDown()
    await typespg.ClicktoTypes()
    await expect(typespg.page).toHaveURL(staticData.RecipesTypesUrl)
    await expect(typespg.recipieTypesHeading).toBeVisible()
    const entriesOption = await page.textContent(typespg.showEntry)
    await expect (entriesOption).toContain('10')
    await expect (entriesOption).toContain('25')
    await expect (entriesOption).toContain('50')
    await expect (entriesOption).toContain('100')
    await typespg.ShowingEntries()
    await typespg.TypesAddNewButton()
    await typespg.RecipeName('test')
    await typespg.SaveButton()
    await typespg.EditButton()
    await typespg.EditName('new test')
    await typespg.EditSaveButton()
    await typespg.DeleteButton()
    await typespg.NextPageButton()
    await typespg.SearchBar('new test')



}
)