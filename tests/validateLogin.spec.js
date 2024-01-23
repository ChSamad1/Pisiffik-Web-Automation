const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const staticData = require('../data/staticData')

test('Login Validation with valid credentials', async({page}) =>{

    //login Page
    const login = new loginPage(page)
     await login.gotoLoginPage()
     await expect(login.logo).toBeVisible()
     await expect(login.signInHeading).toBeVisible()
     await expect(login.forgotPassword).toBeVisible()
     await login.Login(staticData.email,staticData.password)
     await login.toastrmsg()
     await expect(login.page).toHaveURL(staticData.dashboardUrl)
     await expect(login.page).toHaveURL(staticData.customerUrl)
     await expect(login.page).toHaveURL(staticData.purchaseUrl)
     await expect(login.page).toHaveURL(staticData.ticketsUrl)

     
    
            
})

test('Login Validation with Invalid credentials', async({page}) =>{

    //login Page
const login = new loginPage(page)

     await login.gotoLoginPage()
     await expect(login.logo).toBeVisible()
     await expect(login.signInHeading).toBeVisible()
     await expect(login.forgotPassword).toBeVisible()
     await login.Login(staticData.email,staticData.invalidPassword)
     await login.errortoastrmsg()

    //  await expect(login.page).toHaveURL(staticData.dashboardUrl)
    //  await expect(login.page).toHaveURL(staticData.customerUrl)
    //  await expect(login.page).toHaveURL(staticData.purchaseUrl)
    
            
})











