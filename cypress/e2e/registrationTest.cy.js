import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email({ provider: 'fakerMail.com'});

describe('Successful registration', () => {

  it('Registration', () => {
    cy.visit('/');

    cy.get('[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"]').click();
    cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();
    cy.get('#newCustomerLink').click();
    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.repeatPassword);
    cy.get('.mat-form-field-hide-placeholder .mat-select-placeholder').click();
    cy.get('.mat-option-text').contains('Your eldest siblings middle name?').click();
    cy.get('#securityAnswerControl').type(user.answer, { force: true });
    cy.get('#registerButton').click();

    cy.get('.cdk-overlay-pane').should('contain', 'Registration completed successfully. You can now log in.');
  })

  it('Authorization', () => {
    cy.log('Open website login page');
    cy.visit('#/login');
    
    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#email').type(user.email, {force: true});
    cy.get('[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"]').click();
    cy.get('#password').type(user.password);
    cy.get('button[type="submit"]').contains('Log in').click();

    cy.get('[class="mat-toolbar mat-elevation-z6 mat-primary mat-toolbar-multiple-rows"]').should('contain', 'Your Basket');
})
  
})

describe.skip('Unsuccessful registration', () => {
  it('Registration without security question', () => {
    cy.visit('/');

    let arr = [
      {
        testData: {
          fields: [
            {
              locator: '#emailControl',
              data: 'zvitnev.20.11.15@gmail.com',
            },
            {
              locator: '#passwordControl',
              data: 'zvitnev.20.11.15@gmail.com',
            },
            {
              locator: '#repeatPasswordControl',
              data: 'zvitnev.20.11.15@gmail.com',
            },
            {
              locator: '#securityQuestion',
              data: 'select',
            },
            {
              locator: '#securityAnswerControl',
              data: 'type',
            },
          ],
        },
        expectedResult: { text: 'Please select a security question.', textColor: 'rgb(255, 0, 0)' },
      },
    ];

    const registrationData = arr[0].testData;
    const expectedResult = arr[0].expectedResult;

    registrationData.fields.forEach((field) => {
    cy.get(field.locator).type(field.data);
    });

    cy.get('.mat-error').should('have.text', expectedResult.text);
    cy.get('.mat-error').should('have.css', 'color', expectedResult.textColor);
  });
});




