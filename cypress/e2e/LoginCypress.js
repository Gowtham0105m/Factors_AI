import Login from '../fixtures/Login.json';

const login = () => {

    cy.visit('https://staging-app.factors.ai')
    cy.xpath('//input[@id="login_form_username"]').should('be.visible').type(Login.Username);
    cy.xpath('//input[@id="login_form_password"]').should('be.visible').type(Login.Password);
    cy.xpath('//button//span[text()="LOG IN"]').click()

}

export default login