import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import product_page from "../pages/product_page"

Given("the product {string} has been added to the cart", (product) => {
    product_page.addProductToCart(product)
})

Given("navigates to the cart page", () => {
    product_page.openShoppingCart()
})

When("the product page is loaded", () => {
    product_page.validatePage()
})

When("the user sorts products by {string}", (filter) => {
    product_page.selectProductFilter(filter)
})

When("the user adds the product {string} to the cart", (product) => {
    product_page.addProductToCart(product)
})

When("the user clicks on the product {string}", (product) => {
    product_page.productDetail(product)
})

When("the user opens the shopping cart", () => {
    product_page.openShoppingCart()
})

Then("the cart badge should display {string}", (numberCart) => {
    product_page.checkCartBadge(numberCart)
})

Then("the user should see the list of available products", () => {
    product_page.viewProductList()
})

Then("each product should display its name, description, and price", () => {
    product_page.verifyProductListInformation()
})

Then("the products should be sorted by {string} in {string}", (type, direction) => {
    product_page.checkFilter(type, direction)
})

Then("the Product page should be displayed", () => {
    product_page.validatePage()
})

