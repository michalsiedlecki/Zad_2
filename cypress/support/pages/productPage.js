var addToCart = '.cart'
var selectSize = '#option352'
export class ProductPage{
    checkRadioButtonSize(size){
        cy.get(size).check()
    }
    
    clickAddToCart(){
        cy.get(addToCart).click()
    }

    selectSize(size){
        cy.get(selectSize).select(size)
    }

}

export const productPage = new ProductPage()