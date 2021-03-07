/// <reference types="Cypress" />
describe('My Test Suite',function()
{
    it('Verify Title Of The Page - Positive', function(){
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
    })
})

//CSS selectors

//Login class locator 
//      .ico-login

//Search box id locator
//      #small-searchterms

//Search button other attributes
//[type='submit']

//combine class and other attributes
// .add-to-cart-button[value='Add to cart']