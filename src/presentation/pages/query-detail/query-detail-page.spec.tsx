import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import { QuerySearchDetail } from './query-detail-page'
import '@testing-library/jest-dom/extend-expect'
import { ReduxProvider } from '@/infra/redux'

const makeSut = async () => {
  return await act(() =>
    render(
      <ReduxProvider>
        <BrowserRouter>
          <QuerySearchDetail />
        </BrowserRouter>
      </ReduxProvider>
    )
  )
}

describe('QueryHistory tests', () => {
  test('should render search page correctly', async () => {
    const { getByTestId } = await makeSut()
    expect(getByTestId('keyword')).toBeTruthy()
    expect(getByTestId('query-status-dot')).toBeTruthy()
    expect(getByTestId('query-id')).toBeTruthy()
    expect(getByTestId('results-count')).toBeTruthy()
  })
})
