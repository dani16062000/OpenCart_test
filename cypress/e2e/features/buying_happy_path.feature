@e2e_buying @smoke @regression
Feature: Buying iMac
    user wants to buy the product imac
    
    Scenario: A user wants to buy an iMac
        Given the user is in the mac category page
        When the user clicks in add to cart button of the imac
        And the user clicks in the shopping cart button
        And the user click on the Checkout button
        And the user click on the radio button Guest Checkout
        And the user click in the continue button
        And the user type First Name "Daniel"
        And the user type Last Name "Paciocco"
        And the user type Email "example@example.com"
        And the user type Telephone "611152222"
        And the user type Address 1 "Valencia"
        And the user type City "Valencia"
        And the user type Post Code "46006"
        And the user select Country "Spain"
        And the user select Region "Valencia"
        And the user click in the Step 2 continue button
        And the user click in the Step 4 continue button
        And the user click in the radio button cash on delivery
        And the user click in the checkbox terms and condition
        And the user click in the Step 5 continue button
        And the user click in the confirm order button
        Then validate the message message "Your order has been successfully processed!"
