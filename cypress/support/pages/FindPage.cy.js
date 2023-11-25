import BasePage from "./BasePage";

class FindPage extends BasePage{
    
    constructor(){
        super();
        this.elements.showShoppingCart = 'button[aria-label="Show the shopping cart"]';
        this.elements.checkoutButton = 'button#checkoutButton';
        this.elements.addNewAddressButton = 'button[aria-label="Add a new address"]';
        this.elements.countryField = 'input[placeholder="Please provide a country."]';
        this.elements.nameField = 'input[placeholder="Please provide a name."]';
        this.elements.mobileNumberField = 'input[placeholder="Please provide a mobile number."]';
        this.elements.zipCodeField = 'input[placeholder="Please provide a ZIP code."]';
        this.elements.addressField = '#address';
        this.elements.cityField = 'input[placeholder="Please provide a city."]';
        this.elements.stateField = 'input[placeholder="Please provide a state."]';
        this.elements.addNewAddressSubmitButton = '#submitButton';
        this.elements.selectAddressCheck = '.mat-radio-outer-circle';
        this.elements.choicePaymentButton = 'button[aria-label="Proceed to payment selection"]';
        this.elements.addAddressCheck = '.mat-radio-outer-circle';
        this.elements.deliveryMethodSelectionButton = 'button[aria-label="Proceed to delivery method selection"]';
        this.elements.addNewCard = 'app-payment-method';
        this.elements.nameField2 = '.mat-form-field-infix .mat-input-element';
        this.elements.cardNumberField = 'input[type="number"]';
        this.elements.expiryMonth = '.mat-form-field-infix .mat-input-element';
        this.elements.expiryYear = '.mat-form-field-infix .mat-input-element';
        this.elements.submitPaymentOptionsButton = 'button#submitButton';
        this.elements.selectСardNumber = '.mat-radio-button .mat-radio-outer-circle';
        this.elements.buttonToOrder = 'button[aria-label="Proceed to review"]';
        this.elements.orderSummaryView = '.mat-card.mat-focus-indicator.mat-elevation-z6.mat-own-card';
        this.elements.confirmationOrderButton = 'button[aria-label="Complete your purchase"]';
        this.elements.orderSummary = 'h1.confirmation'
        

        }

        getShowShoppingCart(){
            return cy.get(this.elements.showShoppingCart);
        }

        getCheckoutButton(){
            return cy.get(this.elements.checkoutButton);
        }

        getAddNewAddressButton(){
            return cy.get(this.elements.addNewAddressButton);
        }
    
        getCountryField(){
            return cy.get(this.elements.countryField);
        }
       
        getNameField(){
            return cy.get(this.elements.nameField);
        }

        getMobileNumberField(){
            return cy.get(this.elements.mobileNumberField);
        }

        getZipCodeField(){
            return cy.get(this.elements.zipCodeField);
        }

        getAddressField(){
            return cy.get(this.elements.addressField);
        }

        getCityField(){
            return cy.get(this.elements.cityField);
        }

        getStateField(){
            return cy.get(this.elements.stateField);
        }

        getAddNewAddressSubmitButton(){
            return cy.get(this.elements.addNewAddressSubmitButton);
        }

        getSelectAddressCheck(){
            return cy.get(this.elements.selectAddressCheck);
        }

        getChoicePaymentButton(){
            return cy.get(this.elements.choicePaymentButton);
        }

        getAddAddressCheck(){
            return cy.get(this.elements.addAddressCheck);
        }

        getDeliveryMethodSelectionButton(){
            return cy.get(this.elements.deliveryMethodSelectionButton);
        }

        getAddNewCard(){
            return cy.get(this.elements.addNewCard);
        }

        getNameField2(){
            return cy.get(this.elements.nameField2);
        }

        getCardNumberField(){
            return cy.get(this.elements.cardNumberField);
        }

        getExpiryMonth(){
            return cy.get(this.elements.expiryMonth);
        }

        getExpiryYear(){
            return cy.get(this.elements.expiryYear);
        }

        getSubmitPaymentOptionsButton(){
            return cy.get(this.elements.submitPaymentOptionsButton);
        }

        getSelectСardNumber(){
            return cy.get(this.elements.selectСardNumber);
        }

        getButtonToOrder(){
            return cy.get(this.elements.buttonToOrder);
        }

        getOrderSummaryView(){
            return cy.get(this.elements.orderSummaryView);
        }

        getConfirmationOrderButton(){
            return cy.get(this.elements.confirmationOrderButton);
        }

        getOrderSummary(){
            return cy.get(this.elements.orderSummary);
        }

        fillAddNewAddressFields(user){

            cy.log('Fill in Add New Address fields...');
            this.getCountryField().type(user.country);
            this.getNameField().type(user.name);
            this.getMobileNumberField().type(user.mobileNumber);
            this.getZipCodeField().type(user.zipCode);
            this.getAddressField().type(user.address);
            this.getCityField().type(user.city);
            this.getStateField().type(user.state);
            } 

         fillPaymentOptionsFields(user){
            this.getNameField2().eq(1).type(user.name);
            this.getCardNumberField().type(user.cardNumber);
         }   
}
export default new FindPage();

