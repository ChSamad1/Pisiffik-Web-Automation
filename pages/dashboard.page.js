 exports.dashboardPage = class dashboardPage{

constructor(page){
    this.page =page;
    this.dashboardHeading = page.getByRole('heading',{name:'Dashboard'})
    this.dropDownSelector = page.locator('.form-select.changeLang')
    this.bellIcon = page.locator('.fe-bell.noti-icon')
    this.userAdmin = page.locator('//html[1]/body[1]/div[1]/div[1]/div[1]/ul[1]/li[3]/a[1]')
    this.totalLoyaltyCustomersCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]')
    this.activeLoyaltyMembersCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]')
    this.newMembersTodayCard = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]')
    this.totalPointsEarned = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]')
    this.totalRedeemPoints = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]')
    this.latestActiveOffers = page.getByRole('heading',{name: 'Latest Active Offers'})
    this.viewAll = page.locator('.btn.btn-primary')
    this.offerList = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/table[1]/thead[1]/tr[1]/th[1]')
    this.effectiveTillDate = page.locator('//html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/table[1]/thead[1]/tr[1]/th[2]')
}

async dropdownNavigation(){
  
    await this.dropDownSelector.selectOption({label: "EN"})
  }
 }


















