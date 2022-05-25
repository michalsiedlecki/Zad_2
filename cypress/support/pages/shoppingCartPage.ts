var checkoutButton = '#cart_checkout1'
var quantity = '.table-striped .align_center [type=text]'
var update = '#cart_update'

export class ShoppingCartPage{
    clickCheckoutButton(): void{
        cy.get(checkoutButton).click()
    }
    
    typeProductQuantity(number: string): void{
        cy.get(quantity).clear().type(number)
    }

    updateShoppingCart(): void{
        cy.get(update).click()
    }
}

export const shoppingCartPage = new ShoppingCartPage()