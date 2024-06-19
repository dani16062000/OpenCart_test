class OrderCompletePage{

    elements =  {
        succesMessage: () => cy.get('#content > p:nth-child(2)')
    }

    getMessage(){
        return this.elements.succesMessage()
    }
}
module.exports = new OrderCompletePage();