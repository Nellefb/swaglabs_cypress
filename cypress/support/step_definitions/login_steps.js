import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import login_page from "../pages/login_page"
import product_page from "../pages/product_page"

const user = 'standard_user'
const pass = 'secret_sauce'

Given("I am on the login page", () => {
    login_page.accessLoginPage()
})

Given("the user is logged in", () => {
    login_page.accessLoginPage()
    login_page.typeUsername(user)
    login_page.typePassword(pass)
    login_page.clickLoginButton()
    product_page.validatePage()
})

When("I fill username {string} and password {string}", (username, password) => {
    if (username){
        login_page.typeUsername(username);
    }
    if (password){
        login_page.typePassword(password);
    }
})

When("I click on Login button", () => {
    login_page.clickLoginButton();
})

Then("I see the error message: {string}", (errorMessage) => {
    login_page.checkErrorMessage(errorMessage);
})