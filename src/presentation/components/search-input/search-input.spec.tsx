import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { SearchInput, SearchInputProps } from './search-input'
import { faker } from '@faker-js/faker'

const makeSut = (props: SearchInputProps = {}) => {
  return render(<SearchInput {...props} />)
}

describe('SearchInput tests', () => {
  test('should render component correctlly', () => {
    const { getByTestId } = makeSut()
    expect(getByTestId('search-input-component')).toBeTruthy()
  })

  test('should call onChange on user type', () => {
    const props = {
      onChange: jest.fn(),
    }

    const { getByTestId } = makeSut(props)
    fireEvent.change(getByTestId('search-input-component'), {
      target: { value: faker.random.word() },
    })

    expect(props.onChange).toBeCalled()
  })
})
