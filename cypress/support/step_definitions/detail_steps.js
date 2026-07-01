import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import detail_page from "../pages/detail_page"

Then("the product details page should be displayed", () => {
    detail_page.validatePage();
})