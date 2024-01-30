exports.purchasesPage = class purchasesPage{
    constructor(page){

        this.page = page;
        this.purchasesHeading = page.getByRole('heading',{name: 'purchases'})
        this.purchaseParagraph = page.getByRole('paragraph',{lass: 'font-weight-bolder.mb-0.text-bolder' })
        this.purchaesFromToDate = page.locator('#from_date' )
        this.purchaesToDateCalender = page.locator('#to_date')
        this.purchasesSearch = page.locator('.form-control.form-control-sm')
        this.purchasesEntriesOpt = page.locator('.form-select.form-select-sm')
        this.purchasesTableHeaderList = page.locator('.table-light')
        this.purchasesTableBodyList = page.locator('tbody')
        this.purchasesEntriesPerPage = page.locator('#DataTables_Table_0_info')
        this.purchasesNextPg = page.getByRole('link',{name: 'Next'})
        this.purchasesPreviousPg = page.getByRole('link',{name: 'Previous'})

        this.navigateToPurchasesPg = page.getByRole('link',{name:' Purchases'})
        
    }

    async navigatetoPurchasesPage(){

        await this.navigateToPurchasesPg.click()
    }

    async purchaseFromTo(fromToDate){

        await this.purchaesFromToDate.fill(fromToDate)

    }
    async purchasesToDate(toDate){
    
        await this.purchaesToDateCalender.fill(toDate);

    }

    async purchasesSearchOpt(name){

        await this.purchasesSearch.fill(name)

    }

    async purchasesEntriesOption(entries){
     await this.purchasesEntriesOpt.textContent(entries)
     
    }

    async purchasesTableHeader(){

     await this.purchasesTableHeaderList.textContent()
        
    }

    async purchasesTableBody(){

     await this.purchasesTableBodyList.textContent()
    }

    async purchasesNextPageNavigation(){

        await this.purchasesNextPg.click()
      
     }
 
     async purchasesPreviousPgNavigation(){
 
         await this.purchasesPreviousPg.click()
 
     }

     async purchasesEntriesNoPerPg(){

        const purchasesdata = await this.purchasesEntriesPerPage
        const getAllData = await purchasesdata.innerText()
        console.log(getAllData)

    }
    
}
