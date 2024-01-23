exports.ticketsPage = class ticketsPage{

    constructor(page){

        this.page = page;
        this.ticketsPgHeading = page.getByRole('heading',{name: 'Tickets'})
        this.ticketsPgCheckStatus = '#check_status'
        this.ticketsPgPriorityOpt = '#priority'
        this.ticketsPgDateRange = page.locator('#daterange')
        this.ticketsPgFilterBtn = page.getByRole('button',{name: 'Filter'})
        this.ticketsPgEntriesOpt = '.form-select.form-select-sm'
        this.ticketsPgSearchOpt = page.locator('.form-control.form-control-sm')
        this.ticketsPgTableHeaderList = page.locator('.table-light')
        this.ticketsPgTableBodyList = page.locator('#DataTables_Table_0')
        this.ticketsEntriesPerPage = page.locator('#DataTables_Table_0_info')
         this.ticketsNextPg = page.getByRole('link',{name: 'Next'})
        //this.ticketsNextPg = page.locator('#DataTables_Table_0_next')
        this.ticketsPreviousPg = page.getByRole('link',{name: 'Previous'})


    }

    async gotoTicketsPage(){

        await this.page.goto('/tickets')
    }

     async ticketsDateRangeOpt(dateRange){
        await this.ticketsPgDateRange.fill(dateRange)

    }

    async ticketsFilterBtn(){
    await this.ticketsPgFilterBtn.click()
    }

    async ticketsSearchOpt(Priority){
        await this.ticketsPgSearchOpt.fill(Priority)

    }

    async ticketsTableBodyList(ticketId){
        await this.ticketsPgTableBodyList.textContent(ticketId)
    }

    async ticketsNextPgNavigation(){

        await this.ticketsNextPg.click()
    }
    async ticketsPreviousPgNavigation(){
        await this.ticketsPreviousPg.click()
    }

    async ticketsEntriesNoPerPg(){

        const ticketsData = await this.ticketsEntriesPerPage
        const getAllData = await ticketsData.innerText()
        console.log(getAllData)
        
    }

}