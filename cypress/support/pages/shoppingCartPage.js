var checkoutButton = '#cart_checkout1'
export class ShoppingCartPage{
    clickCheckoutButton(){
        cy.get(checkoutButton).click()
    }
}

export const shoppingCartPage = new ShoppingCartPage()