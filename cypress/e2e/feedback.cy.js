
describe('Customer Feedback', () => {

    it('Feedback', () => {
        cy.visit('/');

        cy.get('[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"]').click();
        cy.get('button[aria-label="Open Sidenav"]').click();
        cy.get('a[aria-label="Go to contact us page"]').click();
        cy.get('#comment').type('Your juice is not bad');
        cy.get('#rating').click();
        cy.get('.mat-slider#rating').invoke('text').should('eq', '3★');

        
        
        //cy.get('#captcha').type(captchaSolution);
        //cy.get('#captchaControl').click();
        cy.url().should('include', 'Thank you for your feedback.');

      })
})
    
