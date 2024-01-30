const {test,expect} = require('@playwright/test')
const { loginPage } = require('../../pages/login.page')
const { dashboardPage } = require('../../pages/dashboard.page')
const {conceptsSideBarBtn} = require('../../pages/Concepts/conceptsSideBarBtn.page')
const staticData = require('../../data/staticData')

test("validateConceptsSideBarBtn", async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const conceptsSideBar = new conceptsSideBarBtn(page)
    await login.gotoLoginPage()


    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl) 
    await conceptsSideBar.conceptsSideBarButton()
    
})
