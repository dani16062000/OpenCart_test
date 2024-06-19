import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const HomePage = require("../../pages/home")
const IphoneProductPage = require("../../pages/iphone")

Given('the user is on the home page', ()=> {
    cy.visit('/')
})
When('the user click the ADD TO CART button on the iphone', ()=> {
    HomePage.addIphoneToCart();
})
Then('a message should inform that the product {string} was added succesfully to the cart', (product)=> {
    HomePage.getMessage().should('contain.text',product)
})
Then('the amount of articles and the total price should update autamatically to {string}', (price)=> {
    HomePage.getCartInfo().should('contain.text',"1")
    HomePage.getCartInfo().should('contain.text',price)
})

Given('the user is on the phones category page', ()=> {
    cy.visit('/')
    HomePage.openPhoneCategory()
})
When('the user click the ADD TO CART on the iphone button in category page', ()=> {
    IphoneProductPage.addIphoneToCart();
})

When('the user click on the tablets option in the menu', ()=> {
    cy.visit('/')
    HomePage.openTabletCategory()
})
Then('the cart info should be visible', ()=> {
    HomePage.getCartInterface().should('be.visible')
})

When('the user click on the product iphone', ()=> {
    HomePage.openProductIphonePage()
})

