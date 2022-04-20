var checkoutButton = '#cart_checkout1'
var quantity = '.table-striped .align_center [type=text]'
var update = '#cart_update'

export class ShoppingCartPage{
    clickCheckoutButton(){
        cy.get(checkoutButton).click()
    }
    
    typeProductQuantity(number){
        cy.get(quantity).clear().type(number)
    }

    updateShoppingCart(){
        cy.get(update).click()
    }
}

export const shoppingCartPage = new ShoppingCartPage()