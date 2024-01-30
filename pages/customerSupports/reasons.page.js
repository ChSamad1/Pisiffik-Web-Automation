exports.reasonsPage = class reasonsPage{
    constructor(page){

        this.page = page;
        this.reasonsHeading = page.getByRole('heading',{name:'Reason'})
        this.reasonsAddNewBtn = page.getByRole('link',{name: '󰐗 Add New'})
        this.reasonsAddNewBtnDetails = page.getByRole('textbox')
        this.reasonsSaveBtn =page.locator('.btn.btn-info.waves-effect.waves-light')
        this.reasonsDeleteBtn =page.locator('.btn.btn-danger.btn-sm.delete_record.mr-2')
        this.reasonsDeleteConfirm =page.getByRole('button' ,{name: 'YES!'})
        this.reasonsDeleteMsg = page.locator('.btn.btn-default')


    }

    async navigateToReasonsPage(){

        await this.navigateToReasonsPg.click()
    }

    async reasonsAddNewButton(){

    await this.reasonsAddNewBtn.click()

    
}
 async reasonsAddNewButtonDetails(name){
    await this.reasonsAddNewBtnDetails.fill(name)
 }
 async reasonsSaveButton(){
    await this.reasonsSaveBtn.click()
 }
 async reasonsDeleteButton(){
    await this.reasonsDeleteBtn.click()
 }
 async reasonsDeleteButtonYes(){
    await this.reasonsDeleteConfirm.click()
 }
 async reasonsDeleteMsgOk(){
    await this.reasonsDeleteMsg.click()
 }

}

    





