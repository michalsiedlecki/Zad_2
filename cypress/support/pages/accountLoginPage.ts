var accountGuestRadioButton = '#accountFrm_accountguest'
var continueButton = 'button'

export class AccountLoginPage{
    checkAccountGuestRadioButton(): void{
        cy.get(accountGuestRadioButton).check()
    }
    clickContinueButton(): void{
        cy.get(continueButton).contains('Continue').click()
    }
}

export const accountLoginPage = new AccountLoginPage()
