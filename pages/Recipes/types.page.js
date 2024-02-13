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
    

}