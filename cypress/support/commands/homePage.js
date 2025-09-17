Cypress.Commands.add('start', (path = '/') => {
    cy.visit(path);
    cy.contains('AutomationExercise');
    //cy.contains('a', "Signup / Login").click();
})