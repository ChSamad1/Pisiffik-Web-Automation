exports.conceptsSideBarBtnPage = class conceptsSideBarBtnPage{
    constructor(page){
        this.page =page;

        this.conceptsSideBarBtn = page.getByRole('link',{name: 'Concepts '})

    }
    async conceptsSideBarButton(){
        await this.conceptsSideBarBtn.click()
    }

}