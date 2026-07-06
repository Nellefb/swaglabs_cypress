import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import checkout_complete_page from "../pages/checkout_complete_page"

Then("the Checkout Complete page should be displayed", () => {
    checkout_complete_page.validatePage()
})