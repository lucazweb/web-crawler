import React from 'react'
import { render } from '@testing-library/react'
import { SearchPage } from './search-page'
import '@testing-library/jest-dom/extend-expect'

const makeSut = () => {
  return render(<SearchPage />)
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
