exports.storeconceptsPage = class storeconceptsPage{
    constructor(page){
       this.page = page;


       test.only ('Concepts Validation', async ({page}) => {

        const login = new loginPage(page)
        const dashboard = new dashboardPage(page)
        const conceptsNav = new conceptssidebarPage(page)
        const concepts = new conceptsPage(page)
    
        await login.gotoLoginPage()
        login.Login (staticData.email,staticData.password)
        await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
        await conceptsNav.ConceptsDown()

        
    })







       
    }}
