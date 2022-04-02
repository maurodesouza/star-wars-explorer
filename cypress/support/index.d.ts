/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get elements by data-cy
     * @example cy.getByDataCy()
    */
     getByDataCy(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>
  }
}
