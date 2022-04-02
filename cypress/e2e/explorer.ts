/// <reference path="../support/index.d.ts" />

describe('Explore Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should can use search', () => {
    const searchOne = 'some'
    const searchTwo = 'bla'

    const firstEntity = 'characters'
    const secondEntity = 'vehicles'
    const thirdEntity = 'films'

    cy.intercept('GET', `**/api/data?entity=${firstEntity}&search=${searchOne}`, { fixture: 'explorer-mock-1' }).as('request')
    cy.intercept('GET', `**/api/data?entity=${secondEntity}&search=${searchOne}`, { fixture: 'explorer-mock-2' }).as('request-2')

    cy.intercept('GET', `**/api/data?entity=${thirdEntity}&search=${searchOne}`, { fixture: 'explorer-mock-3' }).as('request-3')
    cy.intercept('GET', `**/api/data?entity=${thirdEntity}&search=${searchTwo}`, { fixture: 'explorer-mock-no-result' }).as('request-4')

    cy.findByPlaceholderText(/ex: luke/i).type(searchOne)

    cy.wait('@request')

    cy.getByDataCy('card list').children().should('have.length', 10)

    {
      const selectInput = cy.findByLabelText(/open drop down select/i).click()
      const dropdownSelect = selectInput.next().next()

      dropdownSelect.children().should('have.length', 6)
    }

    {
      const selectInput = cy.findByLabelText(/open drop down select/i).click().type(secondEntity)
      const dropdownSelect = selectInput.next().next()

      dropdownSelect.children().should('have.length', 1).first().click()
    }

    cy.wait('@request-2')
    cy.getByDataCy('card list').children().should('have.length', 8)

    {
      const selectInput = cy.findByLabelText(/open drop down select/i).click()
      const dropdownSelect = selectInput.next().next()

      dropdownSelect.within(() => {
        cy.findByText(thirdEntity).click()
      })
    }

    cy.wait('@request-3')
    cy.getByDataCy('card list').children().should('have.length', 6)

    cy.findByPlaceholderText(/ex: luke/i).clear().type(searchTwo)

    cy.wait('@request-4')

    cy.getByDataCy('card list').should('not.exist')
    cy.findByText(/no results/i).should('exist')
  });
});
