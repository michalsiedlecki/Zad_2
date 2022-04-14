var urlContactUs = 'https://automationteststore.com/'
var addToCart = '.productcart .fa'
var apparelAndAccessories =  '.categorymenu li a'
var apparelAndAccessoriesCategory = '.thumbnails a'

export class CategoryMenuPage{
    navigate(){
        cy.visit(urlContactUs)
    }

    clickCategoryMenu(category){
        cy.get(apparelAndAccessories).contains(category).click()   
    }

    clickSubCategory(subCategory){
        cy.get(apparelAndAccessoriesCategory).contains(subCategory).click()
    }

    clickAddToCart(){
        cy.get(addToCart).eq(0).click()
    }
}

export const categoryMenuPage = new CategoryMenuPage()