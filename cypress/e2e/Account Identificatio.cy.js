import Login from '../fixtures/Login.json';

describe('Account Identification', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', () => false);

        cy.visit('https://staging-app.factors.ai');
        cy.xpath('//input[@id="login_form_username"]').type(Login.Username);
        cy.xpath('//input[@id="login_form_password"]').type(Login.Password);
        cy.xpath('//button//span[text()="LOG IN"]').click();
    });

    it('Performs Account Identification flow', () => {

        const selectCampaign = title => cy.get(`[title="${title}"]`, { timeout: 60000 }).should('be.visible').click({ force: true });

        cy.wait(5000)
        cy.xpath('//h1[text()="All Accounts"]', { timeout: 60000 }).should('have.text', 'All Accounts')
        cy.get('#fa-at-link--accounts', { timeout: 60000 }).should('be.visible').click();
        cy.xpath('//h4[text()="Account identification"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//tbody', { timeout: 60000 }).should('be.visible')
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-default")])[1]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.get('[title="Paid Search"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.log('**Paid Search selected**');
        cy.xpath('(//tbody//tr//td[2])[1]', { timeout: 60000 }).should('have.text', 'Paid Search')
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-default")])[1]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.get('[title="Organic Search"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('(//tbody//tr//td[2])[1]', { timeout: 60000 }).should('have.text', 'Organic Search')
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-default")])[1]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.get('[title="Direct"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('(//tbody//tr//td[2])[1]', { timeout: 60000 }).should('have.text', 'Direct')
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-default")])[1]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.get('[title="Referral"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('(//tbody//tr//td[2])[1]', { timeout: 60000 }).should('have.text', 'Referral')
        cy.xpath('//h4[text()="Campaign"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('(//div[contains(@class,"FaSelect_dropdown__select")])[1]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.log('**Campaign dropdown opened**');
        selectCampaign("TD_Search_India_Deanon_Competition");
        selectCampaign("TD_Search_US_Deanon_Generic");
        selectCampaign("TD_Search_US_Deanon_Competition_Others");
        cy.xpath('//span[text()="Apply"]', { timeout: 60000 }).should('have.text', 'Apply')
        cy.xpath('//span[text()="Clear all"]', { timeout: 60000 }).should('have.text', 'Clear all')
        cy.xpath('//span[text()="Apply"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-default")])[2]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//span[text()="Clear all"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//span[text()="Apply"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.get('.ant-table-container', { timeout: 60000 }).click({ force: true });
        cy.xpath('//h4[text()="Page Viewed"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//div[contains(@class,"FaSelect_dropdown__select__1L5kx")]', { timeout: 60000 }).should('be.visible');
        cy.log('**Page Viewed dropdown opened**');
        selectCampaign("staging-app.factors.ai");
        selectCampaign("staging-app.factors.ai/login");
        selectCampaign("staging-app.factors.ai/reports");
        cy.xpath('//span[text()="Apply"]', { timeout: 60000 }).should('have.text', 'Apply')
        cy.xpath('//span[text()="Clear all"]', { timeout: 60000 }).should('have.text', 'Clear all')
        cy.xpath('//span[text()="Apply"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-default")])[3]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//span[text()="Clear all"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//span[text()="Apply"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.wait(5000)
        cy.get('.ant-table-container', { timeout: 60000 }).click({ force: true });
        cy.xpath('(//button[contains(@class,"ant-btn ant-btn-default")])[4]', { timeout: 60000 }).click({ force: true });
        cy.xpath('//div[@class="flex flex-col scrollable--auto-y"]', { timeout: 60000 }).should('be.visible')
        cy.log('**Dates list shown**');
        cy.xpath('//*[@title="Feb 4th to Feb 10th"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//span[text()="Share"]', { timeout: 60000 }).click({ force: true })
        cy.wait(5000)
        // cy.xpath('//button[@type="button"]//span[text()="Copy link"]', { timeout: 60000 }).click({ force: true });
        // cy.get('.ant-notification-notice-content', { timeout: 60000 }).should('have.text', 'Successfully Copied');
        // cy.wait(3000)
        cy.get('input.ant-radio-input[value="once"]', { timeout: 60000 }).should('exist').check({ force: true });
        cy.get('#share-modal-form_emails_0', { timeout: 60000 }).should('be.visible').type(Login.Username);
        cy.xpath('//span[text()="Done"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.get('.ant-notification-notice-content', { timeout: 60000 }).should('have.text', 'Emails successfully sent');
        cy.get('[class="ant-btn ant-btn-text ant-btn-lg"]', { timeout: 60000 }).eq(0).click({ force: true })
        cy.get('[placeholder="Search"]', { timeout: 60000 }).type(Login.AccountsName)
        cy.xpath('//tbody//tr//td[1]', { timeout: 60000 }).should('have.text', 'Factors.Ai')
        cy.get('[class="ant-btn ant-btn-text ant-btn-lg"]', { timeout: 60000 }).eq(1).click({ force: true })




    })

});

