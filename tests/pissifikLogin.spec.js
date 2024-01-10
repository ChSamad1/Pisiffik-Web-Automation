const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const staticData = require('../data/staticData')

test('Login Validation', async({page}) =>{

    //login Page
    const login = new loginPage(page)
     await login.gotoLoginPage()
      await expect(login.logo).toBeVisible()
      await expect(login.signInHeading).toBeVisible()
     await expect(login.forgotPassword).toBeVisible()
     await login.Login(staticData.email,staticData.password)
    await expect(login.page).toHaveURL(staticData.dashboardUrl)
    await expect(login.page).toHaveURL(staticData.customerUrl)
    
            
})










