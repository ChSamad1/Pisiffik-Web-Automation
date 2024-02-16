const {test,expect} = require('@playwright/test')
const{loginPage} = require('../pages/login.page')
const{dashboardPage} = require('../pages/dashboard.page')
const{NewsPage} =require('../pages/News.page')
const staticData = require('../data/staticData')

test('News Validation', async ({page}) =>{
    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const news = new NewsPage(page)
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await news.GoToNewsPage()
    await expect(news.page).toHaveURL(staticData.NewsUrl)
    await expect(news.newsHeading).toBeVisible()
    await news.selectStatus('1')
    await news.ClearFilterButton()
    const entriesOption = await page.textContent(news.showEntry)
    await expect (entriesOption).toContain('10')
    await expect (entriesOption).toContain('25')
    await expect (entriesOption).toContain('50')
    await expect (entriesOption).toContain('100')
    await news.ShowingEntries()
    await news.SearchBar('Test')
    await news.AddNewButon()
    await news.isActiveRadioSelected()



})