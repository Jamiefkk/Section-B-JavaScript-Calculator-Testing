describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should return 5 on clicking 5', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })

  it('should return 4+1=5', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

    it('should return 5x4+1=21', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21')
  })

  it('should return 4-6+2+222x4=888', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '88888')
  })

  it('should return 1/10=0.1', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.1')
  })

  it('should return error when dividing by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', "You can't divide by zero")
})
})