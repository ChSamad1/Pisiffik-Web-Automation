exports.storeproducts = class storeproducts {
    constructor(page){
    this.page = page
    this.navStoreProducts = page.getByRole('link',{name:'Store Products'})
    this.storeHeading = page.getByRole('heading',{name:'Store Products'})
    this.dropdownSelector = page.locator('#Status')
    this.ClrFillter = page.locator('.rounded.btn.btn-success.clear_filter')
    this.showEntry = '.form-select.form-select-sm'
    this.showingEnt =page.locator('.dataTables_info')
    this.tableHead =page.locator('.table-light')
    this.bodyHead = page.locator('tbody')
    this.nxtBtn = page.getByRole('link',{name:'Next'})
    this.CategorySearch =page.locator('.form-control.form-control-sm')
}
async NavToStoreProducts(){
    await this.navStoreProducts.click()
}
async selectConcept(conceptName){
    await this.page.selectOption('#concept',conceptName)
}
async getSelectedConceptValue(){
    const selectedConcept = await this.page.$eval('#concept',el => el.value)
    return selectedConcept
}
async selectStatus(status) {
    await this.dropdownSelector.click()
    await this.dropdownSelector.selectOption({ value: status })
}
async ClearFilter(){
    await this.ClrFillter.click()
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
async Search(name){
    await this.CategorySearch.fill(name)

}
}
   