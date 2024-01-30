exports.reasonsPage = class reasonsPage{
    constructor(page){

        this.page = page;
        this.reasonsHeading = page.getByRole('heading',{name:'Reason'})
        this.reasonsAddNewOpt = page.getByRole('link',{name: '󰐗 Add New'})
        this.reasonsAddNewDetails= page.getByRole('textbox')
        this.reasonsAddNewOptSaveBtn = page.getByRole('button',{name: 'Save'})
        this.reasonsDelBtn = page.locator('.btn.btn-danger.btn-sm.delete_record.mr-2')
        this.reasonsDelBtnConfirmation = page.getByRole('button',{name: 'Yes!'})
        this.reasonsDelBtnConfMsg = page.getByRole('button',{name: 'OK'})
        this.reasonsTableDetails = '.table.table-centered.w-100.datatable.yajra-datatable.dataTable.no-footer tbody tr'
        this.reasonsEntriesOpt = '.form-select.form-select-sm'
        this.reasonsSearchOption = page.locator('.form-control.form-control-sm')
        this.reasonsTable = page.locator('.table.table-centered.w-100.datatable.yajra-datatable.dataTable.no-footer')
        this.reasonsEntriesPerPage = page.locator('#DataTables_Table_0_info')
        this.navigateToReasonsPg = page.getByRole('link',{name: 'Reasons'})

    }

    async navigateToReasonsPage(){

        await this.navigateToReasonsPg.click()
    }

    async reasonsAddNewOptions(){

    await this.reasonsAddNewOpt.click()
    
}
   async reasonsAddNewData(name){

    await this.reasonsAddNewDetails.fill(name)
    await this.reasonsAddNewOptSaveBtn.click()
    

}

async reasonsDelInsertingEntry(){
    await this.reasonsDelBtn.click()
    await this.reasonsDelBtnConfirmation.click()
    await this.reasonsDelBtnConfMsg.click()
}


async reasonsSearchOpt(reasonsOpt){
await this.reasonsSearchOption.fill(reasonsOpt)

}
async reasonsTableDetals(Name){

    await this.reasonsTable.textContent(Name)
}

async reasonEntriesNoPerPg(){

    const reasonsData = await this.reasonsEntriesPerPage
    const getReasonData = await reasonsData.innerText()
    console.log(getReasonData)

}




}