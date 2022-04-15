/// <reference types="cypress" />

import  { accountLoginPage } from "../support/pages/accountLoginPage.js"
import  { categoryMenuPage } from "../support/pages/categoryMenuPage.js"
import  { guestCheckoutFormPage } from "../support/pages/guestCheckoutFormPage.js"
import  { headerstripPage } from "../support/pages/headerstripPage.js"
import  { productPage } from "../support/pages/productPage.js"
import  { shoppingCartPage } from "../support/pages/shoppingCartPage.js"

describe('Tests for guest checkout form', function(){
  
    beforeEach(function() {
      categoryMenuPage.navigate()
      cy.fixture('headerstrip').then( function(testdata){
        this.headerstripTestdata = testdata
        headerstripPage.typeTextIntoSearchEngine(this.headerstripTestdata.makeup.lips[0])
        headerstripPage.clickSearchLogo()
        productPage.clickAddToCart()
    })
    shoppingCartPage.clickCheckoutButton()
    accountLoginPage.checkAccountGuestRadioButton()
    accountLoginPage.clickContinueButton()
    })
    
    it('Check field first name validation', function() {
        cy.fixture('guestCheckoutForm').then( function(testdata){
            this.guestCheckoutFormTestdata = testdata
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkFirstNameMessageError(true, this.guestCheckoutFormTestdata.errorMessages.boundaryValues3_32)
            guestCheckoutFormPage.typeFirstName(this.guestCheckoutFormTestdata.boundaryValues.two)
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkFirstNameMessageError(true, this.guestCheckoutFormTestdata.errorMessages.boundaryValues3_32)
            guestCheckoutFormPage.typeFirstName(this.guestCheckoutFormTestdata.boundaryValues.thirtyThree)
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkFirstNameMessageError(true, this.guestCheckoutFormTestdata.errorMessages.boundaryValues3_32)
            guestCheckoutFormPage.typeFirstName(this.guestCheckoutFormTestdata.boundaryValues.three)
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkFirstNameMessageError(false, null)
        })
    })

    it('Check field email validation', function() {
        cy.fixture('guestCheckoutForm').then( function(testdata){
            this.guestCheckoutFormTestdata = testdata
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkEmailMessageError(true, this.guestCheckoutFormTestdata.errorMessages.invalidEmail)
            guestCheckoutFormPage.typeEmail(this.guestCheckoutFormTestdata.invalidEmail)
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkEmailMessageError(true, this.guestCheckoutFormTestdata.errorMessages.invalidEmail)
            guestCheckoutFormPage.typeEmail(this.guestCheckoutFormTestdata.email)
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkEmailMessageError(false, null)
        })
    })

    it('Check field Region/State validation', function() {
        cy.fixture('guestCheckoutForm').then( function(testdata){
            this.guestCheckoutFormTestdata = testdata
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkZoneMessageError(true, this.guestCheckoutFormTestdata.errorMessages.invalidRegion)
            guestCheckoutFormPage.selectCountry(this.guestCheckoutFormTestdata.country)
            guestCheckoutFormPage.selectZone(this.guestCheckoutFormTestdata.zone)
            guestCheckoutFormPage.clickContinueButton()
            guestCheckoutFormPage.checkZoneMessageError(false, null)
        })
    })
})