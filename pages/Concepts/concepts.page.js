exports.conceptsPage = class conceptsPage{
    constructor(page){
       this.page = page;
       this.conceptsHeading =page.getByRole('heading' ,{name: 'Concepts'})
       this.dropdownSelector = page.locator('#st')
       this.clrFilterBtn = page.locator('.rounded.btn.btn-success.clear_filter')
       this.conceptsAddBtn =page.locator('.btn.btn-success.mb-2.ajax-class')
       this.activeRadioSelector = page.locator('input[name="is_active"][value="1"]')
       //this.inactiveRadioSelector = page.locator('input[name="is_active"][value="0"]')
       this.addConceptsNam = page.locator('.form-control').nth(1)
       this.addconceptscat = page.locator('.select2-selection__rendered')
       this.addConceptsCatList = page.locator('.select2-results')
       this.conceptsList = page.locator('.select2-results__option.select2-results__option--highlighted')
       this.chooseFile = page.locator('input[name="file"]')
       
       this.bannerImageSelector =page.locator('#upload_image')
       
       
       this.saveBtn = page.getByRole('button', { name: 'Save' })
       this.deleteBtn = page.locator('.btn.btn-danger.btn-sm.delete_user_record')
       this.confirmDelete = page.getByRole('button' ,{name: 'YES!'})
       this.confirmOk = page.locator('.btn.btn-default')
       this.closeBtn = page.locator('.btn.btn-secondary.waves-effect.close-modal')
       this.showEntry= '.form-select.form-select-sm'
       this.searchFilter= page.locator('.form-control.form-control-sm')
       this.nextBtn =page.getByRole('link' ,{name: 'Next'})
       this.showingEnt =page.locator('.dataTables_info')

    } 

      async gotoconecptspage(){
        await this.page.goto('/concepts')
      }
      async selectStatus(status) {
        await this.dropdownSelector.click()
        await this.dropdownSelector.selectOption({ value: status })
      }
      async clearFilterButton(){
        await this.clrFilterBtn.click()
      }
      async conceptsAddNewButton(){
        await this.conceptsAddBtn.click()
      }
      async isActiveRadioSelected() {
      await this.activeRadioSelector.isChecked()

    }
    async isInActiveRadioSelected(){
    await this.inactiveRadioSelector.isChecked()
    }
    async addConceptsName(name){
      await this.addConceptsNam.fill(name)
    }
    async addConceptsCategory(){
      await this.addconceptscat.click()
    }
    async CategoryOption(){
      await this.conceptsList.click()
    }
    async uploadImage(){
    await this.chooseFile.setInputFiles('image/HR LinkedIn-04.jpg')
      
    }
    async uploadBannerImage() {
      await this.bannerImageSelector.setInputFiles('image/HR LinkedIn-04.jpg')
      
    
    }
    async SaveButton(){
      await this.saveBtn.click()
    }
    async DeleteButton(){
      await this.deleteBtn.click()
    }
    async confirmYes(){
      await this.confirmDelete.click()
    }
    async Ok(){
      await this.confirmOk.click()
    }
    

    
    
     async Search(name){
      await this.searchFilter.fill(name)
      
     }
     async NextPage(){
      await this.nextBtn.click()
     }
     async ShowingEntries(){
      const entriesText = await this.showingEnt.textContent()
       
    console.log(entriesText)
     }


    

  }
