exports.customerSupportsPage = class customerSupportsPage{

    constructor(page){

        this.page = page;
        this.navigateToCustomerOpt = page.getByRole('link',{name:' Customer support 󰅂'})
    }

    async navigateToCustomerOption(){
        await this.navigateToCustomerOpt.click()
    }
}