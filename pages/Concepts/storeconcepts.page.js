exports.storeconceptsPage = class storeconceptsPage{
    constructor(page){
       this.page = page;
       this.storeConceptHeading = page.locator('.page-title-box.page-title-box-alt')
       this.storeConceptEntries = '.form-select.form-select-sm'
       this.storeConceptSearch = page.locator('.form-control.form-control-sm')
       this.storeConceptAddBtn = page.locator('.btn.btn-success.mb-2')
       this.storeConceptSaveBtn = page.locator('#saveStoreCampaign')
       this.storeConceptNextBtn = page.getByRole('link' ,{name: 'Next'})
       this.storeConceptShowingEntries = page.locator('.dataTables_info')
       this.storeConceptEdit = page.locator('.btn.btn-primary.btn-sm.EdtBtn').first()
       this.storeConceptSaveChange = page.locator('#updateCampaign')
       this.storeConceptDelete = page.locator('.btn.btn-danger.btn-sm.DelBtn.mx-1').first()
       this.storeConceptDeleteConfirm = page.getByRole('button' ,{name: 'YES!'})


       



    }
    async StoreSearch(name){
     await this.storeConceptSearch.fill(name)   
    }
    async AddNewButton(){
        await this.storeConceptAddBtn.click()
    }
    async selectStore(storeName) {
        await this.page.selectOption('#store', storeName)
    }

    async getSelectedStoreValue() {
        const selectedStore = await this.page.$eval('#store', el => el.value)
        return selectedStore
    
    }
    async selectConcept(conceptName){
        await this.page.selectOption('#concept',conceptName)
    }
    async getSelectedConceptValue(){
        const selectedConcept = await this.page.$eval('#concept',el => el.value)
        return selectedConcept
    }
    async SaveChanges(){
        await this.storeConceptSaveBtn.click()
    }
    async NextButton(){
        await this.storeConceptNextBtn.click()
    }
    async EditButton(){
        await this.storeConceptEdit.click()
    }
    async EditConcept(editconceptName){
        await this.page.selectOption('#conceptEdt',editconceptName)
    }
    async getEditConceptValue(){
        const editConcept = await this.page.$eval('#conceptEdt',el => el.value)
        return editConcept
    }
    async EditSaveChanges(){
        await this.storeConceptSaveChange.click()
    }
    async Delete(){
        await this.storeConceptDelete.click()
        await this.storeConceptDeleteConfirm.click()
    }
    async ShowingEntries(){
        const entriesText = await this.storeConceptShowingEntries.textContent()
       
    console.log(entriesText)
    }

   













}
