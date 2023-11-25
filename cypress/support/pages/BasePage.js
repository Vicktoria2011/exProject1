export default class BasePage {

    constructor() {
      this.elements = {};
      this.elements.headerAccountButton = '#navbarAccount';
      this.elements.hederLoginButton = '#navbarLoginButton';
      this.elements.popUpWindow1 = "button.mat-focus-indicator.mat-tooltip-trigger.mat-raised-button.mat-button-base.mat-warn.ng-star-inserted";
      this.elements.popUpWindow2 = ".cc-btn.cc-dismiss";
    }

    getHeaderAccountButton(){
      return cy.get(this.elements.headerAccountButton);
    }

    getHederLoginButton(){
      return cy.get(this.elements.hederLoginButton)
    }

    getPopUpWindow1(){
      return cy.get(this.elements.popUpWindow1)
    }

    getPopUpWindow2(){
      return cy.get(this.elements.popUpWindow2)
    }
}
  
  