import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';

user.email = faker.internet.email();
user.answer = faker.internet.userName();

describe('Successful registration', () => {

  it('Registration', () => {
    homePage.visit();

    cy.log('Close pop-up windows');
    homePage.getPopUpWindow1().click();
    homePage.getPopUpWindow2().click();

    cy.log('Opening registration panel');
    homePage.getHeaderAccountButton().click();
    homePage.getHederLoginButton().click();
    loginPage.getRegisterNewCustomerLink().click();

    cy.log('Submit registration form...');
    registrationPage.fillRegistrationFields(user);
    registrationPage.getSecurityQuestionField().click();;
    registrationPage.getChooseSecretQuestionField().contains('Your eldest siblings middle name?').click();
    registrationPage.getSubmitRegistrationFormButton().click();
    
    cy.log('Verifying successful registration...');
    accountPage.getSuccsesfulRegistration().should('contain', 'Registration completed successfully. You can now log in.');
  })

  it('Authorization', () => {
    cy.log('Open website login page');
    cy.visit('#/login');
    
    cy.log('Authorize user');
    loginPage.getAuthorizationEmailField().type(user.email, {force: true});
    homePage.getPopUpWindow1().click();
    loginPage.getAuthorizationPasswordField().type(user.password);
    loginPage.getAuthorizationFormButton().contains('Log in').click();

    accountPage.getSuccsesfulLogin().should('contain', 'Your Basket');
})
})

describe('Invalid Registration Test', () => {
  
  const testData = {
    elements: {
      textFields: [
        { selector: '#emailControl', data: '.' },
        { selector: '#passwordControl', data: '1234' },
        { selector: '#repeatPasswordControl', data: '123456' },
      ],
    },
  };

  it('Should display error message and disable registration button', () => {
    homePage.visit();

    cy.log('Close pop-up windows');
    homePage.getPopUpWindow1().click();
    homePage.getPopUpWindow2().click();

    cy.log('Opening registration panel');
    homePage.getHeaderAccountButton().click();
    homePage.getHederLoginButton().click();
    loginPage.getRegisterNewCustomerLink().click();
    
    cy.log('Check invalid data');
    testData.elements.textFields.forEach(({ selector, data }) => {
    cy.get(selector).type(data);
    });

    cy.log('Click registration button and check active');
    registrationPage.getSubmitRegistrationFormButton().click({ force: true });
    registrationPage.getSubmitRegistrationFormButton().should('be.disabled');

    cy.log('Checking for error text');
    registrationPage.getSubmitRegistrationForm().should('contain', 'Email address is not valid');
    registrationPage.getSubmitRegistrationForm().should('contain', 'Password must be 5-40 characters long.');
    registrationPage.getSubmitRegistrationForm().should('contain', 'Passwords do not match');

    cy.log('Registration button is disabled');
    registrationPage.getSubmitRegistrationFormButton().should('be.disabled');
  });
})