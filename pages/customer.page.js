exports.customerPage = class customerPage{

    constructor(page){

        this.page = page;
        this.customerHeading = page.getByRole('heading',{name: 'Customers'})
        this.customerFilterBtn = page.getByRole('button',{name: 'Clear Filter'})
        this.customerSearch = page.locator('.form-control.form-control-sm')
        this.showingEntriesPerPg = '.dataTables_info'
        this.statusOptions = '#Status'
        this.employeeStatusOption = '#Employee'
        this.entriesOptionBar = '//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/select[1]'
        this.customerTableHeader = '.table-light'
        this.customerTableData = 'tbody'
        this.customerEntriesPerpage = page.locator('#DataTables_Table_0_info')
        this.customernextPage = page.getByRole('link',{name: 'Next'})
        this.customerPreviousPg = page.getByRole('link',{name: 'Previous'})
        
        
    }
    async gotocustomerPage(){

        await this.page.goto('/customer')

    }

        async customerStatussFilterbtn(){
            await this.customerFilterBtn.click()
        }  
        
    async customerSearchOpt(){
       await this.customerSearch.type('Abdul Rehman')
       await this.customerSearch.press('Enter');

    }
    
    async customerNextPageNavigation(){

       await this.customernextPage.click()

     
    }


    async customerPreviousPgNavigation(){

        await this.customerPreviousPg.click()

    }

    async customerEntries(){


        const data = await this.customerEntriesPerpage
        const getData = await data.innerText()
        console.log(getData)

    }
          
}


