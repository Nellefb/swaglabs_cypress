Feature: Checkout Overview
    As a customer
    I want to review my order details before completing the purchase
    So that I can confirm the information is correct before finishing the checkout

    Background: User is ready to review the order
        Given the user is logged in
        And the product "Sauce Labs Backpack" has been added to the cart
        And navigates to the cart page
        And clicks on Checkout button
        And fills the checkout form with valid information
        And clicks the Continue button
    
    Scenario: Complete checkout successfully
        When the checkout overview displays the order details
        And the user clicks the Finish button
        Then the Checkout Complete page should be displayed

    Scenario: Cancel the purchase
        When the user clicks the Cancel button
        Then the Product page should be displayed