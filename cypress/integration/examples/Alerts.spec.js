/// <reference types="Cypress" />

describe('UI Elements',function()
{

    it('Alerts',function()
    {
        cy.visit("http://demo.automationtesting.in/Alerts.html") 
        
        cy.get('.btn-danger').click()
        //validating string on alert below as cypress handles alert on its own
        cy.on('window:alert',(str) =>
        {
            expect(str).to.equal('I am an alert box!')
        }
        )

        cy.get(':nth-child(2) > .analystic').click()
        cy.get('.btn-primary').click()

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Press a Button !')
        }
        )
    }   
    )

}
)