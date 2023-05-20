describe('Query Detail page', () => {
  beforeEach(() => {
    cy.fixture<{ list: QueryTestDetail[] }>('query-detail').then(({ list }) => {
      this.list = list
      localStorage.setItem(
        Cypress.env('localStorageKey'),
        JSON.stringify([...list])
      )
      cy.visit(`/query-detail/${list[0].id}`)
    })
  })

  it('should render page correctly', () => {
    cy.getByTestId('topbar')
    cy.getByTestId('history-link').should('have.text', 'Histórico de buscas')
    cy.getByTestId('back-button')
    cy.getByTestId('keyword').should('have.text', this.list[0].keyword)
    cy.getByTestId('results-count')
    cy.getByTestId('urls-list')
  })

  it('should display query detail data correctly', () => {
    cy.intercept(`${Cypress.env('apiBaseUrl')}/crawl/${this.list[0].id}`, {
      body: this.list[0],
    }).as('keywordStatus')

    cy.wait('@keywordStatus')

    cy.getByTestId('keyword').should('have.text', this.list[0].keyword)
    cy.getByTestId('query-status-dot').should('have.text', 'Concluída')
    cy.getByTestId('results-count')
    cy.getByTestId('urls-list')
      .find('li')
      .should('have.length', this.list[0].urls.length)
  })
})
