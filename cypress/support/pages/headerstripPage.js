var searchEngine = '#filter_keyword'
var searchLogo = '.fa-search'

export class HeaderstripPage{
    typeTextIntoSearchEngine(text){
        cy.get(searchEngine).type(text)
    }

    clickSearchLogo(){
        cy.get(searchLogo).click()
    }
}

export const headerstripPage = new HeaderstripPage()