import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import checkout_page from "../pages/checkout_page"

const fName = "Nala"
const lName = "Frutildis"
const pCode = "123456"

Given("fills the checkout form with valid information", () => {
    checkout_page.typeFirstname(fName)
    checkout_page.typeLastname(lName)
    checkout_page.typePostalcode(pCode)
}) 

When("the user fills firstname {string}, lastname {string} and postal code {string}", (firstname, lastname, postalcode) => {
    if (firstname){
         checkout_page.typeFirstname(firstname)
    }
    if (lastname){
         checkout_page.typeLastname(lastname)
    }
    if (postalcode){
        checkout_page.typePostalcode(postalcode)
    }
})

When("clicks the Continue button", () => {
    checkout_page.clickContinue()
})

When("the user clicks the Cancel button on Checkout Page", () => {
    checkout_page.cancelCheckout()
})

Then("the Checkout page should be displayed", () => {
    checkout_page.validatePage()
})

Then("the error message {string} should be displayed", (errorMessage) => {
    checkout_page.checkErrorMessage(errorMessage)
})