describe('Contact us form',function(){
    /*Redirection on the contact form*/

    it('Should redirect on the Contact us form', function(){
        cy.start();
        cy.contains('a', "Contact us").click();
        cy.url().should('include', 'contact_us');
        cy.contains('Contact Us');
    })
    it('Should successfully submit the contact us form', function(){
        cy.visit("contact_us");
        cy.fixture('contact').then((contactData) => {
            cy.get('[data-qa="name"]').type(contactData.name);
            cy.get('[data-qa="email"]').type(contactData.email);
            cy.get('[data-qa="subject"]').type(contactData.subject);
            cy.get('[data-qa="message"]').type(contactData.message);
            cy.get('[name="upload_file"]').selectFile('cypress/fixtures/contact.txt');
            cy.get('[data-qa="submit-button"]').click();
            cy.contains('Success! Your details have been submitted successfully.');
        })
        // Redirection bloquée lors du test
        //cy.contains('a', " Home").click();
        //cy.contains('AutomationExercise');
    })
})