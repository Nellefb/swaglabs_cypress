/// <reference types="cypress" />

import { validateProductSorting } from "../helpers/sorting_helpers"

//Elements
const productList = '.inventory_list'
const productItem = '.inventory_item'
const productName = '.inventory_item_name'
const productDesc = '.inventory_item_desc'
const productPrice = '.inventory_item_price'
const selectFilter = '.product_sort_container'
const btnAddToCart = '#add-to-cart-sauce-labs-backpack'
const cartIcon = '.shopping_cart_link'
const cartBadge = '.shopping_cart_badge'
const btnCart = '.shopping_cart_link'
const productContainer = '.header_secondary_container'


export default {
    productList, 
    productItem, 
    productName,
    productDesc, 
    productPrice, 
    selectFilter,

    validatePage() {
        cy.get(productContainer)
            .should('be.visible')
    },

    viewProductList(){
        cy.get(productList)
            .should('be.visible')
    },

    verifyProductListInformation(){
        cy.get(productList).each(($product) => {
            cy.wrap($product).within(() => {
                cy.get(productName).should('be.visible');
                cy.get(productDesc).should('be.visible');
                cy.get(productPrice).should('be.visible');
            })
        })
    },

    selectProductFilter(filter){
        cy.get(selectFilter).select(filter)
    },

    checkFilter(type, direction){
        validateProductSorting(type, direction)
    },

    addProductToCart(product){
        cy.contains(productName, product)
            .parents(productItem)
            .within(() => {
                cy.get(btnAddToCart).click();
            });
    },

    checkCartBadge(numberCart){
        cy.get(cartBadge).should('have.text', numberCart)
    }, 

    productDetail(product){
        cy.contains(productName, product).click()
    }, 

    openShoppingCart(){
        cy.get(btnCart).click()
    }

}