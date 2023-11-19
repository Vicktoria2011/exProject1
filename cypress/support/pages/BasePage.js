export default class BasePage {
    constructor() {
      this.elements = {};
      this.elements.headerAccountButton = '#navbarAccount';
    }

    getHeaderAccountButton(){
        return cy.get(this.elements.headerAccountButton);
    }
}
  
  