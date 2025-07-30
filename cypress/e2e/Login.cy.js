import Login from '../fixtures/Login.json'

describe('Login', () => {
    it('SignIN', () => {

        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type(Login.username);
        cy.get('[data-test="password"]').type(Login.password);
        cy.get('[data-test="login-button"]').click();
        cy.xpath('//span[text()="Products"]').should('have.text', 'Products');
        cy.log('Products Header is showing successfully')
        cy.xpath('//div[@class="inventory_item_name "]').each(($list, index) => {
            cy.wrap($list).invoke('text').then((Listtext) => {
                cy.log(`Item ${index + 1}:${Listtext}`);
            })
        })
        cy.xpath("//a[@class='shopping_cart_link']").click()
        cy.xpath("//div[text()='Swag Labs']").should('have.text', 'Swag Labs');
        cy.log('Swag Labs is showing successfully')
        cy.xpath("//button[@id='checkout']").click()
        cy.xpath("//span[text()='Checkout: Your Information']").should('have.text', 'Checkout: Your Information');
        cy.log('Checkout: Your Information is showing successfully')
        cy.xpath("//input[@id='first-name']").type(Login.firstname)
        cy.xpath("//input[@id='last-name']").type(Login.lastname)
        cy.xpath("//input[@id='postal-code']").type(Login.postal_code)
        cy.xpath("//input[@id='continue']").click()
        cy.xpath("//button[@id='finish']").click()
        cy.xpath("//h2").should('have.text', 'Thank you for your order!');
        cy.log('Thank you for your order is showing successfully')
        cy.xpath("//button[@id='back-to-products']").click()
    })
})