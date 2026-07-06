/// <reference types="cypress" />

const checkoutOverviewContainer = ".header_secondary_container"
const productName = ".inventory_item_name"
const btnFinish = "#finish"
const btnCancel = "#cancel"

export default {
    validatePage() {
        cy.get(checkoutOverviewContainer)
            .should('be.visible')
            .should('have.text', 'Checkout: Overview')
    },

    validateProductName(pName){
        cy.get(productName)
            .should('be.visible')
            .should('have.text', pName)
    },

    clickFinish(){
        cy.get(btnFinish).click()
    },

    clickCancel(){
        cy.get(btnCancel).click()
    }

}