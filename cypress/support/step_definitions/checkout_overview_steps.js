import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import checkout_overview_page from "../pages/checkout_overview_page"

When("the checkout overview displays the order details", () => {
    checkout_overview_page.validateProductName("Sauce Labs Backpack")
})

When("the user clicks the Finish button", () => {
    checkout_overview_page.clickFinish()
})

When("the user clicks the Cancel button", () => {
    checkout_overview_page.clickCancel()
})

Then("the Checkout Overview page should be displayed", () => {
    checkout_overview_page.validatePage()
})