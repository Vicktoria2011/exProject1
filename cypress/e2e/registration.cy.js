import user from '../fixtures/user.json';
//import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../../support/pageObjects/RegistrationPage';
import accountPage from '../support/pages/AccountPage';

user.email = faker.internet.email({ provider: 'fakeMail.com'});
//user.password = "123456",
//user.repeatPassword = "123456",
//user.securityQuestion = "select",
//user.answer = "Elena",


describe('Successful registration and authorization', () => {

  it('Registration', () => {
    homePage.visit();
    
    cy.log('Opening registration page...');
    registrationPage.registerUser(user);
    registrationPage.checkRegistrationSuccess();

    cy.log('Verify that "Your Basket" appears in the right corner');
    accountPage.getFirstNameText().should('contain', 'Registration completed successfully. You can now log in.');
    // Authorization
    registrationPage.loginUser(user);
  });
});
