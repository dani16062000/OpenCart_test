import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const HomePage = require("../../pages/home")
const TabletCategoryPage = require("../../pages/tablet")
const ShoppingCartPage = require("../../pages/shoppingCart")
Given('the user is on the homepage', ()=> {
    cy.visit('/')
})
When('the user clicks in the button Shopping Cart', ()=> {
    HomePage.openShoppingCartPage()
})
Then('in the shopping cart page validate the messsage {string}', (message)=> {
    ShoppingCartPage.getEmptyCartMessage().should('be.visible')
    ShoppingCartPage.getEmptyCartMessage().should('contain.text',message)
})

Given('the user is on the tablet category page', ()=> {
    cy.visit('/')
    HomePage.openTabletCategory()
})
When('the user click in the ADD TO CART button of the product iphone', ()=> {
    TabletCategoryPage.addIphoneToCart()
    HomePage.getCartInterface().should('be.visible')
})
Then('validate that the product {string} is in the cart with all the information visible',(product)=> {
    ShoppingCartPage.getProductName().should('have.text',product)
    ShoppingCartPage.getProductImage().should('be.visible')
    ShoppingCartPage.getProductModel().should('be.visible')
    ShoppingCartPage.getProductQuantity().should('be.visible')
    ShoppingCartPage.getProductPrice().should('be.visible')
})

When('the user click in the remove button of the product', ()=> {
    ShoppingCartPage.removeIphone()
})

When('the user type {string} in the product quantity', (number)=> {
    ShoppingCartPage.changeProductQuantity(number)
})
When('click in the update button', ()=> {
    ShoppingCartPage.clickUpdate()
})
When('validate a message contains {string}', (message)=> {
    ShoppingCartPage.getUpdateMessage().should('contain.text',message)
})

Then('validate an error message contains {string}', (message)=> {
    ShoppingCartPage.getErrorMessage().should('be.visible')
    ShoppingCartPage.getErrorMessage().should('contain.text',message)
})
Then('validate the product name appear with the mark {string}', (tag)=> {
    ShoppingCartPage.getOutofStockTag().contains(tag).should('be.visible');
})