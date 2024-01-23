exports.reasonsPage = class reasonsPage{
    constructor(page){

        this.page = page;
        this.reasonsHeading = page.getByRole('heading',{name:'Reason'})
        this.reasonsAddNewOpt = page.getByRole('link',{name: '󰐗 Add New'})
        this.reasonsAddNewDetails= page.locator('.modal-content')
        //this.reasonsAddNewHeading = page.getByRole('heading',{name:'Add New Reason'})
        this.reasonsEntriesOpt = '.form-select.form-select-sm'
        this.reasonsSearchOption = page.locator('.form-control.form-control-sm')
        this.reasonsTable = page.locator('.table.table-centered.w-100.datatable.yajra-datatable.dataTable.no-footer')
        this.reasonsEntriesPerPage = page.locator('#DataTables_Table_0_info')


    }

    async gotoreasonsPage(){

        await this.page.goto('/reason')
    }

    async reasonsAddNewOptions(){

    await this.reasonsAddNewOpt.click()

    
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