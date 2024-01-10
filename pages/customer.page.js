exports.customerPage = class customerPage{

    constructor(page){

        this.page = page;
        this.customerHeading = page.getByRole('heading',{name: 'Customers'})
        this.filterButton = page.getByRole('button',{name: 'Clear Filter'})
        this.search = page.locator('.form-control.form-control-sm')
        this.showingEntriesPerPg = page.locator('.dataTables_info')
        
        
        
    }
    async gotocustomerPage(){

        await this.page.goto('/customer')

    }

        async sFilterbutton(){
            await this.filterButton.click()
        }    

    }

        //this.cDropDownSelector = page.locator('.form-select.form-select-sm')
      //  async cDropDownNavigation(){

    //      await this.cDropDownSelector.selectOption({label: '25'})
    //     }

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
