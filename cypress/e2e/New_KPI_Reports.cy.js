import Login from '../fixtures/Login.json'
import dayjs from 'dayjs';
import login from './LoginCypress'
import methods from '../PageObjectModel/methods'
import locator from '../PageObjectModel/Locators'


describe('demo', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        login();
        
    });
    it('test', () => {

        // cy.wait(6000)
        // methods.click(locator.NewSeg_Btn)

        const Cur_Date = dayjs().format('H:m:s');
        const ReportName = `Test_${Cur_Date}`;
        cy.xpath('//header', { timeout: 60000 }).should('be.visible') 
        cy.log('Header is shown')       
        cy.xpath('//h4[text()="Reports"]', { timeout: 60000 }).click()
        cy.xpath('//h4[text()="Dashboards"]').click()
        cy.xpath('//h1[text()="G2 Influence (With HubSpot)"]', { timeout: 60000 }).should('be.visible')
        cy.xpath('//h4[text()="Drafts"]').click()
        cy.wait(6000)
        cy.xpath('//table/tbody').should('be.visible');
        cy.xpath('//div//div[text()="Add Report"]').click()
        cy.xpath('//h4[text()="New KPI Report"]', { timeout: 60000 }).click()
        cy.xpath('(//h4[text()="KPI TO ANALYSE"])[2]').should('have.text', 'KPI TO ANALYSE');
        cy.log('KPI TO ANALYSE is showing successfully')
        cy.xpath('(//span[text()="Add a KPI"])[2]').click()
        cy.xpath('//h4[text()="Website Session"]').click()
        cy.xpath('//input[@placeholder="Search"]', { timeout: 60000 }).type('New Users')
        cy.get('[title="New Users"]', { timeout: 60000 }).click()
        cy.wait(2000)
        cy.xpath('(//span[text()="Add new"])[3]', { timeout: 60000 }).click()
        cy.get('[title="Traffic Source"]').eq(0).click()
        cy.xpath('//input[@placeholder="Search"]').type('User Latest GCLID')
        cy.get('[title="User Latest GCLID"]', { timeout: 60000 }).click()
        cy.xpath('//h4[text()="equals"]').click()
        cy.xpath('(//h4[contains(text(), "Cj0KCQiA0fu5BhDQARIsAMXUB")])[2]').click()
        cy.xpath('//button//span[text()="Apply"]').click()
        cy.xpath('(//span[.="Add new"])[4]').click()
        cy.get('[title="Session Properties"]', { timeout: 60000 }).eq(0).click({ force: true })
        cy.get('[title="Session Medium"]', { timeout: 60000 }).scrollIntoView().click();
        cy.xpath('(//div[@class="fa-custom-datepicker"])[2]/button', { timeout: 60000 }).click({ force: true });
        cy.xpath('//span//a[text()="Yesterday"]', { timeout: 60000 }).click()
        cy.xpath('(//span[text()="Run Analysis"])[2]').click()
        cy.xpath('//img', { timeout: 60000 }).should('be.visible')
        cy.xpath('(//span[text()="Save"])[1]', { timeout: 60000 }).click()
        cy.xpath('//h4[text()="Create New Report"]', { timeout: 60000 }).should('have.text', 'Create New Report')
        cy.log('Create New Report is shown successfully')
        cy.xpath('//input[@placeholder="Report Name"]', { timeout: 60000 }).type(ReportName)
        cy.xpath('//textarea[@placeholder="Description (Optional)"]', { timeout: 60000 }).type(Login.description)
        cy.xpath('(//span[text()="Save"])[2]').click()
        cy.xpath('//div[@class="ant-notification-notice-message"]', { timeout: 60000 }).should('be.visible')
        cy.xpath('//div[@class="ant-notification-notice-message"]').should('have.text', 'Report Saved Successfully')
        cy.log('Report Saved Successfully is showing successfully')
        cy.xpath('//img', { timeout: 60000 }).should('be.visible')
        cy.xpath('//button//span[text()="Close"]').click()
        cy.xpath(`(//h4[text()="${ReportName}"]//following::span[@aria-label="more"])[1]`).click({ force: true })
        cy.xpath("(//a[text()='Delete Report'])[1]").click()
        cy.xpath('//span[text()="Confirm"]').click()
    })  
});
