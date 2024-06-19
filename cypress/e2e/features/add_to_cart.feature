@add_to_cart @regression
Feature: Add to cart
    One user wants to add products to the cart
@smoke
Scenario: Add to cart an iphone from homepage
    Given the user is on the home page
    When the user click the ADD TO CART button on the iphone
    Then a message should inform that the product "iPhone" was added succesfully to the cart
    And the amount of articles and the total price should update autamatically to "123"
@smoke
Scenario: Add to cart an iphone from phones category page
    Given the user is on the phones category page
    When the user click the ADD TO CART on the iphone button in category page
    Then a message should inform that the product "iPhone" was added succesfully to the cart
    And the amount of articles and the total price should update autamatically to "123"

Scenario: The cart info is visible from an specific category page
    Given the user is on the home page
    When the user click on the tablets option in the menu
    Then the cart info should be visible

Scenario: The cart info is visible from an specific product page
    Given the user is on the home page
    When the user click on the product iphone
    Then the cart info should be visible