import LoginPage from './helpers.js'
import * as loginFunction from './helpers.js'
let header = Cypress.env('headerText')



describe ('Task 1' , () => {
const login = new LoginPage()


//     it('Log in with valid credentials', () => {
//         loginFunction.loginWithValidCredentials()
//     })

//     it('Log in with invalid credentials', () => {
//         loginFunction.loginWithInvalidCredentials()
//         // Assert the error message
//         cy.get('.error-message-container.error').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
//     })

//     it('Order a product', () => {
//         loginFunction.loginWithValidCredentials()
//          // Add product to the cart
//          cy.get('#add-to-cart-sauce-labs-backpack').click()
//          // Assert that the product is added the cart
//          cy.get('.shopping_cart_badge').should('contain', '1')
//          // Open the detailview of the product
//          cy.get('#item_0_img_link').click()
//          // Add product to the cart
//          cy.get('#add-to-cart-sauce-labs-bike-light').click()
//          // Assert that the product is added the cart
//          cy.get('.shopping_cart_badge').should('contain', '2')
//          loginFunction.finishTheProcess()
//     })

//     it('Order a product with removing a product from the cart', () => {
//         loginFunction.loginWithValidCredentials()
//          // Add product to the cart
//          cy.get('#add-to-cart-sauce-labs-backpack').click()
//          // Assert that the product is added the cart
//          cy.get('.shopping_cart_badge').should('contain', '1')
//          // Open the detailview of the product
//          cy.get('#item_0_img_link').click()
//          // Add product to the cart
//          cy.get('#add-to-cart-sauce-labs-bike-light').click()
//          // Assert that the product is added the cart
//          cy.get('.shopping_cart_badge').should('contain', '2')
//         // Open the cart
//         cy.get('#shopping_cart_container').click()
//         // Remove the product from the cart
//         cy.get('#remove-sauce-labs-bike-light').click()
//         // Assert that the product is removed
//         // Assert that the product is added the cart
//         cy.get('.shopping_cart_badge').should('contain', '1')
//         // Click on the Continue shopping button
//         cy.get('#continue-shopping').click()
//         loginFunction.finishTheProcess()
//     })

//     it('Locked out user', () => {
//         loginFunction.lockedOutUser()
//         // Assert the error message
//         cy.get('.error-message-container.error').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
//     })

//     it('Problem user, removing product from the cart', () => {
//         loginFunction.problemUser()
//         // Add product to the cart
//         cy.get('#add-to-cart-sauce-labs-backpack').click()
//         // Remove the product from the cart
//         cy.get('#remove-sauce-labs-backpack').click()
//         // Check that the cart is empty
//         cy.get('.shopping_cart_badge').should('not.exist')
//    })

//     it('Problem user, ordering the product', () => {
//         loginFunction.problemUser()
//         // Add product to the cart
//         cy.get('#add-to-cart-sauce-labs-backpack').click()
//         // Assert that the product is added the cart
//         cy.get('.shopping_cart_badge').should('contain', '1')
//         loginFunction.finishTheProcess()
//     })

    // it('Error user, sorting', () => {
    //     loginFunction.error_user()
    //     cy.intercept('POST', 'https://submit.backtrace.io/UNIVERSE/TOKEN/json').as('submitRequest')
    //     // Change the sorting
    //     cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
    //     // Assert the response
    //     cy.wait('@submitRequest').then(interception => {
    //     expect(interception.request.method).to.equal('POST')
    //     expect(interception.response.statusCode).to.equal(200)
    // })

    // it('Error user, providing credentials', () => {
    //     loginFunction.error_user()
    //     cy.intercept('POST', 'https://submit.backtrace.io/UNIVERSE/TOKEN/json').as('submitRequest')
    //     //Add product to the cart
    //     cy.get('#add-to-cart-sauce-labs-backpack').click()
    //     // Open the cart
    //     cy.get('#shopping_cart_container').click()
    //     // Proceed to checkout
    //     cy.get('#checkout').click()
    //     // Check the Cancel button and check the URL
    //     cy.get('#cancel).click()
    //     cy.url()should('eq', 'https://www.saucedemo.com/cart.html')
    //     //Proceed to checkout again
    //     cy.get('#checkout').click()
    //     // Provide the first name
    //     cy.get('#first-name').type('Joe')
    //     // Check the first name
    //     cy.get('#first-name').should('have.value', 'Joe')
    //     // Provide the last name
    //     cy.get('#last-name').type('Doe')
    //     // Check the last name
    //     cy.get('#last-name').should('have.value', 'Doe')
    //     // Provide the postal code
    //     cy.get('#postal-code').type('123')
    //     // Check the postal code
    //     cy.get('#postal-code').should('have.value', '123')
    // })

    // it('Check if the header is displayed on every page', () => {
    //     loginFunction.loginWithValidCredentials()
    //     // Assert the header text
    //     cy.contains(header).should('exist')
    //     // Add product and go to cart
    //     cy.get('#add-to-cart-sauce-labs-backpack').click()
    //     cy.get('#shopping_cart_container').click()
    //     // Assert the header text and proceed
    //     cy.contains(header).should('exist')
    //     cy.get('#checkout').click()
    //     // Assert the header text, provide credentials and proceed
    //     cy.contains(header).should('exist')
    //     cy.get('#first-name').type('John')
    //     cy.get('#last-name').type('Doe')
    //     cy.get('#postal-code').type('123')
    //     cy.get('#continue').click()
    //     // Assert the header text, finish the process
    //     cy.contains(header).should('exist')
    //     cy.get('#finish').click()
    //     // Assert the header text, return back to the home page and check the header again
    //     cy.contains(header).should('exist')
    //     cy.get('#back-to-products').click()
    //     cy.contains(header).should('exist')
    // })

})

