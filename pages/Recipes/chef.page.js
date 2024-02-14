exports.chefPage = class chefPage{
    constructor(page){
        this.page = page
        this.navtoChef = page.getByRole('link',{name:'Chef'})
        this.chefPgHeading = page.getByRole('heading',{name:'Chef'})
        this.dropdownSelector = page.locator('#Status')
        this.clrBtn = page.locator('.rounded.btn.btn-success.clear_filter')
        this.showEntry= '.form-select.form-select-sm'
        this.showingEnt =page.locator('.dataTables_info')
        this.searchBar = page.locator('.form-control.form-control-sm')
        this.addNewBtn = page.getByRole('link',{name:'󰐗 Add New'})
        this.inactiveRadioSelector = page.locator('input[name="is_active"][value="0"]')
        this.addChefName = page.locator('.form-control').nth(0)
        this.countrySelect = 'select[name="country_id"]'
        this.chooseFile = page.locator('input[name="file"]')
        this.addSaveBtn = page.locator('#btn-submit')
        this.nxtBtn = page.getByRole('link',{name:'Next'})
        this.previousBtn = page.getByRole('link',{name:'Previous'})
        this.viewBtn = page.getByRole('link',{name:'󰛐'})
        this.viewCloseBtn = page.getByRole('button',{name:'Close'})
        this.editBtn = page.locator('.btn.btn-primary.btn-sm').nth(0)
        this.editSaveBtn = page.getByRole('button',{name:'Save'})
        this.deleteBtn = page.locator('.btn.btn-danger.btn-sm.delete_record.mr-2').first()
        this.deleteBtnYes = page.getByRole('button',{name:'YES!'})
        this.deleteBtnOk = page.getByRole('button',{name:'OK'})
    }
    async GotoChefPage(){
        await this.navtoChef.click()
    }
    async selectStatus(status) {
        await this.dropdownSelector.click()
        await this.dropdownSelector.selectOption({ value: status })
    }
    async ClearFillterButton(){
        await this.clrBtn.click()
    }
    async ShowingEntries(){
        const entriesText = await this.showingEnt.textContent()
    }
    async ChefPageSearchBar(name){
        await this.searchBar.fill(name)
    }
    async AddNewButton(){
        await this.addNewBtn.click()
    }
    async isInActiveRadioSelected(){
        await this.inactiveRadioSelector.click();
        await this.inactiveRadioSelector.isChecked()
    }
    async EnterChefName(name){
        await this.addChefName.fill(name)
    }
    async selectCountry(countryName) {
        await this.page.selectOption(this.countrySelect, { label: countryName });
      }
    
      async getSelectedCountry() {
        const selectedOption = await this.page.$eval(this.countrySelect, select => select.value);
        return selectedOption;
      }
      async uploadImage(){
        await this.chooseFile.setInputFiles('image/HR LinkedIn-04.jpg')
      }
      async SaveButton(){
        await this.addSaveBtn.click()
      }
      async NextButton(){
        await this.nxtBtn.click()
      }
      async PerviousButton(){
        await this.previousBtn.click()
      }
      async ViewButton(){
        await this.viewBtn.click()
      }
      async ViewCloseButton(){
        await this.viewCloseBtn.click()
      }
      async EditButton(){
        await this.editBtn.click()
      }
      async EditSaveButton(){
        await this.editSaveBtn.click()
      }
      async DeleteButton(){
        await this.deleteBtn.click()
      }
      async DeleteButtonYes(){
        await this.deleteBtnYes.click()
      }
      async DeleteButtonOK(){
        await this.deleteBtnOk.click()
      }

    
}