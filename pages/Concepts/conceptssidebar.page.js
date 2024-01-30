exports.conceptssidebarPage = class conceptssidebarPage{
    constructor(page){
       this.page = page;
       this.conceptsDropDown = page.getByRole('link' ,{name: ' Concepts 󰅂'})
       this.conceptsBtn = page.getByRole('link' ,{ name: 'Concepts', exact: true })
    }
    async ConceptsDown(){
        await this.conceptsDropDown.click()
    }
    async ConceptsButton(){
        await this.conceptsBtn.click()
    }

}
    
