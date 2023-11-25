import BasePage from "./BasePage";

class FeedbackPage extends BasePage{
    
    constructor(){
        super();
        this.elements.openSideMenu = 'button[aria-label="Open Sidenav"]';
        this.elements.feedbackButton = 'a[aria-label="Go to contact us page"]';
        this.elements.commentField = '#comment';
        this.elements.ratingButton = '#rating';
        this.elements.clickFiveStars = '[class="mat-slider-thumb-label-text"]';       
        this.elements.clickFiveStarsBotton = '[aria-label="Slider for selecting the star rating"]';
        this.elements.codCaptcha = 'code#captcha';
        this.elements.enterResultCaptcha = 'input#captchaControl';
        this.elements.submitCustomerFeedback = '#submitButton';
        //this.elements.feedbackSuccsesful = '[id=cdk-overlay-4]';
        }

    getOpenSideMenu(){
            return cy.get(this.elements.openSideMenu)
        }

    getFeedbackButton(){
            return cy.get(this.elements.feedbackButton)
        }

    getCommentField(){
            return cy.get(this.elements.commentField)
        }

    getRatingButton(){
            return cy.get(this.elements.ratingButton)
        }

    getClickFiveStars(){
            return cy.get(this.elements.clickFiveStars)
        }

    getClickFiveStarsBotton(){
            return cy.get(this.elements.clickFiveStarsBotton)
        }

    getCodCaptcha(){
            return cy.get(this.elements.codCaptcha)
        }

    getEnterResultCaptcha(){
            return cy.get(this.elements.enterResultCaptcha)
        }

    getSubmitCustomerFeedback(){
            return cy.get(this.elements.submitCustomerFeedback)
        }   

    fillFeedbackFields(user){
        this.getCommentField().type('Your juice good!');
    }   
}
export default new FeedbackPage();