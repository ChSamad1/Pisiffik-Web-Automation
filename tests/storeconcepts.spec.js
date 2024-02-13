const {test,expect} = require('@playwright/test')
const{loginPage} = require('../pages/login.page')
const{dashboardPage} = require('../pages/dashboard.page')
const{conceptssidebarPage} =require('../pages/Concepts/conceptssidebar.page')
const {storeconceptsPage} = require('../pages/Concepts/storeconcepts.page')
const staticData = require('../data/staticData')

test('Store Concepts Validation', async ({page}) => {

    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const conceptsNav = new conceptssidebarPage(page)
    const StoreConcept = new storeconceptsPage(page)

    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await conceptsNav.ConceptsDown()
    await conceptsNav.StoreConceptButton()
    await expect (StoreConcept.storeConceptHeading).toBeVisible()
    const entriesOption = await page.textContent(StoreConcept.storeConceptEntries)
    await expect (entriesOption).toContain('10')
    await expect (entriesOption).toContain('25')
    await expect (entriesOption).toContain('50')
    await expect (entriesOption).toContain('100')
    await StoreConcept.NextButton()
    await StoreConcept.AddNewButton()
    
    const storeName = 'Emporium';
    await StoreConcept.selectStore(storeName)
    const selectedStore = await StoreConcept.getSelectedStoreValue()
    await expect(selectedStore).toBe('73')
    const conceptName ='SUKU'
    await StoreConcept.selectConcept(conceptName)
    const selectedConcept = await StoreConcept.getSelectedConceptValue()
    await expect(selectedConcept).toBe('13')
    await StoreConcept.SaveChanges()
    await page.waitForTimeout(4000)
    await StoreConcept.EditButton()

    const editconceptName = 'PISIFFIK'
    await StoreConcept.EditConcept(editconceptName)
    const editconcept = await StoreConcept.getEditConceptValue()
    await expect(editconcept).toBe('2')
    await StoreConcept.EditSaveChanges()
    await page.waitForTimeout(3000)
    await StoreConcept.Delete()
    await StoreConcept.StoreSearch('Samad')
    await StoreConcept.ShowingEntries()
    
}
















)