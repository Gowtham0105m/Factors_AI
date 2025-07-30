import Login from '../fixtures/Login.json';
import 'cypress-file-upload';

describe('Account Scoring - File Upload Test', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', () => false);

        cy.visit('https://staging-app.factors.ai');
        cy.xpath('//input[@id="login_form_username"]').type(Login.Username);
        cy.xpath('//input[@id="login_form_password"]').type(Login.Password);
        cy.xpath('//button//span[text()="LOG IN"]').click();
    });

    it('Uploads a CSV file in Account Scoring', () => {
        const filePath = 'Intent_Upload_Sample_Factors.csv';

        cy.get('.profiles-header', { timeout: 60000 }).should('be.visible');
        cy.log('**All Accounts is shown successfully**');
        cy.get('#fa-at-dropdown--settings', { timeout: 60000 }).click({ force: true });
        cy.xpath('(//h4[text()="General"])[2]', { timeout: 60000 }).should('be.visible');
        cy.log('**General heading is showing successfully**');
        cy.xpath('//h4[text()="Account Scoring"]', { timeout: 60000 }).scrollIntoView().click();
        cy.xpath('(//h4[text()="Account Scoring"])[2]', { timeout: 60000 }).should('be.visible');
        cy.log('**Account Scoring is showing successfully**')
        cy.xpath('//div[text()="Intent Upload"]', { timeout: 60000 }).should('be.visible').click({ force: true });
        cy.xpath('//div[text()="Upload intent data in CSV format"]').should('be.visible')
        cy.log('**Upload intent data in CSV format**')
        cy.xpath('//h4[text()="Upload third-party intent data"]', { timeout: 60000 }).should('be.visible').click();
        cy.get('[class="ant-upload-text"]', { timeout: 60000 }).should('be.visible')
        cy.log('**Click or drag file to this area to upload**')
        cy.get('input[type="file"]', { timeout: 60000 }).should('exist').attachFile(filePath);
        cy.xpath('//p[text()="Intent_Upload_Sample_Factors.csv"]', { timeout: 60000 }).click({ force: true })
        cy.xpath('(//span[text()="Import"])', { timeout: 60000 }).click({ force: true });
        cy.xpath('(//div[text()="This field needs to be mapped"])[1]', { timeout: 60000 }).should('be.visible')
        cy.log('**This field needs to be mapped**')
        cy.xpath('(//input[@type="search"])[2]', { timeout: 60000 }).click({ force: true })
        cy.xpath('(//div[text()="Date of Intent"])[2]', { timeout: 60000 }).click({ force: true })
        cy.xpath('(//input[@type="search"])[4]', { timeout: 60000 }).click({ force: true })
        cy.xpath('(//div[text()="Intent Source"])[4]', { timeout: 60000 }).click({ force: true })
        cy.xpath('(//input[@type="search"])[6]', { timeout: 60000 }).click({ force: true })
        cy.get('[title="Intent Source"]', { timeout: 60000 }).click({ force: true })
        cy.xpath('(//div[@class="ant-select-selector"])[7]', { timeout: 60000 }).click({ force: true })
        cy.xpath('//div[text()="Visit Type - Intent Drill Down"]', { timeout: 60000 }).click({ force: true })
        cy.xpath('(//span[text()="Import"])[2]', { timeout: 60000 }).click({ force: true });
        cy.xpath('//span[text()="Intent data uploaded successfully"]', { timeout: 60000 }).should('be.visible');
        cy.log('**Intent data uploaded successfully**')
    });
});
