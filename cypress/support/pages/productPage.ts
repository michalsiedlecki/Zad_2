var addToCart = '.cart'
var selectSize = '#option352'
export class ProductPage{
    checkRadioButtonSize(size: string): void{
        cy.get(size).check()
    }
    
    clickAddToCart(): void{
        cy.get(addToCart).click()
    }

    selectSize(size: string): void{
        cy.get(selectSize).select(size)
    }

}

export const productPage = new ProductPage()