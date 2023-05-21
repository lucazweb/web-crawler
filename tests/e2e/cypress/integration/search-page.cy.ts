describe('Search page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render page correctly', () => {
    cy.getByTestId('app-logo').should('have.text', 'WebCrawler')
    cy.getByTestId('search-input-component').should(
      'have.attr',
      'placeholder',
      'Digite a palavra-chave'
    )
    cy.getByTestId('search-button')
      .should('have.text', 'Buscar')
      .should('have.attr', 'disabled')
    cy.getByTestId('topbar')
    cy.getByTestId('history-link').should('have.text', 'Histórico de buscas')
  })

  it('should allow click on input value and store search', () => {
    cy.intercept(`${Cypress.env('apiBaseUrl')}/crawl`).as('keywordSearch')
    cy.intercept(`${Cypress.env('apiBaseUrl')}/crawl/*`).as('keywordStatus')

    cy.getByTestId('search-input-component').type('keyword')
    cy.getByTestId('search-button').should('not.have.attr', 'disabled')
    cy.getByTestId('search-button').click()

    cy.getByTestId('button-loader')
    cy.wait('@keywordSearch')
    cy.url().should('eq', 'http://localhost:8080/historico')
    cy.wait('@keywordStatus')
    cy.getByTestId('list-item')
  })
})
