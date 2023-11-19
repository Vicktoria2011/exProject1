import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
        super();
        this.elements.registrationSuccessfully = '.cdk-overlay-pan';
    }

    getRegistrationSuccessfully(){
        return cy.get(this.elements.registrationSuccessfully, {timeout: 2000})
    }
    
}
export default new AccountPage();