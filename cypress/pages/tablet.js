class TabletCategoryPage{

    elements =  {
        addIphone: ()=> cy.get('button[onclick="cart.add(\'40\');"]'),
    }

    addIphoneToCart(){
        this.elements.addIphone().click()
    }
}
module.exports = new TabletCategoryPage();