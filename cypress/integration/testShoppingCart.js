/// <reference types="cypress" />
import  { accountLoginPage } from "../support/pages/accountLoginPage.js"
import  { categoryMenuPage } from "../support/pages/categoryMenuPage.js"
import  { checkoutConfirmationPage } from "../support/pages/checkoutConfirmationPage.js"
import  { guestCheckoutFormPage } from "../support/pages/guestCheckoutFormPage.js"
import  { headerstripPage } from "../support/pages/headerstripPage.js"
import  { productPage } from "../support/pages/productPage.js"
import  { shoppingCartPage } from "../support/pages/shoppingCartPage.js"

describe('E2E tests', function(){
  
  beforeEach(function() {
    categoryMenuPage.navigate()
  })
  it('Check if it is possible to order products', function() {
      cy.fixture('categoryMenu').then( function(testdata){
          this.categoryMenuTestdata = testdata
          categoryMenuPage.clickCategoryMenu(this.categoryMenuTestdata.apparelAndAccessories.category)
          categoryMenuPage.clickSubCategory(this.categoryMenuTestdata.apparelAndAccessories.subcategory[0])
          categoryMenuPage.clickAddToCart()
        })

        cy.fixture('product').then( function(testdata){
            this.productTestdata = testdata
            productPage.checkRadioButtonSize(this.productTestdata.radioButtonSize.UK_3)
            productPage.clickAddToCart()
        })

        cy.fixture('categoryMenu').then( function(testdata){
            this.categoryMenuTestdata = testdata
            categoryMenuPage.clickCategoryMenu(this.categoryMenuTestdata.apparelAndAccessories.category)
            categoryMenuPage.clickSubCategory(this.categoryMenuTestdata.apparelAndAccessories.subcategory[1])
            categoryMenuPage.clickAddToCart()
        })

        cy.fixture('product').then( function(testdata){
            this.productTestdata = testdata
            productPage.selectSize(this.productTestdata.selectSize[0])
            productPage.clickAddToCart()
        })
        
        cy.fixture('headerstrip').then( function(testdata){
            this.headerstripTestdata = testdata
            headerstripPage.typeTextIntoSearchEngine(this.headerstripTestdata.makeup.lips[0])
            headerstripPage.clickSearchLogo()
            productPage.clickAddToCart()
        })
        shoppingCartPage.clickCheckoutButton()
        accountLoginPage.checkAccountGuestRadioButton()
        accountLoginPage.clickContinueButton()
        
        cy.fixture('guestCheckoutForm').then( function(testdata){
            this.guestCheckoutFormTestdata = testdata
            guestCheckoutFormPage.typeFirstName(this.guestCheckoutFormTestdata.firstName)
            guestCheckoutFormPage.typeLastName(this.guestCheckoutFormTestdata.lastName)
            guestCheckoutFormPage.typeEmail(this.guestCheckoutFormTestdata.email)
            guestCheckoutFormPage.typeAddress_1(this.guestCheckoutFormTestdata.address_1)
            guestCheckoutFormPage.typeCity(this.guestCheckoutFormTestdata.city)
            guestCheckoutFormPage.selectCountry(this.guestCheckoutFormTestdata.country)
            guestCheckoutFormPage.selectZone(this.guestCheckoutFormTestdata.zone)
            guestCheckoutFormPage.typePostode(this.guestCheckoutFormTestdata.postcode)
            guestCheckoutFormPage.clickContinueButton()
        })

        cy.fixture('checkoutConfirmation').then( function(testdata){
            this.checkoutConfirmationTestdata = testdata
            checkoutConfirmationPage.checkNumberOfItems(this.checkoutConfirmationTestdata.numberOfProducts)
            checkoutConfirmationPage.clickConfirmOrderButton()
            checkoutConfirmationPage.checkMessageAboutOrder(this.checkoutConfirmationTestdata.message)
        })
    })
})
 
