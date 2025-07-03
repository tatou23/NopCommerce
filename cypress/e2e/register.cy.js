describe('Register a new user',function(){
    // beforeEach(function(){

    //     cy.visit('http://automationexercise.com');
    //     cy.contains('AutomationExercise');
    //     cy.contains('a', "Signup / Login").click();
    // })
    it('Should redirect on the registration page', function(){
        cy.visit('http://automationexercise.com');
        cy.contains('AutomationExercise');
        cy.contains('a', "Signup / Login").click();
        cy.url().should('include', '/login');
        cy.contains('New User Signup!');
    })
    it('Should register a new user', function(){
        cy.visit('http://automationexercise.com');
        cy.contains('AutomationExercise');
        cy.contains('a', "Signup / Login").click();
        cy.fixture('user').then((userData) => {
            cy.get('[data-qa="signup-name"]').type(userData.signupName);
            cy.get('[data-qa="signup-email"]').type(userData.signupEmail);
            cy.get('[data-qa="signup-button"]').click();
            cy.contains('Enter Account Information');
        })
        cy.fixture('account_info').then((accountInfo) => {
            cy.get('#uniform-id_gender1').click();
            cy.get('[data-qa="password"]').type(accountInfo.password);
            cy.get('[data-qa="days"]').type(accountInfo.birthDate.day);
            cy.get('[data-qa="months"]').type(accountInfo.birthDate.month);
            cy.get('[data-qa="years"]').type(accountInfo.birthDate.year);
            cy.get('[data-qa="first_name"]').type(accountInfo.firstName);
            cy.get('[data-qa="last_name"]').type(accountInfo.lastName);
            cy.get('[data-qa="address"]').type(accountInfo.address);
            cy.get('[data-qa="country"]').type(accountInfo.country);
            cy.get('[data-qa="state"]').type(accountInfo.state);
            cy.get('[data-qa="city"]').type(accountInfo.city);
            cy.get('[data-qa="zipcode"]').type(accountInfo.zipCode);
            cy.get('[data-qa="mobile_number"]').type(accountInfo.mobileNumber);
            cy.get('[data-qa="create-account"]').click();
            cy.contains('Account Created!')


        })
        
    })
    // it('Should fill the user account informations', function(){
    //     cy.visit('https://automationexercise.com/signup');
    //     cy.contains('Enter Account Information');
    //     cy.fixture('account_info').then((accountInfo) => {
    //         cy.get('#uniform-id_gender1').click();
    //         cy.get('[data-qa="password"]').type(accountInfo.password);
    //         cy.get('[data-qa="days"]').type(accountInfo.day);
    //         cy.get('[data-qa="month"]').type(accountInfo.month);
    //         cy.get('[data-qa="years"]').type(accountInfo.year);
    //         cy.get('[data-qa="first_name"]').type(accountInfo.firstName);
    //         cy.get('[data-qa="last_name"]').type(accountInfo.lastName);
    //         cy.get('[data-qa="address"]').type(accountInfo.address);
    //         cy.get('[data-qa="country"]').type(accountInfo.country);
    //         cy.get('[data-qa="state"]').type(accountInfo.state);
    //         cy.get('[data-qa="city"]').type(accountInfo.city);
    //         cy.get('[data-qa="zipcode"]').type(accountInfo.zipCode);
    //         cy.get('[data-qa="mobile_number"]').type(accountInfo.mobileNumber);
    //         cy.get('[data-qa="create-account"]').click()


    //     })
        
    // })

    

})