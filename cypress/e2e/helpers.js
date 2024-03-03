class LoginPage {
    visit() {
      cy.visit('/')
    }
  
    fillUsername(username) {
      cy.get('#user-name').type(username)
    }
  
    fillPassword(password) {
      cy.get('#password').type(password)
    }
  
    submitForm() {
      cy.get('#login-button').click()
    }
  }
  
  export default LoginPage
  const login = new LoginPage()

  export function loginWithValidCredentials() {
    cy.visit('https://www.saucedemo.com/')
    login.fillUsername('standard_user')
    login.fillPassword('secret_sauce')
    login.submitForm()
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
}

export function loginWithInvalidCredentials() {
    cy.visit('https://www.saucedemo.com/')
    login.fillUsername('test')
    login.fillPassword('test')
    login.submitForm()
}

export function lockedOutUser() {
    cy.visit('https://www.saucedemo.com/')
    login.fillUsername('locked_out_user')
    login.fillPassword('secret_sauce')
    login.submitForm()
}

export function problemUser() {
    cy.visit('https://www.saucedemo.com/')
    login.fillUsername('problem_user')
    login.fillPassword('secret_sauce')
    login.submitForm()
}

export function error_user() {
    cy.visit('https://www.saucedemo.com/')
    login.fillUsername('error_user')
    login.fillPassword('secret_sauce')
    login.submitForm()
}

export function finishTheProcess(){
    // Open the cart
    cy.get('#shopping_cart_container').click()
    // Assert that the product is present in the cart
    cy.get('.cart_item_label').should('exist')
    // Click on the checkbox button
    cy.get('#checkout').click()
    // Provide credentials
    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Doe')
    cy.get('#postal-code').type('123')
    cy.get('#continue').click()
    // Check that the summary info is visible
    cy.get('.summary_info').should('exist')
    // Click on the Finish button
    cy.get('#finish').click()
    // Check the confirmation message
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
}

