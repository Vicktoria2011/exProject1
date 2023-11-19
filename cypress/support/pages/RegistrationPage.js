import BasePage from "./BasePage";

class RegistrationPage extends BasePage{
   
    constructor(){
        super();
        this.elements.email = '#emailControl';
        this.elements.password = '#passwordControl';
        this.elements.repeatPassword = '#repeatPasswordControl';
        this.elements.securityQuestion = '#securityQuestion';
        this.elements.answer = '#securityAnswerControl';
        this.elements.submitRegistrationFormButton = '#registerButton';
    }
  
    getUserEmail(){
        return cy.get(this.elements.email)
    }

    getUserPassword(){
        return cy.get(this.elements.password)
    }

    getUserRepeatPassword(){
        return cy.get(this.elements.repeatPassword)
    }

    getUserSrepeatPassword(){
        return cy.get(this.elements.securityQuestion)
    }

    getUserSrepeatAnswer(){
        return cy.get(this.elements.answer)
    }

    getUserSrepeatSubmitRegistrationFormButton(){
        return cy.get(this.elements.submitRegistrationFormButton)
    }

    fillRegistrationFields(user){

    }

    fillRegistrationFields(user){
        cy.log('Fill in registration fields...');
        this.elements.email().type(user.email);
        this.elements.password().type(user.password);
        this.elements.repeatPassword().type(user.repeatPassword);
        this.elements.securityQuestion().type(user.securityQuestion);
        this.elements.answer().type(user.answer);
       } 
} 
export default new RegistrationPage;
  