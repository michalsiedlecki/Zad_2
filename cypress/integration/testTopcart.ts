/// <reference types="cypress" />
import  { categoryMenuPage } from "../support/pages/categoryMenuPage"
import  { headerstripPage } from "../support/pages/headerstripPage"
import  { productPage } from "../support/pages/productPage"
import  { shoppingCartPage } from "../support/pages/shoppingCartPage"

describe('E2E tests', function(){
  
  beforeEach(function() {
    categoryMenuPage.navigate()
  })

  it('Check if number of products and costs works properly', function() {
    cy.fixture('headerstrip').then( function(testdata){
        this.headerstripTestdata = testdata
        headerstripPage.typeTextIntoSearchEngine(this.headerstripTestdata.makeup.lips[0])
        headerstripPage.clickSearchLogo()
        productPage.clickAddToCart()
    })
    headerstripPage.checkNumberOfProducts(1)
    headerstripPage.checkProductTotalCost('$5.00')
    shoppingCartPage.typeProductQuantity('3')
    shoppingCartPage.updateShoppingCart()
    headerstripPage.checkNumberOfProducts(3)
    headerstripPage.checkProductTotalCost('$15.00')
  })


})