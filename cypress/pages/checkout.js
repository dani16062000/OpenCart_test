class CheckoutPage{

    elements =  {
        guestCheckoutRb: () => cy.get('input[value="guest"]'),
        codRB: () => cy.get('input[value="cod"]'),
        continueButton1: () =>  cy.get('#button-account'),
        continueButton2: () => cy.get('#button-guest'),
        continueButton4: () => cy.get('#button-shipping-method'),
        continueButton5: () => cy.get('#button-payment-method'),
        inputName: () => cy.get('input[name="firstname"]'),
        inputLastname: () => cy.get('input[name="lastname"]'),
        inputEmail: () => cy.get('#input-payment-email'),
        inputTlf: () => cy.get('input[name="telephone"]'),
        inputAddress: () => cy.get('input[name="address_1"]'),
        inputCity: () => cy.get('input[name="city"]'),
        inputPostCode: () => cy.get('input[name="postcode"]'),
        selectCountry: () => cy.get('#input-payment-country'),
        selectRegion: () => cy.get('#input-payment-zone'),
        checkBoxTerms: () => cy.get('input[name="agree"]'),
        confirmOrderButton: () => cy.get('#button-confirm')

    }

    checkCheckotRb(){
        this.elements.guestCheckoutRb().should('be.visible')
        this.elements.guestCheckoutRb().check()
    }

    checkCodRb(){
        this.elements.codRB().should('be.visible')
        this.elements.codRB().check()
    }

    clickContinueButton1(){
        this.elements.continueButton1().click()
    }

    clickContinueButton2(){
        this.elements.continueButton2().click()
    }

    clickContinueButton4(){
        this.elements.continueButton4().click()
    }

    clickContinueButton5(){
        this.elements.continueButton5().click()
    }

    inputName(name){
        this.elements.inputName().type(name,{delay:0})
    }

    inputLastName(lastname){
        this.elements.inputLastname().type(lastname,{delay:0})
    }

    inputEmail(email){
        this.elements.inputEmail().type(email,{delay:0})
    }

    inputTelephone(telephone){
        this.elements.inputTlf().type(telephone,{delay:0})
    }

    inputAddress(address){
        this.elements.inputAddress().type(address,{delay:0})
    }

    inputCity(city){
        this.elements.inputCity().type(city,{delay:0})
    }

    inputPc(Pc){
        this.elements.inputPostCode().type(Pc,{delay:0})
    }

    selectCountry(country){
        this.elements.selectCountry().select(country)
    }

    selectRegion(regioin){
        this.elements.selectRegion().select(regioin)
    }

    agreeTerms(){
        this.elements.checkBoxTerms().check()
    }

    clickConfirmButton(){
        this.elements.confirmOrderButton().click()
    }

}
module.exports = new CheckoutPage();