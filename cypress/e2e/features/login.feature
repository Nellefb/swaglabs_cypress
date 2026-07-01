Feature: Login
    As a customer
    I want to log in to the application
    So that I can place an order

    Background: Access Login screen
        Given I am on the login page

    @valid
    Scenario Outline: Successful login with valid credentials
        When I fill username "<username>" and password "<password>"
        And I click on Login button
        Then the Product page should be displayed
    
        Examples:
            | username                | password       |
            | standard_user           | secret_sauce   |
            | problem_user            | secret_sauce   | 
            | performance_glitch_user | secret_sauce   |
            | error_user              | secret_sauce   | 
            | visual_user             | secret_sauce   |

    @invalid
    Scenario Outline: Login with invalid credentials: <title>
        When I fill username "<username>" and password "<password>"
        And I click on Login button
        Then I see the error message: "<errorMessage>"
    
        Examples:
            | username        | password     | title                               | errorMessage                                                                     |
            |                 |              | Login without username and password | Epic sadface: Username is required                                        |
            | standard_user   |              | Login with username only            | Epic sadface: Password is required                                        |
            |                 | secret_sauce | Login with password only            | Epic sadface: Username is required                                        |
            | locked_out_user | secret_sauce | Login with locked user              | Epic sadface: Sorry, this user has been locked out.                       |
            | user            | pass         | Login with invalid credentials      | Epic sadface: Username and password do not match any user in this service |

        