var accountGuestRadioButton = '#accountFrm_accountguest'
var continueButton = 'button'

export class AccountLoginPage{
    checkAccountGuestRadioButton(){
        cy.get(accountGuestRadioButton).check()
    }
    clickContinueButton(){
        cy.get(continueButton).contains('Continue').click()
    }
}

export const accountLoginPage = new AccountLoginPage()
