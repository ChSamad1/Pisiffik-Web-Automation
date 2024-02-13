const {test,expect} = require('@playwright/test')
const{loginPage} = require('../pages/login.page')
const{dashboardPage} = require('../pages/dashboard.page')
const{conceptssidebarPage} =require('../pages/Concepts/conceptssidebar.page')
const {conceptsPage} = require('../pages/Concepts/concepts.page')
const staticData = require('../data/staticData')


test('Concepts Validation', async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const conceptsNav = new conceptssidebarPage(page)
    const concepts = new conceptsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await conceptsNav.ConceptsDown()
    await conceptsNav.ConceptsButton()
    await expect (concepts.conceptsHeading).toBeVisible()
    await concepts.selectStatus('1')
    await concepts.clearFilterButton()
    await concepts.conceptsAddNewButton()
    await concepts.isActiveRadioSelected()
    //await concepts.isInActiveRadioSelected()
    await concepts.addConceptsName('test')
    await concepts.addConceptsCategory()
    await expect (concepts.addConceptsCatList).toBeVisible()
    await concepts.CategoryOption()
    await concepts.uploadImage()
    
    await concepts.uploadBannerImage()
    
    await concepts.SaveButton()
    await page.waitForTimeout(4000)
    //await concepts.DeleteButton()
    //await concepts.confirmYes()
    //await concepts.Ok()
    const entriesOption = await page.textContent(concepts.showEntry)
    await expect (entriesOption).toContain('10')
    await expect (entriesOption).toContain('25')
    await expect (entriesOption).toContain('50')
    await expect (entriesOption).toContain('100')
    //await concepts.Search('Samad')
    await concepts.ShowingEntries()
    //await concepts.NextPage()
    // const ShowEntries = await page.innerText(concepts.showingEnt)
    // console.log(ShowEntries)
    await concepts.ShowingEntries()
    

    
  
})