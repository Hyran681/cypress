/// <reference types="Cypress" />
describe('Test Hook',function()
{
    before(function(){
        cy.log("**************SETUP BLOCK************")
    })

    after(function(){
        cy.log("**************TEAR DOWN BLOCK************")
    })

    beforeEach(function(){
        cy.log("**************LOGIN BLOCK************")
    })

    afterEach(function(){
        cy.log("**************LOGOUT BLOCK************")
    })

    it('searching',function()
    {
        cy.log("**************Searching Test************")
    })

    it('advanced searching',function()
    {
        cy.log("**************Advanced Searching Test************")
    })

    it('listing Products',function()
    {
        cy.log("**************Listing Products Test************")
    })

})