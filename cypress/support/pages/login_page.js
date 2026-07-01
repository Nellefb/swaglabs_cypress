/// <reference types="cypress" />

const loginLogo = '.login_logo'
const usernameInput = '#user-name'
const passwordInput = '#password'
const btnLogin = '#login-button'
const errorMessageContainer = '.error-message-container'

export default{
    accessLoginPage() {
        cy.visit('/')
        cy.get(loginLogo)
            .should('be.visible')
            .should('have.text', 'Swag Labs')
    },

    typeUsername(username){
        cy.get(usernameInput)
            .type(username)
    },

    typePassword(password) {
        cy.get(passwordInput)
            .type(password)
    },

    clickLoginButton(){
        cy.get(btnLogin)
            .click()
    },

    checkErrorMessage(error){
        cy.get(errorMessageContainer)
            .should('be.visible')
            .should('have.text', error)
    }
}