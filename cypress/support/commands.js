Cypress.Commands.add('start', (path = '/') => {
    cy.visit(path);
})