import React from 'react'
import { act } from 'react-dom/test-utils'
import { render } from '@/tests/utils/test-utils'
import { QueryHistory } from '@/presentation/pages'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

const makeSut = async () => {
  return await act(() => render(<QueryHistory />))
}

describe('QueryHistory tests', () => {
  test('should render search page correctly', async () => {
    const { getByTestId, queryByTestId } = await makeSut()
    expect(getByTestId('app-logo')).toBeTruthy()
    expect(queryByTestId('refresh-button')).toBeFalsy()
    expect(getByTestId('search-page-link')).toBeTruthy()
    expect(getByTestId('search-page-link')).toHaveTextContent('Nova busca')
  })
})
