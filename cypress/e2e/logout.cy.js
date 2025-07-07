describe("Log out a user",function(){
    it("Should log out a user", function(){
        cy.visit('http://automationexercise.com');
        cy.contains('AutomationExercise');
        cy.contains('a', "Signup / Login").click();
        cy.contains("Login to your account");
        cy.fixture("user").then((userData)=>{
            cy.get("[data-qa='login-email']").type(userData.signupEmail);
        })
        cy.fixture("account_info").then((accountInfo)=>{
            cy.get("[data-qa='login-password']").type(accountInfo.password);
            cy.get("[data-qa='login-button']").click();
            cy.contains('a', " Logged in as " );
        })
        cy.contains('a', "Logout").click();
        cy.contains('a', "Signup / Login")
    })
})