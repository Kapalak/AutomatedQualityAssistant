import xpaths from '../../needs/xpaths.js';

// Authentication Test - Scenarios
// 1. Login with fake username
// 2. Login with fake password
// 3. Login with true credentials and logout successfuly
describe('Authentication Tests', () => {
    it('Login with fake username', () => {
        cy.xpath(xpaths.homePage.anonymousHiText).should('be.visible');
        cy.signin('fake@fake.com', Cypress.env('PASSWORD'));
        cy.screenshot();
        cy.xpath(xpaths.loginPage.alertText).should('be.visible');
    })

    it('Login with fake password', () => {
        cy.xpath(xpaths.homePage.anonymousHiText).should('be.visible');
        cy.signin(Cypress.env('EMAIL'), 'fake');
        cy.screenshot();
        cy.xpath(xpaths.loginPage.alertText).should('be.visible');
    })

    it('Login with true credentials and logout successfuly', () => {
        cy.xpath(xpaths.homePage.anonymousHiText).should('be.visible');
        cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.screenshot();
        cy.url().should('eq', Cypress.env('AUCHAN_ROOT_URL'));
        cy.xpath(xpaths.homePage.userHiText).should('be.visible');
    })
})