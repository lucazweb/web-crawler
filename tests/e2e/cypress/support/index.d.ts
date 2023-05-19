declare namespace Cypress {
  interface Chainable {
    /**
     * Custom commanda to select DOM element by data-testid attribute
     */
    getByTestId: (id: string) => Chainable<Element>
  }
}
