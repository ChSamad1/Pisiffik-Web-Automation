const {test,expect} = require('@playwright/test')
const { loginPage } = require('../../pages/login.page')
const { dashboardPage } = require('../../pages/dashboard.page')
const {conceptsSideBarBtnPage} = require('../../pages/Concepts/conceptsSideBarBtn.page')
const {conceptsPage} = require('../../pages/Concepts/concepts.page')
const {EntriesOption} = require('../../utils/commonHelper')
const {toastermsg, errorToasterMsg, purchasesEntriesNoPerPage} = require('../../utils/commonHelper')
const staticData = require('../../data/staticData')

test("validateConcepts Validation", async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const conceptsSideBar = new conceptsSideBarBtnPage(page)
    const conceptsPg = new conceptsPage(page)
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl) 
    await conceptsSideBar.conceptsSideBarButton()
    await conceptsPg.navigateToConceptsPg()
    await expect(conceptsPg.page).toHaveURL(staticData.conceptsUrl)
    await expect(conceptsPg.conceptsPgHeading).toBeVisible()
    
    const options = await page.textContent(conceptsPg.conceptsPgStatusOpt)
    await expect(options).toContain('Select the Status')
    await expect(options).toContain('Active')
    await expect(options).toContain('InActive')

    await EntriesOption(page,conceptsPg.EntriesOptionPerPage,'102550100')
   
    await conceptsPg.conceptsPgClearFilterButton()
    await conceptsPg.conceptsPgAddNewbutton()
    await conceptsPg.conceptsPgCheckRadioButton()
    await expect(conceptsPg.conceptsPgAddNewBtnNameTxtBox).toBeVisible()
    await conceptsPg.conceptsPgAddNewBtnNameTextBox('ALI')
    await conceptsPg.conceptsPgAddNewBtnCategoryOption()
    await page.waitForTimeout(3000)
    
    const CategoryOptions = await page.textContent(conceptsPg.conceptsPgAddNewBtnCategoryOptSel)
    await expect(CategoryOptions).toContain('KK')
    await expect(CategoryOptions).toContain('HS Kode')
    await expect(CategoryOptions).toContain('Varekategori')

    await conceptsPg.conceptsPgAddNewBtnCategoryOptSelect('KK')
    await conceptsPg.conceptsPgAddNewbtnUploadImage()
    await conceptsPg.conceptsPgAddNewbtnUploadBannerImage()
    await conceptsPg.conceptsPgAddNewbtnSaveButton()
    await toastermsg (page, conceptsPg.conceptsPgAddNewToastMsg, 'Concept created successfully')
    //await errorToasterMsg(page,conceptsPg.conceptsPgAddNewErrorToastMsg,'Please resolve following errors.' )
    await conceptsPg.conceptsPgAddNewbtnDeleteEntry()
    await conceptsPg.conceptsPgAddNewbtnDelEntryConfirmation()
    await conceptsPg.conceptsPgAddNewbtnDelEntryConfMessage()
    await conceptsPg.conceptsPgTableHeader()
    await conceptsPg.conceptsTableBody()
    await page.waitForTimeout(3000)
    await conceptsPg.conceptsPgSearch('PISIFFIK')
    await page.waitForTimeout(3000)

    await conceptsPg.conceptsPgEntriesNoPerPg()
    // await conceptsPg.conceptsPageNextPageNavigation()
    // await conceptsPg.conceptsPgEntriesNoPerPg()
    // await conceptsPg.conceptsPagePreviousPageNavigation()







})