exports.prodcutssidebarPage = class productssidearPage{
    constructor(page){
       this.page = page;
       this.productsDown =page.getByRole('link ',{name: ' Products 󰅂'})
       
    
    
    
    
    }
    async ProductsDownButton(){
        await this.productsDown.click()
    }
    
    

    }