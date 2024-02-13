exports.conceptssidebarPage = class conceptssidebarPage{
    constructor(page){
       this.page = page;
       this.conceptsDropDown = page.getByRole('link' ,{name: ' Concepts 󰅂'})
       this.conceptsBtn = page.getByRole('link' ,{ name: 'Concepts', exact: true })
       this.storeConcepts = page.getByRole('link' ,{name: 'Store Concept'})
    }
    async ConceptsDown(){
        await this.conceptsDropDown.click()
    }
    async ConceptsButton(){
        await this.conceptsBtn.click()
    }
    async StoreConceptButton(){
        await this.storeConcepts.click()
    }

}
    
