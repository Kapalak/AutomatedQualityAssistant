import xpaths from '../../needs/xpaths.js';

// Authentication Test - Scenarios
// 1. Login with fake username
// 2. Login with fake password
// 3. Login with correct credentials and logout successfuly
describe('Authentication Tests', () => {
    it('Login with fake username', () => {
        cy.signin('fake@fake.com', Cypress.env('PASSWORD'));
        cy.xpath(xpaths.loginPage.alertText).should('be.visible');
        cy.screenshot();
    })

    it('Login with fake password', () => {
        cy.signin(Cypress.env('EMAIL'), 'fake');
        cy.xpath(xpaths.loginPage.alertText).should('be.visible');
        cy.screenshot();
    })

    it('Login with correct credentials and logout successfuly', () => {
        cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.url().should('eq', Cypress.env('AUCHAN_ROOT_URL'));
        cy.xpath(xpaths.homePage.userHiText).should('be.visible');
        cy.screenshot();
    })
})