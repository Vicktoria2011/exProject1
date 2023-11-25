import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
        super();
        this.elements.succsesfulRegistration = '.cdk-overlay-pane';
        this.elements.succsesfulLogin = '[class="mat-toolbar mat-elevation-z6 mat-primary mat-toolbar-multiple-rows"]';    }

    getSuccsesfulRegistration(){
        return cy.get(this.elements.succsesfulRegistration);
      }
    
    getSuccsesfulLogin(){
        return cy.get(this.elements.succsesfulLogin);
    }
}
export default new AccountPage();