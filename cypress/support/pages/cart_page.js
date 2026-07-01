/// <reference types="cypress" />

const cartHeaderContainer = ".header_secondary_container"
const productName = ".inventory_item_name"
const productItem = ".cart_item"
const btnRemove = ".cart_button"
const btnContinueShopping = "#continue-shopping"
const btnCheckout = "#checkout"

export default {

    validatePage(){
        cy.get(cartHeaderContainer)
            .should('be.visible')
            .should('have.text', 'Your Cart')
    },

    validateProduct(product){
        cy.contains(productName, product).should('be.visible')
    },

    removeProduct(product){
        cy.contains(productName, product)
            .parents(productItem)
            .within(() => {
                cy.get(btnRemove).click();
            });
    },

    validateProductIsNotInCart(product){
        cy.contains(productName, product).should('not.exist')
    },

    clickContinueShopping(){
        cy.get(btnContinueShopping).click()
    },

    clickCheckout(){
        cy.get(btnCheckout).click()
    }

}