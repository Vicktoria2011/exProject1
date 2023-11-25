import { calculateCaptchaValue } from '../support/helper'; 
import homePage from '../support/pages/HomePage';
import { registration } from '../support/helper';
import { login } from '../support/helper';
import feedbackPage from '../support/pages/FeedbackPage.cy';

it('Feedback', () => {
    homePage.visit();

    const registeredUser = registration();
    login(registeredUser);
        
    cy.log('Open site menu');
    feedbackPage.getOpenSideMenu().click({ force: true });
    feedbackPage.getFeedbackButton().click();

    cy.log('Form customer Feedback');
    const feedbackData = {
        comment: 'Your juice is good!',
        stars: 5,
    };

    feedbackPage.fillFeedbackFields(feedbackData);
    feedbackPage.getCommentField().click();
    feedbackPage.getClickFiveStars().click();
    feedbackPage.getClickFiveStarsBotton().click('bottomRight');

    feedbackPage.getCodCaptcha().invoke('text').then((text) => {
        console.log('Captcha text:', text);
        const captchaValue = calculateCaptchaValue(text);
    
        console.log('Captcha calculation result:', captchaValue);
        feedbackPage.getEnterResultCaptcha().type(captchaValue);
        feedbackPage.getSubmitCustomerFeedback().click();

        cy.log('Checking form submissions');
        feedbackPage.getCommentField().should('have.value', '');
        feedbackPage.getEnterResultCaptcha().should('have.value', '');
      });
});
