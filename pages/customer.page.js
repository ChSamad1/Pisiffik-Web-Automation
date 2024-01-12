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
        //this.customerTablePagination = '.pagination li a'
        
        
    }
    async gotocustomerPage(){

        await this.page.goto('/customer')

    }

        async customerStatussFilterbtn(){
            await this.customerFilterBtn.click()
        }    

    }

        

    // this.sNOGrid =page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/thead[1]/tr[1]/th[1]')
        // this.loyaltyIdGrid = page.getByRole('columnheader',{name: 'Loyalty Id: activate to sort column ascending'})  
        // this.customerNameGrid = page.getByRole('columnheader', {name: 'Customer Name: activate to sort column ascending'})
        // this.emailCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/thead[1]/tr[1]/th[4]')
        // this.phoneCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/thead[1]/tr[1]/th[5]')
        // this.earnedPointsCard = page.getByRole('columnheading',{name:'Earned Points: activate to sort column ascending'})
        // this.pointsRedeemCard = page.getByRole('columnheading',{name: 'Points Redeem: activate to sort column descending'})
        // this.availablePointsCard = page.getByRole('columnheader',{name: 'Available Points: activate.to.sort.column.ascending'})
        // this.employeeCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/thead[1]/tr[1]/th[9]')
        // this.statusCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/thead[1]/tr[1]/th[9]')
        // this.actionCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/thead[1]/tr[1]/th[10]')
