import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import checkout_page from "../pages/checkout_page"

When("the user fill firstname {string}, lastname {string} and postal code {string}", (firstname, lastname, postalcode) => {
    checkout_page.typeFirstname(firstname)
    checkout_page.typeLastname(lastname)
    checkout_page.typePostalcode(postalcode)
})

When("clicks the Continue button", () => {
    checkout_page.clickContinue()
})

Then("the Checkout page should be displayed", () => {
    checkout_page.validatePage()
})