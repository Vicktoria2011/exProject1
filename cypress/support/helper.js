export function login(user){
    cy.log('Open website login page');
    cy.visit('#/login');

    cy.log('Authorize user');
    cy.get('#email').type(user.email, {force: true});
    cy.get('[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"]').click();
    cy.get('.cc-btn.cc-dismiss').click();
    cy.get('#password').type(user.password);
    cy.get('button[type="submit"]').contains('Log in').click();

    cy.get('[class="mat-toolbar mat-elevation-z6 mat-primary mat-toolbar-multiple-rows"]').should('contain', 'Your Basket');
}

   
    //export function findProduct(productName, attempts = 3) {
      //  cy.get('body').then(body => {
      //      const productElement = body.find(`.item-name[title="${productName}"]`);
            
       //     if (productElement.length > 0) {
        //        cy.wrap(productElement).should('exist').click();
        //    } else if (attempts > 0) {
        //        cy.get('.mat-paginator .mat-paginator-page-size .mat-select-trigger', { timeout: 10000 }).click();
        //        cy.get('.mat-option-text').eq(2).click();
                
       //         findProduct(productName, attempts - 1);
        //    }
      //  });
    //}
    
    export function findProduct(productName) {

        cy.get('body').then( body => {
            if(body.find(`.item-name[value="${productName}"]`).length > 0){
                cy.get(`.item-name[value="${productName}"]`).click();
            }else{
                cy.get('button[type="button"][aria-label="Next page"]').click({force: true});
                findProduct(productName);
            }
        })
    }
    

        
