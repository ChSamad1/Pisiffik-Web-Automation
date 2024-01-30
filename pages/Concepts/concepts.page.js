exports.conceptsPage = class conceptsPage{
    constructor(page){
        this.page =page
        this.navigateToConceptsPage = page.getByRole('link',{name: 'Concepts', exact: true})
        this.conceptsPgHeading = page.getByRole('heading',{name: 'Concepts'})
        this.EntriesOptionPerPage = '.form-select.form-select-sm'
        this.conceptsPgStatusOpt = '#st' 
        this.conceptsPgClearFilterBtn = page.getByRole('button',{name: 'Clear Filter'})
        this.conceptsPgAddNewbtn = page.locator('.btn.btn-success.mb-2.ajax-class')
        this.conceptsPgCheckRadioBtn = page.locator('input[type="radio"][value="1"]');
        
        this.conceptsPgAddNewBtnNameTxtBox = page.locator('.form-control').nth(1)
        this.conceptsPgAddNewBtnCategoryOpt = page.locator('.select2-selection__rendered')

        this.conceptsPgAddNewBtnCategoryOptSel = '.select2-results__options'
        this.conceptsPgAddNewBtnCatSel = page.getByRole('option',{name:'KK'})
        this.conceptsPgAddNewbtnUploadImg = page.locator('.form-control').nth(3)
        this.conceptsPgAddNewbtnUploadBannerImg = page.locator('.form-control').nth(4)
        this.conceptsPgAddNewbtnSaveBtn = page.getByRole('button',{name: 'Save'})
        this.conceptsPgAddNewToastMsg = '.toast-message'
        this.conceptsPgAddNewErrorToastMsg = '.toast-message'
        this.conceptsPgSrch = page.locator('.form-control.form-control-sm')
        this.conceptsPgAddNewbtnDelEntry = page.locator('.btn.btn-danger.btn-sm.delete_user_record')
        this.conceptsPgAddNewbtnDelEntryConf = page.getByRole('button',{name: 'YES!'})
        this.conceptsPgAddNewbtnDelEntryConfMsg = page.getByRole('button',{name: 'OK'})
        this.conceptsPgTableHeaderList = page.locator('.table-light')
        this.conceptsTableBodyList = page.locator('tbody')
        this.conceptsPgEntriesPerPg = page.locator('.dataTables_info')
        this.conceptsPgNextPg = page.getByRole('link',{name: 'Next'})
        this.conceptsPgPreviousPg = page.getByRole('link',{name: 'Previous'})



    }

    async navigateToConceptsPg(){
        await this.navigateToConceptsPage.click()
    }
    async conceptsPgClearFilterButton(){
        await this.conceptsPgClearFilterBtn.click()
    }

    async conceptsPgSearch(name){

        await this.conceptsPgSrch.fill(name)

    }
    
    async conceptsPgAddNewbutton(){
        await this.conceptsPgAddNewbtn.click()
    }

    async conceptsPgCheckRadioButton(){
        await this.conceptsPgCheckRadioBtn.check()

    }

    async conceptsPgAddNewBtnNameTextBox(Name){
        await this.conceptsPgAddNewBtnNameTxtBox.fill(Name)
    }

    async conceptsPgAddNewBtnCategoryOption(){
        await this.conceptsPgAddNewBtnCategoryOpt.click()
    }

    async conceptsPgAddNewBtnCategoryOptSelect(){
        await this.conceptsPgAddNewBtnCatSel.click()
    }

        async conceptsPgAddNewbtnUploadImage() {
        await this.conceptsPgAddNewbtnUploadImg.setInputFiles('data/images/logo-search-grid-1x.png');
    }
    async conceptsPgAddNewbtnUploadBannerImage(){
        await this.conceptsPgAddNewbtnUploadBannerImg.setInputFiles('data/images/download.jpeg')
    }

    async conceptsPgAddNewbtnSaveButton(){

        await this.conceptsPgAddNewbtnSaveBtn.click()
    }

    async conceptsPgAddNewbtnDeleteEntry(){
        await this.conceptsPgAddNewbtnDelEntry.click()
    }

    async conceptsPgAddNewbtnDelEntryConfirmation(){
        await this.conceptsPgAddNewbtnDelEntryConf.click()
    }
    async conceptsPgAddNewbtnDelEntryConfMessage(){
        await this.conceptsPgAddNewbtnDelEntryConfMsg.click()
    }

    async conceptsPgTableHeader(){
        await this.conceptsPgTableHeaderList.textContent()
    }
    async conceptsTableBody(){
        await this.conceptsTableBodyList.textContent()
    }

    async conceptsPageNextPageNavigation(){

        await this.conceptsPgNextPg.click()
      
     }
 
     async conceptsPagePreviousPageNavigation(){
 
         await this.conceptsPgPreviousPg.click()
 
     }
     async conceptsPgEntriesNoPerPg(){

        const conceptsPgData = await this.conceptsPgEntriesPerPg
        const getAllData = await conceptsPgData.innerText()
        console.log(getAllData)

    }





    
} 