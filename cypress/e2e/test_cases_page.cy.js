import TestCasesPage from "../support/pages/testCasesPage.cy";

describe('Test Cases page',function(){
    /*Redirection on the test cases page*/
    
    it('Should redirect on the Test Cases page', function(){
        TestCasesPage.verifyTestCasesTitleIsVisible();
        cy.url().should('include', 'test_cases');
    })
})