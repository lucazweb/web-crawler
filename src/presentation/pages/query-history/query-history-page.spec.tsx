import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryHistory } from './query-history-page'
import '@testing-library/jest-dom/extend-expect'
import { act } from 'react-dom/test-utils'
import { ReduxProvider } from '@/infra/redux'

const makeSut = async () => {
  return await act(() =>
    render(
      <ReduxProvider>
        <BrowserRouter>
          <QueryHistory />
        </BrowserRouter>
      </ReduxProvider>
    )
  )
}

describe('QueryHistory tests', () => {
  test('should render search page correctly', async () => {
    const { getByTestId } = await makeSut()

    expect(getByTestId('page-title')).toBeTruthy()
    expect(getByTestId('refresh-button')).toBeTruthy()
    expect(getByTestId('search-page-link')).toBeTruthy()
    expect(getByTestId('search-page-link')).toHaveTextContent('Nova busca')
  })
})