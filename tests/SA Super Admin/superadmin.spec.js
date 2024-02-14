const {test, expect} = require('@playwright/test')
const { loginPage } = require('../../pages/login.page')
const { dashboardPage } = require('../../pages/dashboard.page')
const { superadminPage } =require('../../pages/SA Super Admin/superadmin.page')
const  staticData = require('../../data/staticData')

 test("Super Admin", async({page}) =>{

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const Super = new superadminPage(page)
    await login.gotoLoginPage()
    await login.Login(staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await Super.saAdmin()
    await Super.myAccount()
    await expect(Super.page).toHaveURL(staticData.userProfileUrl)
    await Super.changeName('Samad')
    await Super.oldPassword(staticData.password)
    await Super.NewPassword(staticData.newPassword)
    await Super.ConfirmPassword(staticData.newPassword)






 })