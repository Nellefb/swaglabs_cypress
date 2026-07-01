/// <reference types="cypress" />

const checkoutOverviewContainer = ".header_secondary_container"

export default {
    validatePage() {
        cy.get(checkoutOverviewContainer)
            .should('be.visible')
            .should('have.text', 'Checkout: Overview')
    }
}