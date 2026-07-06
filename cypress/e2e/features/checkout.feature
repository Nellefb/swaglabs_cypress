Feature: Checkout Information
    As a customer
    I want to provide my personal information
    So that I can proceed with my purchase

    Background: User is ready to checkout
        Given the user is logged in
        And the product "Sauce Labs Backpack" has been added to the cart
        And navigates to the cart page
        And clicks on Checkout button

    Scenario: Checkout information is submitted successfully
        When the user fills firstname "Nala", lastname "Frutildis" and postal code "12345678"
        And clicks the Continue button
        Then the Checkout Overview page should be displayed

    Scenario Outline: Checkout form validation error: <title>
        When the user fills firstname "<firstname>", lastname "<lastname>" and postal code "<postalcode>"
        And clicks the Continue button
        Then the error message "<errorMessage>" should be displayed

        Examples:
            | firstname | lastname  | postalcode | title                       | errorMessage                   |
            |           |           |            | All fields are empty        | Error: First Name is required  |
            | Nala      |           |            | Only first name is provided | Error: Last Name is required   |
            | Nala      | Frutildis |            | First and last name only    | Error: Postal Code is required |
    
    Scenario: Cancel Checkout
        When the user clicks the Cancel button on Checkout Page
        Then the Cart page should be displayed