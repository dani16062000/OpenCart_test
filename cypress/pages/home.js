class HomePage{

    elements =  {
        addIphone: ()=> cy.get('button[onclick="cart.add(\'40\');"]'),
        messageAddToCart: ()=> cy.get('.alert'),
        cartInfo: ()=> cy.get('#cart-total'),
        categoryPhone: ()=> cy.contains('a', 'Phones & PDAs'),
        categoryTablets: ()=> cy.contains('a', 'Tablets'),
        ProductIphone: ()=> cy.contains('a', 'iPhone'),
        cartInterface: ()=> cy.get('.btn-inverse'),
        shoppingCart: ()=> cy.contains('a', 'Shopping Cart'),
        categoryMac: ()=> cy.contains('ul.list-unstyled > li > a', 'Mac'),
        desktopButton: ()=> cy.contains('a', 'Desktops')
    }

    getMessage(){
        return this.elements.messageAddToCart()
    }

    addIphoneToCart(){
        this.elements.addIphone().click()
    }

    getCartInfo(){
        return this.elements.cartInfo()
    }

    openPhoneCategory(){
        this.elements.categoryPhone().click()
    }

    openTabletCategory(){
        this.elements.categoryTablets().click()
    }

    openProductIphonePage(){
        this.elements.ProductIphone().click()
    }

    getCartInterface(){
        return this.elements.cartInterface()
    }

    openShoppingCartPage(){
        this.elements.shoppingCart().click()
    }

    openMacCategoryPage(){
        this.elements.desktopButton().click()
        this.elements.categoryMac().should('be.visible')
        this.elements.categoryMac().click()
    }

}
module.exports = new HomePage();