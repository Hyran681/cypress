/// <reference types="Cypress" />
describe('Locating Elements',function()
{
    it('Verify types of locators',function()
    {
        cy.visit("https://demo.nopcommerce.com/") //Opens the URL

        cy.get("#small-searchterms").type("Apple MacBook Pro") //Search box using id selector

        cy.get("[type='submit']").click() //click on Search button

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

        cy.get("#product_enteredQuantity_4").clear().type('4') // Adding quantity

        cy.get("#add-to-cart-button-4").click() // After adding the quantity

        cy.wait(5000)

        cy.get("#topcartlink > a > span.cart-label").click()//Shopping cart link

        cy.wait(3000)

        cy.get(".product-unit-price").contains('$1,800.00') // Validation
    })
})