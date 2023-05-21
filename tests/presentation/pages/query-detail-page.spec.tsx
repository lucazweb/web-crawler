import React from 'react'
import { act } from 'react-dom/test-utils'
import { QuerySearchDetail } from '@/presentation/pages'
import { render } from '@/tests/utils'
import { HttpClientSpy } from '@/tests/data/mocks'
import { HttpStatusCode } from '@/data/protocols'
import '@testing-library/jest-dom/extend-expect'

const makeSut = async () => {
  return await act(() => render(<QuerySearchDetail />))
}

describe('QueryHistory tests', () => {
  test('should render search page correctly', async () => {
    const { getByTestId } = await makeSut()
    const httpClient = new HttpClientSpy()
    httpClient.response = {
      statusCode: HttpStatusCode.ok,
      body: {},
    }
    expect(getByTestId('keyword')).toBeTruthy()
    expect(getByTestId('query-status-dot')).toBeTruthy()
    expect(getByTestId('query-id')).toBeTruthy()
    expect(getByTestId('results-count')).toBeTruthy()
  })
})
