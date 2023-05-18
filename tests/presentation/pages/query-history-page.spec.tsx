import React from 'react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { QueryHistory } from '@/presentation/pages'
import '@testing-library/jest-dom/extend-expect'
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
