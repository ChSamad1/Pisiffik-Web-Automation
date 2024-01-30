const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const { toastermsg, errorToasterMsg} = require('../utils/commonHelper')
const staticData = require('../data/staticData')


test('Login Validation with valid credentials', async({page}) =>{

    //login Page
    const login = new loginPage(page)
     await login.gotoLoginPage()
     await expect(login.logo).toBeVisible()
     await expect(login.signInHeading).toBeVisible()
     await expect(login.forgotPassword).toBeVisible()
     await login.Login(staticData.email,staticData.password)
     await toastermsg (page, login.logInToastrmsg, 'LoggedIn successfully');
     await expect(login.page).toHaveURL(staticData.dashboardUrl)
    //  await page.waitForTimeout(3000)

    //  await expect(login.page).toHaveURL(staticData.customerUrl)

    //  await expect(login.page).toHaveURL(staticData.purchaseUrl)
    //  await expect(login.page).toHaveURL(staticData.ticketsUrl)
    //  await expect(login.page).toHaveURL(staticData.reasonsUrl)
    //  await expect(login.page).toHaveURL(staticData.membershipProductsUrl)

          
          

     
    

})

test.skip('Login Validation with Invalid credentials', async({page}) =>{

    //login Page
    const login = new loginPage(page)
     await login.gotoLoginPage()
     await expect(login.logo).toBeVisible()
     await expect(login.signInHeading).toBeVisible()
     await expect(login.forgotPassword).toBeVisible()
     await login.Login(staticData.email,staticData.invalidPassword)
    await  errorToasterMsg(page, login.errorToastrMsg, 'Email or Password entered is incorrect.');


                
})











