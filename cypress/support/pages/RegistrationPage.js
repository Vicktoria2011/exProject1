import BasePage from "./BasePage";

class RegistrationPage extends BasePage{
   
    constructor(){
        super();
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.securityQuestionField = '.mat-form-field-hide-placeholder .mat-select-placeholder';
        this.elements.chooseSecretQuestionField = '.mat-option-text';
        this.elements.answerField = '#securityAnswerControl';
        this.elements.submitRegistrationFormButton = '#registerButton';
        this.elements.submitRegistrationForm = '.mat-card.mat-card.mat-focus-indicator.mat-elevation-z6';
    }
       
    getUserEmailField(){
        return cy.get(this.elements.emailField);
    }

    getUserPasswordField(){
        return cy.get(this.elements.passwordField);
    }

    getUserRepeatPasswordField(){
        return cy.get(this.elements.repeatPasswordField);
    }

    getSecurityQuestionField(){
        return cy.get(this.elements.securityQuestionField);
    }

    getChooseSecretQuestionField(){
        return cy.get(this.elements.chooseSecretQuestionField);
    }

    getAnswerField(){
        return cy.get(this.elements.answerField);
    }

    getSubmitRegistrationFormButton(){
        return cy.get(this.elements.submitRegistrationFormButton);
    }

    getSubmitRegistrationForm(){
        return cy.get(this.elements.submitRegistrationForm);
    }

    fillRegistrationFields(user){

        cy.log('Fill in registration fields...');
        this.getUserEmailField().type(user.email);
        this.getUserPasswordField().type(user.password);
        this.getUserRepeatPasswordField().type(user.repeatPassword);
        this.getAnswerField().type(user.answer);
        } 
} 
export default new RegistrationPage();
  