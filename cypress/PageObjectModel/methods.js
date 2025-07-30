class methods {

    clickbyXpath(xpath) {
        cy.xpath(xpath, { timeout: 60000 }).should('be.visible').click({ force: true });
    }

    clickelement(selector) {
        cy.get(selector, { timeout: 10000 }).should('be.visible').click();
    }

    Verifytext1(xpath, expectedText) {
        cy.xpath(xpath, { timeout: 60000 }).should('include.text', expectedText);
    }

    Verifytext2(selector, expectedText) {
        cy.get(selector, { timeout: 60000 }).should('include.text', expectedText);
    }

    VisibilityofElement(xpath) {
        cy.xpath(xpath, { timeout: 60000 }).should('be.visible');
    }

    VisibilityofElement2(selector) {
        cy.get(selector, { timeout: 60000 }).should('be.visible');
    }

    typeInputxpath(xpath, value) {
        cy.xpath(xpath, { timeout: 60000 }).type(value);
    }

    typeInput2(selector, value) {
        cy.get(selector, { timeout: 60000 }).should('be.visible').type(value);
    }

    isEnabled(xpath) {
        cy.xpath(xpath, { timeout: 60000 }).should('not.be.disabled');
    }

    isDisabled(selector) {
        cy.get(selector, { timeout: 60000 }).should('be.disabled');
    }

    VerifyElementNotExist(xpath) {
        cy.xpath(xpath, { timeout: 60000 }).should('not.exist');
    }

    clearandtype(selector, text) {
        cy.get(selector, { timeout: 60000 }).clear().type(text);
    }

    ClearAndTypeWithXpath(xpath, text) {
        cy.xpath(xpath, { timeout: 60000 }).clear().type(text);
    }

    MouseHoverwithXpath(xpath) {
        cy.xpath(xpath, { timeout: 60000 }).trigger('mouseover', { force: true });
    }

    MouseHover(selector) {
        cy.get(selector, { timeout: 60000 }).trigger('mouseover', { force: true });
    }

    ClickandTypeXpath(Xpath, text) {
        cy.xpath(Xpath, { timeout: 60000 }).click({ force: true }).type(text);
    }

    ClickandType(selector, text) {
        cy.get(selector, { timeout: 60000 }).click({ force: true }).type(text);
    }

    ScrollwithXpath(xpath) {
    cy.xpath(xpath, { timeout: 60000 }).scrollIntoView();
}

    Scroll(selector) {
        cy.get(selector, { timeout: 60000 }).scrollIntoview();
    }

    NotVisibilityofElementXpath(xpath) {
        cy.xpath(xpath, { timeout: 60000 }).should('not.be.visible');
    }

    NotVisibilityofElement(selector) {
        cy.get(selector, { timeout: 60000 }).should('not.be.visible');
    }

    Titletextcontainsxpath(xpath, text) {
        cy.xpath(xpath, { timeout: 60000 }).contains(text);
    }

    Titletextconatins(selector, text) {
        cy.get(selector, { timeout: 60000 }).contains(text);
    }

    assertElementContainsText(selector, text) {
        cy.get(selector, { timeout: 60000 }).should('contain', text);
    }

    assertElementContainsTextbyxpath(xpath, text) {
        cy.xpath(xpath, { timeout: 60000 }).should('contain', text);
    }

    clickElementIndexXpath(xpath, int) {
        cy.xpath(xpath, { timeout: 60000 }).eq(int).click({ force: true });
    }

    clickElement0(selector, int) {
        cy.get(selector, { timeout: 60000 }).eq(int).click({ force: true });
    }

}
export default new methods();