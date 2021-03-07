/// <reference types="Cypress" />

import LoginPage from'../PageObjects/LoginPage'
describe('Test Suite POM',function()
{
    before(function(){
        
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Verify types of locators',function()
    {
        const login = new LoginPage()
        login.visit()
        login.fillEmail(this.data.email)
        login.fillPassword(this.data.password)
        login.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })

})