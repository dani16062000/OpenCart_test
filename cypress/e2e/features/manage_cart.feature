@regression @manage_cart
Feature: manage shopping cart
    One user wants to manage shopping cart
    @smoke
    Scenario: A user with empty cart can go to shopping cart page from homepage
        Given the user is on the homepage
        When the user clicks in the button Shopping Cart
        Then in the shopping cart page validate the messsage "Your shopping cart is empty!"

    Scenario: A user with empty cart can go to shopping cart page from category page
        Given the user is on the tablet category page
        When the user clicks in the button Shopping Cart
        Then in the shopping cart page validate the messsage "Your shopping cart is empty!"
    
    Scenario: In the cart page the user can see a list of the products with all the information
        Given the user is on the homepage
        When the user click in the ADD TO CART button of the product iphone
        And the user clicks in the button Shopping Cart
        Then validate that the product "iPhone" is in the cart with all the information visible
    @smoke
    Scenario: In the cart page the user can remove a product from the cart
        Given the user is on the homepage
        When the user click in the ADD TO CART button of the product iphone
        And the user clicks in the button Shopping Cart
        And the user click in the remove button of the product
        Then in the shopping cart page validate the messsage "Your shopping cart is empty!"
    @smoke
    Scenario: Change product quatity from the cart page
        Given the user is on the homepage
        When the user click in the ADD TO CART button of the product iphone
        And the user clicks in the button Shopping Cart
        And the user type "3" in the product quantity
        And click in the update button 
        Then validate a message contains "Success: You have modified your shopping cart!"

    Scenario: When a user add a product out of stock to the cart there is a message that inform
        Given the user is on the homepage
        When the user click in the ADD TO CART button of the product iphone
        And the user clicks in the button Shopping Cart
        Then validate an error message contains "Products marked with *** are not available in the desired quantity or not in stock!"
        And validate the product name appear with the mark "***"

    


    

    