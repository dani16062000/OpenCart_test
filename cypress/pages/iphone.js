class IphoneProductPage{

    elements =  {
        addIphone: ()=> cy.get('button[onclick="cart.add(\'40\', \'1\');"]'),
    }

    addIphoneToCart(){
        this.elements.addIphone().click()
    }
}
module.exports = new IphoneProductPage();