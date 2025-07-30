import Login from '../fixtures/Login.json';

describe('New Segment Created', () => {

    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', () => false);

        cy.visit('https://staging-app.factors.ai');
        cy.xpath('//input[@id="login_form_username"]').type(Login.Username);
        cy.xpath('//input[@id="login_form_password"]').type(Login.Password, { log: false });
        cy.xpath('//button//span[text()="LOG IN"]').click();
        cy.get('.profiles-header', { timeout: 60000 }).should('have.text', 'All Accounts');
    });

    it('Validates and saves the Highly Engaged Leads segment', () => {
        cy.xpath('//span[text()="New Segment"]', { timeout: 60000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.eq('New Segment');
                cy.log(`New Segment is visible with text: ${text}`);
            });

        cy.xpath('//span[text()="New Segment"]').click({ force: true });
        cy.xpath('//h4[text()="Choose a Template"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.log('Choose a Template" clicked');
        cy.xpath('(//div[contains(@class,"ant-col ant-col")])', { timeout: 60000 }).eq(0).should('be.visible');
        cy.log('Pre-Built Segments image is visible');
        cy.xpath('//h4[contains(text(), "Qualified Prospects")]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.log('Qualified Prospects segment clicked');
        cy.contains('Read Blogs', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.log('Read Blogs clicked');
        cy.contains('div', 'Select from quick suggestions', { timeout: 60000 }).should('be.visible');
        cy.log('Quick suggestions section is visible');
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-text")])[10]', { timeout: 60000 }).click({ force: true });
        cy.xpath('//div[contains(@style, "overflow-y: auto")]', { timeout: 60000 }).should('be.visible');
        cy.log('Filter list is visible');
        cy.get('[title="Company Identification"]').eq(0).should('be.visible').click({ force: true });
        cy.log('Company Identification clicked');
        cy.xpath('//div[contains(@class,"FaFilterSelect_filter__event_selector__select__1I2-m")]', { timeout: 60000 }).click({ force: true });
        cy.get('[title="Company Industry"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.log('Company Industry selected');
        cy.xpath('//div[contains(@class,"FaSelect_dropdown__select__1L5kx")]', { timeout: 60000 }).should('be.visible');
        cy.log('Dropdown is visible');
        cy.get('[title="equals"]', { timeout: 60000 }).click({ force: true });
        cy.log('equals operator selected');
        cy.xpath('//span[text()="Save Segment "]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.log('Save Segment clicked');
        cy.xpath('(//div[contains(@class,"flex flex-col gap-y-5")])[2]', { timeout: 60000 }).click({ force: true });
        cy.get('[placeholder="Eg- Paid search visitors"]', { timeout: 60000 }).should('be.visible').type(Login.PaidSearchVisitors);
        cy.log('Segment name entered');
        cy.get('[id="rc_select_23"]', { timeout: 60000 }).click({ force: true });
        cy.xpath('(//div[normalize-space()="test folder"])[7]', { timeout: 60000 }).click({ force: true });
        cy.log(' Folder "test folder" selected');
        cy.contains('button', 'Save', { timeout: 60000 }).click({ force: true });
        cy.log('Save clicked');
        cy.contains('Segment saved successfully', { timeout: 10000 }).should('be.visible');
        cy.log('Segment saved successfully - Confirmation pop-up is visible');
    });
});
