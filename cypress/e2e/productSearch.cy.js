import { faker } from '@faker-js/faker';
import { findProduct } from '../support/helper';
import homePage from '../support/pages/HomePage';
import { registration } from '../support/helper';
import { login } from '../support/helper';
import findPage from '../support/pages/FindPage.cy';

const user = {
country: faker.location.country(),
name: faker.person.fullName(),
name2: faker.person.fullName(),
mobileNumber: faker.string.numeric(8),
zipCode: faker.location.zipCode('#####'),
address: faker.location.streetAddress(),
city: faker.location.city(),
state: faker.animal.bird(),
cardNumber: faker.string.numeric(16),
}

it('find product', () => {

  const registeredUser = registration();
  login(registeredUser);

  cy.log('Enter "Juice" into filter and look for the product');
  homePage.visit();

  cy.log('Search and selection product Strawberry Juice (500ml)');
  findProduct('Strawberry Juice (500ml)'); 

  cy.log('Shopping cart');
  findPage.getShowShoppingCart().click();
  findPage.getCheckoutButton().click();

  cy.log('Add and Select address');
  findPage.getAddNewAddressButton().click();
  findPage.fillAddNewAddressFields(user);
  findPage.getAddNewAddressSubmitButton().click();
  findPage.getSelectAddressCheck().last().click({force: true});
  findPage.getChoicePaymentButton().click();

  cy.log('Delivery Address');
  findPage.getAddAddressCheck().last().click({force: true});
  findPage.getDeliveryMethodSelectionButton().click();

  cy.log('Payment Options');
  findPage.getAddNewCard().click();
  findPage.getNameField2().eq(1).type(user.name2);
  findPage.getCardNumberField().type(user.cardNumber);
  findPage.getExpiryMonth().eq(3).select('5');
  findPage.getExpiryYear().eq(4).select('2082');
  findPage.getSubmitPaymentOptionsButton().click();

  cy.log('My Payment Options');
  findPage.getSelectСardNumber().last().click({force: true});
  findPage.getButtonToOrder().click();

  cy.log('Order Summary');
  findPage.getOrderSummaryView()
    .should('contain', user.name)
    .and('contain', user.address)
    .and('contain', user.country)
    .and('contain', user.mobileNumber);      
  findPage.getConfirmationOrderButton().click();
  
  cy.log('Message display')
  findPage.getOrderSummary().should('contain', 'Thank you for your purchase!');
})