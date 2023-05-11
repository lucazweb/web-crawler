import React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'

const makeSut = () => {
  return render(<App />)
}

describe('App render test', () => {
  test('should render component correctly', () => {
    const { getAllByTestId } = makeSut()
    expect(getAllByTestId('app-title')).toBeTruthy()
  })
})
