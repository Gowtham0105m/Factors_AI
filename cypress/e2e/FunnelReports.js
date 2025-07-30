import Login from '../fixtures/Login.json';
import dayjs from 'dayjs';

describe('Report Tests', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', () => false);

        cy.visit('https://staging-app.factors.ai');
        cy.xpath('//input[@id="login_form_username"]', { timeout: 60000 }).type(Login.Username);
        cy.xpath('//input[@id="login_form_password"]').type(Login.Password);
        cy.xpath('//button//span[text()="LOG IN"]').click();
        cy.xpath('//header', { timeout: 60000 }).should('be.visible');
    });

    it('Create, Run and Delete Reports', () => {

        const Today_Date = dayjs().format('H:m:s');
        const FunnelName = `Test_${Today_Date}`;
        cy.xpath('//h4[text()="Reports"]', { timeout: 60000 }).click();
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.xpath('//h1[text()="G2 Influence (With HubSpot)"]', { timeout: 60000 }).should('be.visible');
        cy.xpath('//h4[text()="Drafts"]').click();
        cy.xpath('//table/tbody', { timeout: 60000 }).should('be.visible');
        cy.xpath('//div//div[text()="Add Report"]').click();
        cy.xpath('//h4[text()="New Funnel Report"]', { timeout: 60000 }).click();
        cy.xpath('(//h4[text()="EVENTS PERFORMED IN"])[1]').should('have.text', 'EVENTS PERFORMED IN');
        cy.xpath('(//span[text()="Add First Event"])[2]').click();
        cy.xpath('//h4[text()="Hubspot Companies"]').click();
        cy.xpath('//h4[text()="Company Updated"]').click();
        cy.xpath('(//span[text()="Add another event"])[2]', { timeout: 60000 }).click();
        cy.get('[title="Hubspot Deals"]').first().click({ force: true });
        cy.get('[title="Deal Created"]').click();
        cy.xpath('(//h4[text()="FILTER BY"])[2]').should('have.text', 'FILTER BY');
        cy.xpath('(//span[text()="Add new"])[3]').click();
        cy.xpath('//h4[text()="Company Identification"]').click();
        cy.xpath('//input[@placeholder="Search"]').type('Company Tech');
        cy.get('[title="Company Tech"]').click({ force: true });
        cy.xpath('//h4[text()="equals"]').click();
        cy.xpath('//h4[text()="(Not Set)"]').click();
        cy.xpath('//span[text()="Apply"]').click();
        cy.xpath('(//span[text()="Add new"])[4]').click();
        cy.get('[placeholder="Select Property"]').click({ force: true });
        cy.get('[title="Salesforce Accounts"]').first().click({ force: true });
        cy.get('[title="Salesforce Account Account ID"]').first().click();
        cy.xpath('(//div[@class="fa-custom-datepicker"])[2]/button').click({ force: true });
        cy.xpath('//span//a[text()="Yesterday"]').click();
        cy.xpath('(//span[text()="Run Analysis"])[2]').click();
        cy.xpath('//div[text()="Break-up"]').should('be.visible').scrollIntoView().click({ force: true });
        cy.xpath('(//span[text()="Save"])[1]').click();
        cy.xpath('//h4[text()="Create New Report"]').should('have.text', 'Create New Report');
        cy.xpath('//input[@placeholder="Report Name"]').type(FunnelName);
        cy.xpath('//textarea[@placeholder="Description (Optional)"]').type(Login.testdescription);
        cy.xpath('(//span[text()="Save"])[2]').click();
        cy.xpath('//div[@class="ant-notification-notice-message"]', { timeout: 60000 }).should('be.visible').and('have.text', 'Report Saved Successfully');
        cy.xpath('//div[text()="Break-up"]').should('be.visible').scrollIntoView().click({ force: true });
        cy.xpath('//button//span[text()="Close"]').click();
        cy.xpath(`//h4[text()="${FunnelName}"]`, { timeout: 60000 }).click();
        cy.xpath('//button//span[text()="Expand"]').click();
        cy.xpath('//span[text()="Add another event"]').click();
        cy.get('[title="Hubspot Contacts"]').first().click({ force: true });
        cy.get('[title="Contact Created"]').click();
        cy.xpath('(//span[text()="Run Analysis"])').click();
        cy.xpath('//div[text()="Break-up"]').scrollIntoView().should('be.visible');
        cy.xpath('(//div//button)[4]').click();
        cy.xpath('//span[text()="Save as New"]').click();
        cy.xpath('//h4[text()="Create New Report"]').should('have.text', 'Create New Report');
        cy.xpath('//input[@placeholder="Report Name"]').type(Login.FunnelName2);
        cy.xpath('//textarea[@placeholder="Description (Optional)"]').type(Login.Explanation);
        cy.xpath('(//span[text()="Save"])[3]', { timeout: 60000 }).click();
        cy.xpath('//div[text()="Break-up"]').scrollIntoView().should('be.visible');
        cy.xpath('(//span[text()="Close"])[1]').click({ force: true });
        cy.xpath('//h1[contains(text(),"G2 Influence (With HubSpot)"]', { timeout: 60000 }).should('be.visible');
        cy.xpath('//h4[text()="Drafts"]').click();
        cy.xpath(`(//h4[text()="${Login.FunnelName2}"]//following::span[@aria-label="more"])[1]`, { timeout: 60000 }).click({ force: true });
        cy.xpath("(//a[text()='Delete Report'])[1]").click();
        cy.xpath('//span[text()="Confirm"]').click();
    });
});
