/// <reference types="Cypress" />

describe('UI Elements',function()
{

    it('Hobbies check boxes',function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html")

        //Check checkbox's, validate it is checked, and validate the label Value
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket') 
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
    
        //Uncheck checkbox's, validate it is checked
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //Check an array of checkbox's
        cy.get('input[type=checkbox]').check(['Cricket','Movies','Hockey'])
    }   
    )

    it('Skills Drop Down',function()
    {
        //Select drop down, select android, ensure that selected value has html property of Android
        cy.get('#Skills').select('Android').should('have.value','Android')
    }   
    )

    it('Languages Multi Select',function()
    {
       cy.get('#msdd').click()
       cy.get('.ui-corner-all').contains('English').click()
       cy.get('.ui-corner-all').contains('Japanese').click()
    }   
    )

    it('Select Countries Search Drop Down',function()
    {
       cy.get('[role=combobox]').click({ force: true })
       cy.get('.select2-search__field').type('South Africa')
       cy.get('.select2-search__field').type('{enter}')

    }   
    )

}
)