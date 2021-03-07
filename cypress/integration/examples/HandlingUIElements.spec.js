/// <reference types="Cypress" />

describe('UI Elements',function()
{

    it('Verify Inputbox & Radio buttons',function()
    {
        cy.visit("http://demo.guru99.com/test/newtours/") // Visit URL
        cy.url().should('include','newtours') // current page url to include 'newtours'

        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('mercury')
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('mercury')
        
        cy.get('input[name=submit]').should('be.visible').click() //Sign in button
   
        // Title Verification
        cy.title().should('eq','Login: Mercury Tours')

        cy.get(':nth-child(2) > [width="80"] > a').click()

        // Title Verification
        cy.title().should('eq','Find a Flight: Mercury Tours:')

        //Radio buttons
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') // visible, and checked status
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() // visible, and checked status, and select

        cy.get('[name=findFlights]').should('be.visible').click() // Continue button
        
        // Title Verification_2
        cy.title().should('eq','Find a Flight: Mercury Tours:')

    }
   
)
}
)