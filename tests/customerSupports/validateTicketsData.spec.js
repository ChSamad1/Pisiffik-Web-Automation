const {test,expect} = require('@playwright/test')
const{loginPage} = require('../../pages/login.page')
const{dashboardPage} = require('../../pages/dashboard.page')
const { customerSupportsPage} = require('../../pages/customerSupports/customerSupports.page')
const { ticketsPage } = require('../../pages/customerSupports/tickets.page')
const staticData = require('../../data/staticData')


test('Tickets Validation', async ({page}) => {


    const login = new loginPage(page)
    const dashboard = new dashboardPage(page)
    const customerSupports = new customerSupportsPage(page)
    const tickets = new ticketsPage(page)
    await login.gotoLoginPage()
    login.Login (staticData.email,staticData.password)
    await expect(dashboard.page).toHaveURL(staticData.dashboardUrl)
    await customerSupports.navigateToCustomerOption()
    await tickets.navigateToTicketsPage()
    await expect(tickets.page).toHaveURL(staticData.ticketsUrl)
    await expect(tickets.ticketsPgHeading).toBeVisible()

    
    const ticketsCheckStatus = await page.textContent(tickets.ticketsPgCheckStatus)
    await expect(ticketsCheckStatus).toContain('Select Status')
    await expect(ticketsCheckStatus).toContain('Pending')
    await expect(ticketsCheckStatus).toContain('Open')
    await expect(ticketsCheckStatus).toContain('Close')
    await expect(ticketsCheckStatus).toContain('Re-Open')

    const ticketsPriorityStatus = await page.textContent(tickets.ticketsPgPriorityOpt)
    await expect(ticketsPriorityStatus).toContain('Select Priority')
    await expect(ticketsPriorityStatus).toContain('Low')
    await expect(ticketsPriorityStatus).toContain('Medium')
    await expect(ticketsPriorityStatus).toContain('High')

    
    await tickets.ticketsFilterBtn()

    const  ticketsEntriesOpt= await page.textContent(tickets.ticketsPgEntriesOpt)
    await expect(ticketsEntriesOpt).toContain('10')
    await expect(ticketsEntriesOpt).toContain('25')
    await expect(ticketsEntriesOpt).toContain('50')
    await expect(ticketsEntriesOpt).toContain('100')


    await tickets.ticketsTableBodyList('73')
    
    await tickets.ticketsEntriesNoPerPg()
    await tickets.ticketsNextPgNavigation()
    await tickets.ticketsEntriesNoPerPg()
    await tickets.ticketsPreviousPgNavigation()
 
    //await tickets.ticketsEntriesNoPerPg()
    await tickets.ticketsDateRangeOpt('2022/10/12-2022/11/10')

    await tickets.ticketsSearchOpt('High')



})