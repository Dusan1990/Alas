import LoginPage from './helpers.js'
import * as loginFunction from './helpers.js'
let header = Cypress.env('headerText')

describe ('Testing Swag Labs web store app' , () => {
const login = new LoginPage()

    it('Log in with valid credentials', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        // Assert that you are on the Home page
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Log in with invalid credentials', () => {
        //Provide invalid credentials
        loginFunction.loginWithInvalidCredentials()
        // Assert the error message
        cy.get('.error-message-container.error').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Create an order', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        // Assert that the product is added to the cart
        cy.get('.shopping_cart_badge').should('contain', '1')
        // Open the detailview of the product
        cy.get('#item_0_img_link').click()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        // Assert that the product is added to the cart
        cy.get('.shopping_cart_badge').should('contain', '2')
        // Open the cart and finish the ordering process
        loginFunction.finishTheProcess()
    })

    it('Create an order, check removing a product from the cart', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        // Assert that the product is added to the cart
        cy.get('.shopping_cart_badge').should('contain', '1')
        // Open the detailview of the product
        cy.get('#item_0_img_link').click()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        // Assert that the product is added to the cart
        cy.get('.shopping_cart_badge').should('contain', '2')
        // Open the cart
        cy.get('#shopping_cart_container').click()
        // Remove the product from the cart
        cy.get('#remove-sauce-labs-bike-light').click()
        // Assert that the product is removed
        // Assert that the product is added to the cart
        cy.get('.shopping_cart_badge').should('contain', '1')
        // Click on the Continue shopping button
        cy.get('#continue-shopping').click()
        // Open the cart and finish the ordering process
        loginFunction.finishTheProcess()
    })

    it('Assert the inventory', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        // Open the cart
        cy.get('#shopping_cart_container').click()
        // Check the first product
        cy.get('.inventory_item_name').eq(0).should('have.text', 'Sauce Labs Backpack')
        // Check the quantity
        cy.get('.cart_quantity').eq(0).should('have.text', '1')
        // Check the second product
        cy.get('.inventory_item_name').eq(1).should('have.text', 'Sauce Labs Bike Light')
        // Check the quantity
        cy.get('.cart_quantity').eq(1).should('have.text', '1')
    })

    it('Assert the product description', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        cy.get('.inventory_item_desc').eq(0)
            .should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    })

    it('Locked out user', () => {
        // Provide a Locked user credentials
        loginFunction.lockedOutUser()
        // Assert the error message
        cy.get('.error-message-container.error').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Problem user, removing product from the cart', () => {
        // Provide a Problem user credentials
        loginFunction.problemUser()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        // Remove the product from the cart
        cy.get('#remove-sauce-labs-backpack').click()
        // Check that the cart is empty
        cy.get('.shopping_cart_badge').should('not.exist')
   })

    it('Problem user, ordering the product', () => {
        // Provide a Problem user credentials
        loginFunction.problemUser()
        // Add product to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        // Assert that the product is added the cart
        cy.get('.shopping_cart_badge').should('contain', '1')
        loginFunction.finishTheProcess()
    })

    it('Problem user, check the img', () => {
        // Provide a Problem user credentials
        loginFunction.problemUser()
        // Assert that the backpack picture should exist
        cy.get('img[src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"]').should('exist')
    })

    it('Error user, sorting', () => {
        // Provide an Error user credentials
        loginFunction.error_user()
        cy.intercept('POST', 'https://submit.backtrace.io/UNIVERSE/TOKEN/json').as('submitRequest')
        // Change the sorting
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        // Assert the response
        cy.wait('@submitRequest').then(interception => {
        // Assert that the request is successful
        expect(interception.request.method).to.equal('POST')
        expect(interception.response.statusCode).to.equal(200)
        })
    })

    it('Error user, providing credentials', () => {
        // Provide an Error user credentials
        loginFunction.error_user()
        cy.intercept('POST', 'https://submit.backtrace.io/UNIVERSE/TOKEN/json').as('submitRequest')
        //Add product to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        // Open the cart
        cy.get('#shopping_cart_container').click()
        // Proceed to checkout
        cy.get('#checkout').click()
        // Check the Cancel button and check the URL
        cy.get('#cancel').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        //Proceed to checkout again
        cy.get('#checkout').click()
        // Provide the first name
        cy.get('#first-name').type('Joe')
        // Check if the first name is as it was provided
        cy.get('#first-name').should('have.value', 'Joe')
        // Provide the last name
        // Check if the last name is as it was provided
        cy.get('#last-name').type('Doe')
        // Check the last name
        cy.get('#last-name').should('have.value', 'Doe')
        // Check if the postal code is as it was provided
        cy.get('#postal-code').type('123')
        // Check the postal code
        cy.get('#postal-code').should('have.value', '123')
    })

    it('Check if the header is displayed on every page', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        // Assert the header text
        cy.contains(header).should('exist')
        // Add product and go to cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        // Assert the header text and proceed
        cy.contains(header).should('exist')
        cy.get('#checkout').click()
        // Assert the header text, provide credentials and proceed
        cy.contains(header).should('exist')
        // Provide first name, last name and the postal code
        cy.get('#first-name').type('John')
        cy.get('#last-name').type('Doe')
        cy.get('#postal-code').type('123')
        cy.get('#continue').click()
        // Assert the header text, finish the process
        cy.contains(header).should('exist')
        cy.get('#finish').click()
        // Assert the header text, return back to the home page and check the header again
        cy.contains(header).should('exist')
        cy.get('#back-to-products').click()
        cy.contains(header).should('exist')
        // Open the hamburger menu
         cy.get('#react-burger-menu-btn').click()
        // Logout and check the header on the login page
        cy.get('#logout_sidebar_link').click()
        cy.contains(header).should('exist')

    })

    it('Check the hamburger menu', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        // Assert that you are on the Home page
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        // Add a product to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        // Assert that the product is added to the cart
        cy.get('.shopping_cart_badge').should('contain', '1')
        // Open the hamburger menu
        cy.get('#react-burger-menu-btn').click()
        // Reset the cart (Should the reset app state also reset the filter)
        cy.get('#reset_sidebar_link').click()
        // Assert that the product is removed from the cart
        cy.get('.shopping_cart_badge').should('not.exist')
        // // Check the About section -> I will skip it since there is a problem with loading a page
        // cy.get('#about_sidebar_link').click()
        // // Assert the new url
        // cy.url().should('eq', 'https://saucelabs.com/')
        // // Return to the previos page
        // cy.go('back')
        // // Open the hamburger menu
        // cy.get('#react-burger-menu-btn').click()
        // Check the All items section -> I will skip it since it doesn't do anything
        // Logout
        cy.get('#logout_sidebar_link').click()
        // Assert the new url
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('Check the filter', () => {
        // Provide a valid credentials
        loginFunction.loginWithValidCredentials()
        // Assert that you are on the Home page
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        // Change the filter sorting from low to high
        cy.get('.product_sort_container').select('Price (low to high)')
        // Get the first item
        cy.get('.inventory_item').eq(0).find('.inventory_item_price').should('have.text', '$7.99')
        // Change the filter sorting from high to low
        cy.get('.product_sort_container').select('Price (high to low)')
        // Get the first item
        cy.get('.inventory_item').eq(0).find('.inventory_item_price').should('have.text', '$49.99')
        // Change the filter sorting from A to Z
        cy.get('.product_sort_container').select('Name (A to Z)')
        // Get the first item
        cy.get('.inventory_item').eq(0).find('.inventory_item_name ').should('have.text', 'Sauce Labs Backpack')
        // Change the filter sorting from Z to A
        cy.get('.product_sort_container').select('Name (Z to A)')
        // Get the first item
        cy.get('.inventory_item').eq(0).find('.inventory_item_name ').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })

})
