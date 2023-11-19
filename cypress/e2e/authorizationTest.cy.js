import user from '../fixtures/user.json'
import { login } from '../support/helper'
import { faker } from '@faker-js/faker'

it('Authorization', () => {

    cy.log('Open website login page');
    cy.visit('#/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#email').type(user.email, {force: true});
    cy.get('[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"]').click();
    cy.get('.cc-btn.cc-dismiss').click();
    cy.get('#password').type(user.password);
    cy.get('button[type="submit"]').contains('Log in').click();

    cy.get('[class="mat-toolbar mat-elevation-z6 mat-primary mat-toolbar-multiple-rows"]').should('contain', 'Your Basket');
})

it.skip('Authorization with invalid loginName', () => { // доделать

    user.email = faker.animal.bear.name

    login(user);

})