var productTotalCost = '.headerdetails .block_7 .cart_total'
var numberOfProducts = '.headerdetails .block_7 .label-orange'
var searchEngine = '#filter_keyword'
var searchLogo = '.fa-search'

export class HeaderstripPage{
    typeTextIntoSearchEngine(text){
        cy.get(searchEngine).type(text)
    }

    checkNumberOfProducts(number){
        cy.get(numberOfProducts).should('contain', number)
    }

    checkProductTotalCost(number){
        cy.get(productTotalCost).should('contain', number)
    }

    clickSearchLogo(){
        cy.get(searchLogo).click()
    }
}

export const headerstripPage = new HeaderstripPage()