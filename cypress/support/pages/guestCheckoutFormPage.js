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

    typeFirstName(text){
        cy.get(firstName).clear().type(text).should('have.value', text)
    }

    checkFirstNameMessageError(visible, messageText){
        if(visible == true){
            cy.get(firstName).parents('.form-group').find('.help-block').should('contain', messageText)
        }else {
            cy.get(firstName).parents('.form-group.has-error').should('not.exist')
        }
    }

    typeLastName(text){
        cy.get(lastName).type(text)
    }

    typeEmail(text){
        cy.get(email).clear().type(text).should('have.value', text)
    }

    checkEmailMessageError(visible, messageText){
        if(visible == true){
            cy.get(email).parents('.form-group').find('.help-block').should('contain', messageText)
        }else {
            cy.get(email).parents('.form-group.has-error').should('not.exist')
        }
    }

    typeAddress_1(text){
        cy.get(address_1).type(text)
    }

    typeCity(text){
        cy.get(city).type(text)
    }

    selectCountry(text){
        cy.get(country).select(text)
    }

    selectZone(text){
        cy.get(zone).select(text)
    }

    checkZoneMessageError(visible, messageText){
        if(visible == true){
            cy.get(zone).parents('.form-group').find('.help-block').should('contain', messageText)
        }else {
            cy.get(zone).parents('.form-group.has-error').should('not.exist')
        }
    }

    typePostode(text){
        cy.get(postcode).type(text)
    }

    clickContinueButton(){
        cy.get(continueButton).click()
    }

}

export const guestCheckoutFormPage = new GuestCheckoutFormPage()