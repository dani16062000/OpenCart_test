class MacCategoryPage{

    elements =  {
        addMac: ()=> cy.get('button[onclick="cart.add(\'41\', \'1\');"]'),
        messageAddToCart: ()=> cy.get('.alert')
    }

    addIMacToCart(){
        this.elements.addMac().click()
    }
    getMessage(){
        return this.elements.messageAddToCart()
    }
}
module.exports = new MacCategoryPage();