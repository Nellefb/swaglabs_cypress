import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import checkout_overview_page from "../pages/checkout_overview_page"

Then("the Checkout Overview page should be displayed", () => {
    checkout_overview_page.validatePage()
})