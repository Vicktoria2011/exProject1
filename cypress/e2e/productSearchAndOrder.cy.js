import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import { login, findProduct } from '../support/helper';

it('find product', () => {

    login(user);

    cy.get('[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"]').click();

    cy.log('Enter "Juice" into filter and look for the product');
    cy.visit('/');
    cy.get('#searchQuery').type('Juice{enter}');

    findProduct('Raspberry Juice (1000ml)');
    cy.get('button[aria-label="Add to Basket"]').click();
  
    cy.log('Shopping cart');
    cy.get('[class="mat-focus-indicator buttons mat-button mat-button-base ng-star-inserted"]').click();

    cy.log('Payment confirmation');
    cy.get('#checkoutButton').click();
    cy.get('.mat-card>:last-child:not(.mat-card-footer), .mat-card-content>:last-child:not(.mat-card-footer)').click({ force: true });
    cy.get('[class="mat-form-field-wrapper ng-tns-c119-29"]').type(user.country);
    cy.get('[class="mat-form-field-wrapper ng-tns-c119-30"]').type(user.name);
    cy.get('[class="mat-form-field-wrapper ng-tns-c119-31"]').type(user.mobileNumber);
    cy.get('[class="mat-form-field-wrapper ng-tns-c119-32"]').type(user.zipCode);
    cy.get('[class="mat-form-field-wrapper ng-tns-c119-33"]').type(user.address);
    cy.get('[class="mat-form-field-wrapper ng-tns-c119-34"]').type(user.city);
    cy.get('[class="mat-form-field-wrapper ng-tns-c119-35"]').type(user.state);
    cy.get('#submitButton').click();
    cy.get('#mat-radio-40-input').check;
    cy.get('.mat-card>:last-child:not(.mat-card-footer), .mat-card-content>:last-child:not(.mat-card-footer)').click();
    cy.get('#mat-radio-42-input').check();
    cy.get('.nextButton[_ngcontent-dgi-c240]').click();

    cy.get('#mat-expansion-panel-header-3').click();
    cy.get('#mat-input-38').type(user.name);
    cy.get('#mat-input-39').type(user.cardNumber);
    cy.get('#mat-radio-44').check();
    cy.get('#mat-input-40').eq(5).click();
    cy.get('#mat-input-41').eq(5).click();
    cy.get('#submitButton').click();

    //cy.get('#mat-expansion-panel-header-4').click();
    //cy.get('#coupon').type(user.coupon);
    //cy.get('#applyCouponButton').click();

    cy.get('[class="mat-focus-indicator btn nextButton mat-button mat-raised-button mat-button-base mat-primary"]').click();
    cy.get('#checkoutButton').click();



    cy.get('.table.confirm_shippment_options')
      .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.phone);

    cy.get('.table.confirm_payment_options')
      .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.phone);
  
    cy.log('Confirmation order')
    cy.get('#checkout_btn').click();
  
    cy.log('Message display')
    cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
  });