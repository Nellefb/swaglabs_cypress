Feature: Shopping Cart
    As a customer
    I want to review the items in my shopping cart
    So that I can manage my selected products before checkout

    Background: User is authenticated and has a product in the cart
        Given the user is logged in
        And the product "Sauce Labs Backpack" has been added to the cart

    Scenario: View products in the shopping cart
        When the user opens the shopping cart
        Then the product "Sauce Labs Backpack" should be displayed

    Scenario: Remove a product from the shopping cart
        When the user opens the shopping cart
        And removes the product "Sauce Labs Backpack"
        Then the shopping cart should not contain the product "Sauce Labs Backpack"

    Scenario: Continue shopping
        When the user opens the shopping cart
        And clicks the Continue Shopping button
        Then the Product page should be displayed

    Scenario: Proceed to checkout
        When the user opens the shopping cart
        And clicks the Checkout button
        Then the Checkout page should be displayed