describe("Log in a user",function(){
    it("Should log in successfully a user",function(){
        cy.visit('http://automationexercise.com');
        cy.contains('AutomationExercise');
        cy.contains('a', "Signup / Login").click();
        cy.contains("Login to your account");
        cy.fixture("user").then((userData)=>{
            cy.get("[data-qa='login-email']").type(userData.loginEmail);
        })
        cy.fixture("account_info").then((accountInfo)=>{
            cy.get("[data-qa='login-password']").type(accountInfo.loginPassword);
            cy.get("[data-qa='login-button']").click();
            cy.contains('a', " Logged in as ");
        })
    })
    it("Should fail to log in a user with bad credentials",function(){
        cy.visit('http://automationexercise.com');
        cy.contains('AutomationExercise');
        cy.contains('a', "Signup / Login").click();
        cy.contains("Login to your account");
        cy.fixture("user").then((userData)=>{
            cy.get("[data-qa='login-email']").type(userData.badEmail);
        })
        cy.fixture("account_info").then((accountInfo)=>{
            cy.get("[data-qa='login-password']").type(accountInfo.badPassword);
            cy.get("[data-qa='login-button']").click();
            cy.contains('p', "Your email or password is incorrect!");
        })
    })
})