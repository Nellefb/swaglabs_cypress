/// <reference types="cypress" />

const checkoutCompleteContainer = ".header_secondary_container"

export default {
    validatePage() {
        cy.get(checkoutCompleteContainer)
            .should('be.visible')
            .should('have.text', 'Checkout: Complete!')
    }
}