import BasePage from "./BasePage";

class LoginPage extends BasePage {

  constructor() {
    super();
    this.elements.registerNewCustomerLink = '#newCustomerLink';
    this.elements.authorizationEmailField = '#email';
    this.elements.authorizationPasswordField = '#password';
    this.elements.authorizationFormButton = 'button[type="submit"]';
    this.elements.checkingMessages = 'div.error.ng-star-inserted';
  }
 
  getRegisterNewCustomerLink(){
    return cy.get(this.elements.registerNewCustomerLink);
  }

  getAuthorizationEmailField(){
    return cy.get(this.elements.authorizationEmailField);
  }

  getAuthorizationPasswordField(){
    return cy.get(this.elements.authorizationPasswordField);
  }

  getAuthorizationFormButton(){
    return cy.get(this.elements.authorizationFormButton);
  }

  getCheckingMessages(){
    return cy.get(this.elements.checkingMessages);
  }

}
export default new LoginPage();