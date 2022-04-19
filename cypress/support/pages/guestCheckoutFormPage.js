var firstName = '#guestFrm_firstname'
var lastName = '#guestFrm_lastname'
var email = '#guestFrm_email'
var address_1 = '#guestFrm_address_1'
var city = '#guestFrm_city'
var country = '#guestFrm_country_id'
var zone = '#guestFrm_zone_id'
var postcode = '#guestFrm_postcode'
var continueButton = '.form-group .btn-orange'




export class GuestCheckoutFormPage{

    typeFirstName(text){
        cy.get(firstName).type(text)
    }

    typeLastName(text){
        cy.get(lastName).type(text)
    }

    typeEmail(text){
        cy.get(email).type(text)
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

    typePostode(text){
        cy.get(postcode).type(text)
    }

    clickContinueButton(){
        cy.get(continueButton).click()
    }

}

export const guestCheckoutFormPage = new GuestCheckoutFormPage()