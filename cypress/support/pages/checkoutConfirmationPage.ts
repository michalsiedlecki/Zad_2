var confirmOrderButton = '#checkout_btn'
var products = '.table.confirm_products tr'
var loadingPayment = '#payment .alert-info .fa-refresh'
var message = '.maintext'

export class CheckoutConfirmationPage{
    checkNumberOfItems(number: number){
        cy.get(products).should('have.length', number)
    }

    clickConfirmOrderButton(){
        cy.get(confirmOrderButton).click()
        cy.get(loadingPayment).should('not.exist')
    }
    
    checkMessageAboutOrder(text: string){
        cy.get(message, {timeout: 7000}).contains(text)
    }
}

export const checkoutConfirmationPage = new CheckoutConfirmationPage()