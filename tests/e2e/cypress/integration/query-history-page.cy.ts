/* eslint-disable @typescript-eslint/restrict-template-expressions */
describe('Query history page - No previously registered searchs case', () => {
  beforeEach(() => {
    cy.visit('/historico')
  })

  it('should render page correctly', () => {
    cy.getByTestId('app-logo').should(
      'have.text',
      'WebCrawler Histórico de buscas'
    )
    cy.getByTestId('topbar')
    cy.getByTestId('search-page-link').should('have.text', 'Nova busca')
    cy.getByTestId('refresh-button').should('not.exist')
    cy.getByTestId('back-button').should('have.text', 'Voltar')
    cy.getByTestId('query-list-component')
    cy.getByTestId('query-list-placeholder')
    cy.getByTestId('redirect-search-button').should(
      'have.text',
      'Realizar nova busca'
    )
  })

  it('should redirect to search page if no results and button click', () => {
    cy.getByTestId('query-list-placeholder')
    cy.getByTestId('redirect-search-button').click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })

  it('should not request query status if not saved queries', () => {
    cy.intercept(`${Cypress.env('apiBaseUrl')}/crawl/*`).as('keywordStatus')
    cy.get('@keywordStatus.all').should('have.length', 0)
  })
})

describe('Query history page e2e - Previously registered keyword searches', () => {
  beforeEach(() => {
    cy.fixture<{ list: QueryTestDetail[] }>('query-list').then(({ list }) => {
      this.list = list
      localStorage.setItem(
        Cypress.env('localStorageKey'),
        JSON.stringify([...list])
      )
      cy.visit('/historico')
    })
  })

  it('should request query status for active queries', () => {
    cy.intercept(`${Cypress.env('apiBaseUrl')}/crawl/*`).as('keywordStatus')
    cy.get('@keywordStatus.all').should(
      'have.length',
      this.list.filter((l: QueryTestDetail) => l.status === 'active').length
    )
    cy.getByTestId('list-item').should('have.length', this.list.length)
  })

  it('should render items correctly', () => {
    cy.intercept(`${Cypress.env('apiBaseUrl')}/crawl/*`).as('keywordStatus')
    cy.get('@keywordStatus.all').should(
      'have.length',
      this.list.filter((l: QueryTestDetail) => l.status === 'active').length
    )
    cy.getByTestId('list-item').then((items) => {
      expect(items[0]).to.contain.text(this.list[0].keyword)
      expect(items[1]).to.contain.text(this.list[1].keyword)
      expect(items[2]).to.contain.text(this.list[2].keyword)
    })
  })

  it('should redirect to keyword detail page on item click', () => {
    cy.intercept(`${Cypress.env('apiBaseUrl')}/crawl/*`).as('keywordStatus')
    cy.get('@keywordStatus.all').should(
      'have.length',
      this.list.filter((l: QueryTestDetail) => l.status === 'active').length
    )
    cy.contains(this.list[0].keyword).click()
    cy.url().should(
      'eq',
      `${Cypress.config().baseUrl}/query-detail/${this.list[0].id}`
    )
  })
})

type QueryTestDetail = {
  id: string
  status: 'active' | 'fone'
  keyword: string
}
