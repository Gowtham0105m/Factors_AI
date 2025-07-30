describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get("[text()='tftf']").click()
    cy.xpath()
  })
})
