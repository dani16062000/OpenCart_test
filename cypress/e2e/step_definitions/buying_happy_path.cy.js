import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import shoppingCart from "../../pages/shoppingCart";
const HomePage = require("../../pages/home")
const ShoppingCartPage = require("../../pages/shoppingCart")
const MacCategoryPage = require("../../pages/mac")
const CheckoutPage = require("../../pages/checkout")
const OrderCompletePage = require("../../pages/orderComplete")
Given('the user is in the mac category page', ()=> {
    cy.visit('/')
    HomePage.openMacCategoryPage()
})
When('the user clicks in add to cart button of the imac', ()=> {
    MacCategoryPage.addIMacToCart()
    MacCategoryPage.getMessage().should('be.visible')
    
})
When('the user clicks in the shopping cart button', ()=> {
    HomePage.openShoppingCartPage()
})
When('the user click on the Checkout button', ()=> {
    shoppingCart.clickCheckoutButton()
})
When('the user click on the radio button Guest Checkout', ()=> {
    CheckoutPage.checkCheckotRb();
})
When('the user click in the continue button', ()=> {
    CheckoutPage.clickContinueButton1()
})
When('the user type First Name {string}', (name)=> {
    CheckoutPage.inputName(name)
})
When('the user type Last Name {string}', (lastname)=> {
    CheckoutPage.inputLastName(lastname)
})
When('the user type Email {string}', (email)=> {
    CheckoutPage.inputEmail(email)
})
When('the user type Telephone {string}', (tel)=> {
    CheckoutPage.inputTelephone(tel)
})
When('the user type Address 1 {string}', (addr)=> {
    CheckoutPage.inputAddress(addr)
})
When('the user type City {string}', (city)=> {
    CheckoutPage.inputCity(city)
})
When('the user type Post Code {string}', (postcode)=> {
    CheckoutPage.inputPc(postcode)
})
When('the user select Country {string}', (country)=> {
    CheckoutPage.selectCountry(country)
})
When('the user select Region {string}', (region)=> {
    CheckoutPage.selectRegion(region)
})
When('the user click in the Step 2 continue button', ()=> {
    CheckoutPage.clickContinueButton2()
})
When('the user click in the Step 4 continue button', ()=> {
    CheckoutPage.clickContinueButton4()
})
When('the user click in the radio button cash on delivery', ()=> {
    CheckoutPage.checkCodRb()
})
When('the user click in the checkbox terms and condition', ()=> {
    CheckoutPage.agreeTerms()
})
When('the user click in the Step 5 continue button', ()=> {
    CheckoutPage.clickContinueButton5()
})
When('the user click in the confirm order button', ()=> {
    CheckoutPage.clickConfirmButton()
})
When('validate the message message {string}', (message)=> {
    OrderCompletePage.getMessage().should('have.text',message)
})

