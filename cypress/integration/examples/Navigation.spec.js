/// <reference types="Cypress" />
describe('Navigation',function()
{
    it('Navigation Tests',function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store') //Home

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq','nopCommerce demo store. Register')// Reg

        cy.go('back')
        cy.title().should('eq','nopCommerce demo store') //Home

        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register')// Reg
  
        cy.go(-1)//back
        cy.title().should('eq','nopCommerce demo store') //Home

        cy.go(1)//foward
        cy.title().should('eq','nopCommerce demo store. Register')// Reg
    
        cy.reload() //refresh or reload
    }

)
}
)