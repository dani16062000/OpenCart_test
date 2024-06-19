class ShoppingCartPage{

    elements =  {
        messageEmptyCart: ()=> cy.get('#content > p'),
        productName: ()=> cy.contains('a', 'iPhone'),
        productImage: ()=> cy.contains('td', 'Image'),
        productModel: ()=> cy.contains('td', 'Model'),
        productQuantity: ()=> cy.contains('td', 'Quantity'),
        productPrice: ()=> cy.contains('td', 'Unit Price'),
        removeButton: ()=> cy.get('.input-group .btn-danger'),
        inputQuantity: ()=> cy.get('input.form-control[value="1"]'),
        updateButton: ()=> cy.get('button[data-original-title="Update"]'),
        messageUpdateQuantity: ()=> cy.get('.alert.alert-success'),
        errorMessage: ()=> cy.get('.alert.alert-danger'),
        outOfStockMark: () => cy.get('span.text-danger'),
        checkoutButton: () => cy.contains('a', 'Checkout')
    }

    getEmptyCartMessage(){
        return this.elements.messageEmptyCart()
    }

    getProductName(){
        return this.elements.productName()
    }

    getProductImage(){
        return this.elements.productImage()
    }

    getProductModel(){
        return this.elements.productModel()
    }

    getProductQuantity(){
        return this.elements.productQuantity()
    }

    getProductPrice(){
        return this.elements.productPrice()
    }

    removeIphone(){
        this.elements.removeButton().click()
    }

    changeProductQuantity(number){
        this.elements.inputQuantity().type(number)
    }

    clickUpdate(){
        this.elements.updateButton().click()
    }

    getUpdateMessage(){
        return this.elements.messageUpdateQuantity()
    }

    getErrorMessage(){
        return this.elements.errorMessage()
    }

    getOutofStockTag(){
        return this.elements.outOfStockMark()
    }

    clickCheckoutButton(){
        this.elements.checkoutButton().click()
    }

}
module.exports = new ShoppingCartPage();