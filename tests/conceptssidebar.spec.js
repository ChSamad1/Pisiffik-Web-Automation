const {test,expect} = require('@playwright/test')
const{loginPage} = require('../pages/login.page')
const{dashboardPage} = require('../pages/dashboard.page')
const{conceptssidebarPage} =require('../pages/Concepts/conceptssidebar.page')
const staticData = require('../data/staticData')

test('mainConcepts', async ({page}) => {
    
    
    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const conceptsNav = new conceptssidebarPage(page)
    
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await conceptsNav.ConceptsDown()
    await conceptsNav.ConceptsButton()
    

})