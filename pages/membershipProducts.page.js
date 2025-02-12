exports.membershipProductsPage = class membershipProductsPage{
    constructor(page){

        this.page = page
        this.membershipProductsHeading = page.getByRole('heading',{name:'Membership Products'})
        this.membershipProductsAddMembershipProdButton = page.getByRole('button',{name:'Add Membership Product'})
        this.membershipProductsAddMembershipProdButtonSearchOpt = page.locator('#membershipSearch')
        this.membershipProductsTableRedeemPoints = page.getByRole('spinbutton').first()
        this.membershipProductsTableRebateAmount = page.locator('.form-control').nth(3)
        this.membershipProductsTableStartDate = page.locator('.form-control').nth(4)
        this.membershipProductsTableEndDate = page.locator('.form-control').nth(5)
        this.membershipProductTableSwitchStatus = page.locator('.form-check-input.chexkbox').nth(0)
        this.membershipProductsTableProductSelOpt = page.locator('#productSelect').nth(0)
        this.membershipProductsTableAddOpt = page.locator('#submitMembership')
        this.membershipProductsTableEntryDelOpt = page.locator('.mdi.mdi-minus-circle.me-1.cursor.fa-2x.removeProductBtn.text-danger')
        this.membershipProductsEntriesOpt = '.form-select.form-select-sm'
        this.membershipProductsSearchBox = page.locator('.form-control.form-control-sm')
        this.membershipProductsTableOpt = '.table.table-centered.w-100.datatable.yajra-datatable.dataTable.no-footer'
        this.membershipProductsEntriesPerPage = page.locator('#DataTables_Table_0_info')
        this.membershipProductsnextPage = page.getByRole('link',{name: 'Next'})
        this.membershipProductsPreviousPg = page.getByRole('link',{name: 'Previous'})

        this.navigateToMemberShipPage = page.getByRole('link',{name: 'Membership Products'})

    
    }
    async navigateTomembershipProductsPage(){
        await this.navigateToMemberShipPage.click()
    }

    async membershipProductsAddMembershipProductBtn(){
        await this.membershipProductsAddMembershipProdButton.click()

    }
    async membershipProductsAddMembershipBtnSearchOption(productID){
        await this.membershipProductsAddMembershipProdButtonSearchOpt.fill(productID)
        await this.membershipProductsAddMembershipProdButtonSearchOpt.press('Enter');


    }
    async membershipProductsTableRedeemPointsEntry(points){
       await this.membershipProductsTableRedeemPoints.fill(points)
    }

    async membershipProductsTableRebateAmountEntry(Amount){
        await this.membershipProductsTableRebateAmount.fill(Amount)
    }
    async membershipProductsTableStartDateEntry(startDate){
        await this.membershipProductsTableStartDate.fill(startDate)
    }
    async membershipProductsTableEndDateEntry(endDate){
        await this.membershipProductsTableEndDate.fill(endDate)
    }
    async membershipProductTableSwitchStatusSlide(){
        await this.membershipProductTableSwitchStatus.check()
    }
    async membershipProductsTableProductSelOption(){
        await this.membershipProductsTableProductSelOpt.click()
    }
    async membershipProductsTableAddOption(){
        await this.membershipProductsTableAddOpt.click()
    }

    async membershipProductsSearchBoxOpt(ProductName){
        await this.membershipProductsSearchBox.fill(ProductName)
    }


    async membershipProductsTableEntryDelOption(){
        await this.membershipProductsTableEntryDelOpt.click()
    }
    

    async membershipProductsEntries(){

        const data = await this.membershipProductsEntriesPerPage
        const getData = await data.innerText()
        console.log(getData)

    }
    async membershipProductsNextPageBtn(){

        await this.membershipProductsnextPage.click()
  
     }
 
     async membershipProductsPreviousPageBtn(){

        await this.membershipProductsPreviousPg.click()
 
      
     }
      

    


}


