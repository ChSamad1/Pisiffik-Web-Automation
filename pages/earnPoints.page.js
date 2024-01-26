exports.earnPointsPage = class earnPointsPage{

    constructor(page){
    this.page =page;

    this.earnPointsHeading = page.getByRole('Heading',{name: 'Earn Points'})
    this.earnPointsLoyalityAmount = page.locator('#loyaltyPrice')
    this.earnPointsLoyalityPoints = page.locator('#loyaltyPoints')
    this.earnPointsSaveBtn = page.locator('#submitPoints')
    this.navigateToEarnPointsPg = page.getByRole('link',{name:'Earn Points'})



}
    async navigatetoEarnPointsPage(){
    await this.navigateToEarnPointsPg.click()

}
   async earnPointsLoyalityAmountDetails(Amount){

    await this.earnPointsLoyalityAmount.fill(Amount)
   }

   async earnPointsLoyalityPointsDetails(Points){

    await this.earnPointsLoyalityPoints.fill(Points)
   }

   async earnPointsSaveButton(){
    await this.earnPointsSaveBtn.click()
   }

}