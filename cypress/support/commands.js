// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-wait-until';
import 'cypress-file-upload';
import xpaths from '../needs/xpaths.js'
import selectors from '../needs/selectors.js';

Cypress.Commands.add('signin', (email, password) => {
    cy.visit(Cypress.env('AUCHAN_ROOT_URL'))

    cy.xpath(xpaths.loginPage.title)
        .should('be.visible')
        .log('Login page is displayed')

    cy.xpath(selectors.loginPage.email)
        .type(email)
        .should('have.value', email);

    cy.xpath(xpaths.loginPage.password)
        .type(password)
        .should('have.value', password);

    cy.xpath(xpaths.loginPage.signInButton)
        .should('be.visible')
        .click();

});
