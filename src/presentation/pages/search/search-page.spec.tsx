import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { SearchPage } from './search-page'
import '@testing-library/jest-dom/extend-expect'

const makeSut = () => {
  return render(
    <BrowserRouter>
      <SearchPage />
    </BrowserRouter>
  )
}

describe('SearchPage tests', () => {
  test('should render search page correctly', () => {
    const { getByTestId } = makeSut()
    const searchInput = getByTestId('search-input-component')

    expect(getByTestId('page-title')).toBeTruthy()
    expect(searchInput).toBeTruthy()
    expect(searchInput).toHaveAttribute('placeholder', 'Digite a palavra-chave')
    expect(getByTestId('search-button')).toBeTruthy()
    expect(getByTestId('history-link')).toBeTruthy()
    expect(getByTestId('history-link')).toHaveTextContent('Histórico de buscas')
  })
})
