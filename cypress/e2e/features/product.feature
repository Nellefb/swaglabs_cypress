Feature: Product Catalog
    As a customer
    I want to browse the available products
    So that I can select items to purchase

    Background: Login
        Given the user is logged in

    Scenario: View the product list
        When the product page is loaded
        Then the user should see the list of available products
    
    Scenario: View product information
        When the product page is loaded
        Then each product should display its name, description, and price

    Scenario Outline: Validate product sorting by <type> in <direction>
        When the user sorts products by "<filter>"
        Then the products should be sorted by "<type>" in "<direction>"

        Examples:
            | type  | direction       | filter              |
            | name  | ascending       | Name (A to Z)       |
            | name  | descending      | Name (Z to A)       |
            | price | ascending       | Price (low to high) |
            | price | descending      | Price (high to low) |

    Scenario: Add a product to the cart
        When the user adds the product "Sauce Labs Backpack" to the cart
        Then the cart badge should display "1"

    Scenario: View product details
        When the user clicks on the product "Sauce Labs Onesie"
        Then the product details page should be displayed