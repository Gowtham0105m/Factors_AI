import Login from '../fixtures/Login.json';
import dayjs from 'dayjs';

describe('New Event Report Creation Test', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', () => false);

        cy.visit('https://staging-app.factors.ai');
        cy.xpath('//input[@id="login_form_username"]').type(Login.Username);
        cy.xpath('//input[@id="login_form_password"]').type(Login.Password);
        cy.xpath('//button//span[text()="LOG IN"]').click();
    });

    it('Creates a New Event Report Successfully', () => {
        const todayTime = dayjs().format('HH-mm-ss');
        const EventName = `Test_${todayTime}`;

        cy.xpath('//header', { timeout: 60000 }).should('be.visible');
        cy.log('**Header is shown**');
        cy.xpath('//h4[text()="Reports"]', { timeout: 60000 }).click();
        cy.xpath('//h4[text()="Dashboards"]').click();
        cy.xpath('//h1[text()="G2 Influence (With HubSpot)"]', { timeout: 60000 }).should('be.visible');
        cy.xpath('//h4[text()="Drafts"]').click();
        cy.wait(4000);
        cy.xpath('//table/tbody').should('be.visible');
        cy.xpath('//div//div[text()="Add Report"]').click();
        cy.xpath('//h4[text()="New Event Report"]').click();
        cy.xpath('(//h4[contains(@class,"ant-typography fai-text text-base")])[2]', { timeout: 60000 }).should('be.visible');
        cy.log('**Analyse is shown successfully**');
        cy.xpath('(//span[text()="Add First Event"])[2]').click();
        cy.xpath('//h4[text()="Hubspot Companies"]').click();
        cy.xpath('//h4[text()="Company Updated"]').click();
        cy.xpath('(//span[text()="Add another event"])[2]', { timeout: 60000 }).click();
        cy.get('[title="Hubspot Deals"]', { timeout: 60000 }).first().click({ force: true });
        cy.get('[title="Deal Created"]', { timeout: 60000 }).click();
        cy.xpath('(//h4[text()="FILTER BY"])[2]').should('have.text', 'FILTER BY');
        cy.xpath('(//span[text()="Add new"])[3]').click();
        cy.xpath('//h4[text()="Company Identification"]', { timeout: 60000 }).click();
        cy.xpath('//input[@placeholder="Search"]', { timeout: 60000 }).type('Company Tech');
        cy.get('[title="Company Tech"]', { timeout: 60000 }).click({ force: true });
        cy.get('[title="equals"]', { timeout: 60000 }).click();
        cy.get('[title="(Not Set)"]', { timeout: 60000 }).click();
        cy.xpath('//span[text()="Apply"]', { timeout: 60000 }).click();
        cy.xpath('(//span[text()="Add new"])[4]', { timeout: 60000 }).click();
        cy.get('[placeholder="Select Property"]', { timeout: 60000 }).click({ force: true });
        cy.get('[title="Salesforce Accounts"]', { timeout: 60000 }).first().click({ force: true });
        cy.get('[title="Salesforce Account Account ID"]', { timeout: 60000 }).first().click();
        cy.xpath('(//h4[text()="CRITERIA"])[2]', { timeout: 60000 }).should('be.visible');
        cy.xpath('(//div[@class="fa-custom-datepicker"])[2]/button', { timeout: 60000 }).click({ force: true });
        cy.xpath('//span//a[text()="Yesterday"]', { timeout: 60000 }).click();
        cy.xpath('(//span[text()="Run Analysis"])[2]').click();
        cy.xpath('//img', { timeout: 60000 }).should('be.visible');
        cy.xpath('(//span[text()="Save"])[1]', { timeout: 60000 }).click();
        cy.xpath('//span[contains(@class,"normal text-sm text")]', { timeout: 60000 }).should('be.visible');
        cy.log('**Save this report to protect your progress**');
        cy.get('[placeholder="Report Name"]', { timeout: 60000 }).type(EventName);
        cy.get('[placeholder="Description (Optional)"]', { timeout: 60000 }).type(Login.EventDescription);
        cy.xpath('(//span[text()="Save"])[2]').click();
        cy.xpath('//div[@class="ant-notification-notice-message"]', { timeout: 60000 }).should('be.visible');
        cy.xpath('//div[@class="ant-notification-notice-message"]',{ timeout: 60000 }).should('have.text', 'Report Saved Successfully');
        cy.log('**Report Saved Successfully is shown**');
        cy.xpath('//img', { timeout: 60000 }).should('be.visible');
        cy.xpath('//button//span[text()="Close"]', { timeout: 60000 }).click();
        cy.xpath(`(//h4[text()="${EventName}"]//following::span[@aria-label="more"])[1]`).click({ force: true })
        cy.xpath("(//a[text()='Delete Report'])[1]").click({ force: true })
        cy.xpath('//span[text()="Confirm"]').click({ force: true })

    });
});