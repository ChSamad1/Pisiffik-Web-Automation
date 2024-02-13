exports.CategoryPage = class CategoryPage {
    constructor(page){
        this.page = page
        this.navtocategory = page.getByRole('link',{name:'Categories'})
        this.dropdownSelector = page.locator('#Status')
        this.ClrFillter = page.locator('.rounded.btn.btn-success.clear_filter')
        this.AddNewBtn = page.locator('.btn.btn-success.mb-2.ajax-class')
        this.activeRadioSelector = page.locator('input[type="radio"][value="1"]')
        this.inactiveRadioSelector = page.locator('input[type="radio"][value="0"]')
        this.parentCategorySelector =page.locator('.select2-selection.select2-selection--single')
        this.parentCategorySearch = page.locator('.select2-search__field')
        this.nameInput = page.locator('.form-control').nth(1)
        this.bannerImageSelector =page.locator('#upload_image')
        this.bannerCrop =page.locator('#crop')
        this.chooseFile = page.locator('input[name="file"]')
        this.showEntry= '.form-select.form-select-sm'
        this.showingEnt =page.locator('.dataTables_info')
        this.tableHead =page.locator('.table-light')
        this.bodyHead = page.locator('tbody')
        this.nxtBtn = page.getByRole('link',{name:'Next'})
        this.CategorySearch =page.locator('.form-control.form-control-sm')
    }
    async NavToCategory(){
        await this.navtocategory.click()
    }
    async selectStatus(status) {
        await this.dropdownSelector.click()
        await this.dropdownSelector.selectOption({ value: status })
    }
    async ClearFilter(){
        await this.ClrFillter.click()
    
    // }
    // async isActiveRadioSelected() {
    //     await this.activeRadioSelector.check()
    // }
    // async isInActiveRadioSelected(){
    //     await this.inactiveRadioSelector.check()
    // }
    // async EnterName(name){
    //     await this.nameInput.fill(name)
    // }

    // async uploadBannerImage() {
    //     await this.bannerImageSelector.setInputFiles('image/HR LinkedIn-04.jpg')
    //     await this.bannerCrop.click()
    // }
    // async uploadImage(){
    //     await this.chooseFile.setInputFiles('image/HR LinkedIn-04.jpg')
    // }
    // async CategorySelector(){
    //     await this.parentCategorySelector.click()
        
    // }
    // async CategorySearch(name){
    //    await this.parentCategorySearch.fill(name)
    //    await this.parentCategorySearch.press('Enter')
    }
    async ShowingEntries(){
        const entriesText = await this.showingEnt.textContent()
    }
    async TableHead(){
        await this.tableHead.textContent()
    }
    async BodyHead(){
        await this.bodyHead.textContent()
    }
    async NextButton(){
        await this.nxtBtn.click()
    }
    async Search(name){
        await this.CategorySearch.fill(name)
    }
}