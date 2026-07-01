Feature: Checkout Information
    As a customer
    I want to provide my personal information
    So that I can proceed with my purchase

    Background: User is ready to checkout
        Given the user is logged in
        And the product "Sauce Labs Backpack" has been added to the cart
        And navigates to the cart page
        And clicks on Checkout

    Scenario: Checkout information is submitted successfully
        When the user fill firstname "Nala", lastname "Frutildis" and postal code "12345678"
        And clicks the Continue button
        Then the Checkout Overview page should be displayed