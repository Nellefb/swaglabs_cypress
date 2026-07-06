/// <reference types="cypress" />

const checkoutHeaderContainer = ".header_secondary_container"
const firstnameInput = "#first-name"
const lastnameInput = "#last-name"
const postalcodeInput = "#postal-code"
const btnContinue = "#continue"
const errorMessage = ".error-message-container"
const btnCancel = "#cancel"

export default {
    validatePage() {
        cy.get(checkoutHeaderContainer)
            .should('be.visible')
            .should('have.text', 'Checkout: Your Information')
    },

    typeFirstname(firstname){
        cy.get(firstnameInput)
        .type(firstname)
    },

    typeLastname(lastname){
        cy.get(lastnameInput)
        .type(lastname)
    },

    typePostalcode(postalcode){
        cy.get(postalcodeInput)
        .type(postalcode)
    },

    clickContinue(){
        cy.get(btnContinue).click()
    },

    checkErrorMessage(error){
        cy.get(errorMessage)
            .should("be.visible")
            .should("have.text", error)
    }, 

    cancelCheckout(){
        cy.get(btnCancel).click()
    }

}