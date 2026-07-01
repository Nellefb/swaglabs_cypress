/// <reference types="cypress" />

const containerDetails = '.inventory_details'

export default{
    validatePage(){
        cy.get(containerDetails).should('be.visible')
    }
}