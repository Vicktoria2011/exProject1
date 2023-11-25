import loginPage from '../support/pages/LoginPage'
import accountPage from '../support/pages/AccountPage'
import { registration } from '../support/helper'

it('Authorization', () => {

    const registeredUser = registration();

    cy.log('Open website login page');
    cy.visit('#/login');

    cy.log('Authorize user');
    loginPage.getAuthorizationEmailField().type(registeredUser.email);
    loginPage.getAuthorizationPasswordField().type(registeredUser.password);
    loginPage.getAuthorizationFormButton().contains('Log in').click();

    accountPage.getSuccsesfulLogin().should('contain', 'Your Basket');
})

it('Authorization with invalid loginName', () => { 

    const validUser = registration();
    const invalidUser = {
      invalidEmail: 'invalidemail@gmail.com', 
      password: validUser.password,
    };
  
    cy.log('Open website login page');
    cy.visit('#/login');
  
    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');
  
    cy.log('Authorize user');
    loginPage.getAuthorizationEmailField().type(invalidUser.invalidEmail);
    loginPage.getAuthorizationPasswordField().type(invalidUser.password);
    loginPage.getAuthorizationFormButton().click();
    loginPage.getCheckingMessages().should('contain', 'Invalid email or password.'); 
  
  })
  
  it("Authorization with invalid password", () => {
  
    const validUser = registration();
    const invalidUser = {
      email: validUser.email,
      invalidPassword: '123456', 
    };
    
      cy.log('Open website login page');
      cy.visit('#/login');
  
      cy.log('Check user is unauthorized');
      cy.getCookie('customer').should('be.null');
  
      cy.log('Authorize user');
      loginPage.getAuthorizationEmailField().type(invalidUser.email);
      loginPage.getAuthorizationPasswordField().type(invalidUser.invalidPassword);
      loginPage.getAuthorizationFormButton().click();
      loginPage.getCheckingMessages().should('contain', 'Invalid email or password.');
    });
  
    it('Authorization with invalid loginName and password', () => { 
  
      const validUser = registration();
      const invalidUser = {
        email: validUser.email.replace('@', '_invalid@'),
      invalidPassword: '123456', 
    }; 
  
      cy.log('Open website login page');
      cy.visit('#/login');
  
      cy.log('Check user is unauthorized');
      cy.getCookie('customer').should('be.null');
  
      cy.log('Authorize user');
      loginPage.getAuthorizationEmailField().type(invalidUser.email);
      loginPage.getAuthorizationPasswordField().type(invalidUser.invalidPassword);
      loginPage.getAuthorizationFormButton().click();
      loginPage.getCheckingMessages().should('contain', 'Invalid email or password.'); 
    })