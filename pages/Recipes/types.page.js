exports.types = class types{
    constructor(page){
        this.page = page
        this.navtoTypes =page.getByRole('link',{name:'Types'})
        this.recipieTypesHeading = page.getByRole('heading',{name:'Recipe Type'})
        this.showEntry= '.form-select.form-select-sm'
        this.showingEnt =page.locator('.dataTables_info')
        this.typesAddBtn = page.getByRole('link',{name:'󰐗 Add New'})
        this.recipeTypeName = page.locator('#name')
        this.saveBtn = page.locator('.btn.btn-info.waves-effect.waves-light')
        this.editBtn = page.locator('.btn.btn-primary.btn-sm').nth(0)
        this.editName = page.locator('#name')
        this.editSaveBtn = page.locator('.btn.btn-info.waves-effect.waves-light')
        this.deleteBtn = page.locator('.fas.fa-trash.fa-sm.fa-fw.mr-2').first()
        this.deleteBtnYes = page.getByRole('button',{name:'YES!'})
        this.deleteBtnYesOk = page.getByRole('button',{name:'OK'})
        this.nxtBtn = page.getByRole('link',{name:'Next'})
        this.searchBar = page.locator('.form-control.form-control-sm')
    }
    async ClicktoTypes(){
        await this.navtoTypes.click()
    }
    async ShowingEntries(){
        const entriesText = await this.showingEnt.textContent()
    }
    async TypesAddNewButton(){
        await this.typesAddBtn.click()
    }
    async RecipeName(name){
        await this.recipeTypeName.fill(name)
    }
    async SaveButton(){
        await this.saveBtn.click()
    }
    async EditButton(){
        await this.editBtn.click()
    }
    async EditName(name){
        await this.editName.fill(name)
    }
    async EditSaveButton(){
        await this.editSaveBtn.click()
    }
    async DeleteButton(){
        await this.deleteBtn.click()
        await this.deleteBtnYes.click()
        await this.deleteBtnYesOk.click()

    }
    async NextPageButton(){
        await this.nxtBtn.click()
    }
    async SearchBar(name){
        await this.searchBar.fill(name)
    }
}