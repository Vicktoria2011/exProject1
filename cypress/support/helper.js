import { faker } from '@faker-js/faker';
import registrationPage from './pages/RegistrationPage';
import homePage from './pages/HomePage';
import loginPage from './pages/LoginPage';
import accountPage from './pages/AccountPage';

export function registration(){
  const generatedPassword = faker.internet.password();
  const user = {
    email: faker.internet.email(),
    password: generatedPassword,
    repeatPassword: generatedPassword,
    answer: faker.internet.userName(),
  }

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

    return user;
  }


export function login(user){
    cy.log('Open website login page');
    cy.visit('#/login');

    cy.log('Authorize user');
    loginPage.getAuthorizationEmailField().type(user.email, {force: true});
    loginPage.getAuthorizationPasswordField().type(user.password);
    loginPage.getAuthorizationFormButton().contains('Log in').click();

    accountPage.getSuccsesfulLogin().should('contain', 'Your Basket');
}


export function findProduct(productName) {
     cy.get('#searchQuery').type(`${productName}{enter}`).then(() => {
     cy.get('.table-container.custom-slate').contains(productName).should('exist').then(() => {
     cy.get('button[aria-label="Add to Basket"]').click();
     });
  });
}

export function calculateCaptchaValue(captchaExpression) {
      try {
      const result = eval(captchaExpression);
      return result.toString();
      } catch (error) {
      console.error('Error calculating captcha expression:', error);
      return null;
      }
    }     
