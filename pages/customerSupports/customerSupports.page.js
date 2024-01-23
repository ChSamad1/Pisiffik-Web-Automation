exports.customerSupporPage = class customerSupportPage{

    constructor(page){

        this.page = page;
        this.customerRoleOpt = page.getByRole('link',{name:' Customer support 󰅂'})
    }

    async gotoCustomerSupportPage(){
        await this.page.goto('#CustomerSupport')
    }
}