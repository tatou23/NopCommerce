//POM for the test cases page
class TestCasesPage{
    verifyTestCasesTitleIsVisible(){
        cy.start();
        cy.contains('a', "Test Cases").click();
        cy.url().should('include', 'test_cases');
        cy.contains('Test Cases');
    }
}
export default new TestCasesPage();