exports.NewsPage = class NewsPage{
    constructor(page){
        this.page = page
        this.gotoNews = page.getByRole('link', { name: 'News', exact: true })
        this.newsHeading = page.getByRole('heading',{name:'News'})
        this.dropdownSelector = page.locator('#st')
        this.clrFilterBtn  = page.locator('.rounded.btn.btn-success.clear_filter')
        this.showEntry= '.form-select.form-select-sm'
        this.showingEnt =page.locator('.dataTables_info')
        this.searchBar = page.locator('.form-control.form-control-sm')
        this.addNewBtn = page.getByRole('link',{name:'󰐗 Add New'})
        this.activeRadioSelector = page.locator('input[name="is_active"][value="1"]')
}
async GoToNewsPage(){
    await this.gotoNews.click()
}
async selectStatus(status) {
    await this.dropdownSelector.click()
    await this.dropdownSelector.selectOption({ value: status })
}
async ClearFilterButton(){
    await this.clrFilterBtn.click()
}
async ShowingEntries(){
    const entriesText = await this.showingEnt.textContent()
}
async SearchBar(name){
    await this.searchBar.fill(name)
}
async AddNewButon(){
    await this.addNewBtn.click()
}
async isActiveRadioSelected() {
    await this.activeRadioSelector.click()
    await this.activeRadioSelector.isChecked()
}

}