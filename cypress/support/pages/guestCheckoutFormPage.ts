var firstName = '#guestFrm_firstname'
var lastName = '#guestFrm_lastname'
var email = '#guestFrm_email'
var address_1 = '#guestFrm_address_1'
var city = '#guestFrm_city'
var country = '#guestFrm_country_id'
var zone = '#guestFrm_zone_id'
var postcode = '#guestFrm_postcode'
var continueButton = '.btn.btn-orange.pull-right.lock-on-click'

export class GuestCheckoutFormPage{

    typeFirstName(text: string){
        cy.get(firstName).clear().type(text).should('have.value', text)
    }

    checkFirstNameMessageError(visible: boolean, messageText: string){
        if(visible == true){
            cy.get(firstName).parents('.form-group').find('.help-block').should('contain', messageText)
        }else {
            cy.get(firstName).parents('.form-group.has-error').should('not.exist')
        }
    }

    typeLastName(text: string){
        cy.get(lastName).type(text)
    }

    typeEmail(text: string){
        cy.get(email).clear().type(text).should('have.value', text)
    }

    checkEmailMessageError(visible: boolean, messageText: string){
        if(visible == true){
            cy.get(email).parents('.form-group').find('.help-block').should('contain', messageText)
        }else {
            cy.get(email).parents('.form-group.has-error').should('not.exist')
        }
    }

    typeAddress_1(text: string){
        cy.get(address_1).type(text)
    }

    typeCity(text: string){
        cy.get(city).type(text)
    }

    selectCountry(text: string){
        cy.get(country).select(text)
    }

    selectZone(text: string){
        cy.get(zone).select(text)
    }

    checkZoneMessageError(visible: boolean, messageText: string){
        if(visible == true){
            cy.get(zone).parents('.form-group').find('.help-block').should('contain', messageText)
        }else {
            cy.get(zone).parents('.form-group.has-error').should('not.exist')
        }
    }

    typePostode(text: string){
        cy.get(postcode).type(text)
    }

    clickContinueButton(){
        cy.get(continueButton).click()
    }

}

export const guestCheckoutFormPage = new GuestCheckoutFormPage()