import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import cart_page from "../pages/cart_page"

Given("clicks on Checkout", () => {
    cart_page.clickCheckout()
})

When("removes the product {string}", (product) => {
    cart_page.removeProduct(product)
})

When("clicks the Continue Shopping button", () => {
    cart_page.clickContinueShopping()
})

When("clicks the Checkout button", () => {
    cart_page.clickCheckout()
})

Then("the shopping cart should not contain the product {string}", (product) => {
    cart_page.validateProductIsNotInCart(product)
})

Then("the product {string} should be displayed", (product) => {
    cart_page.validatePage()
    cart_page.validateProduct(product)
})