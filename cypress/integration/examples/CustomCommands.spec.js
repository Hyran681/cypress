/// <reference types="Cypress" />

describe('Custom Commands Suite',function()
{
    beforeEach(function(){
        
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Login Test',function()
    {
        cy.login(this.data.email,this.data.password)
        cy.title().should('eq','Dashboard / nopCommerce administration')

        cy.login("cypress",this.data.password)
        cy.title().should('eq','Your store. Login')
    })

    it('Add Customer Test',function()
    {
        cy.login(this.data.email,this.data.password)
        //Add customer
        cy.log("Adding customer -------------")
    })

    it('Edit Customer Test',function()
    {
        cy.login(this.data.email,this.data.password)
        //Edit customer
        cy.log("Edit customer -------------")
    })
})