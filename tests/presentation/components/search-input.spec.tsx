import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { SearchInput, SearchInputProps } from '@/presentation/components'
import { ThemeProvider } from '@/presentation/styles/theme'
import { faker } from '@faker-js/faker'

const makeSut = (props: SearchInputProps = {}) => {
  return render(
    <ThemeProvider>
      <SearchInput {...props} />
    </ThemeProvider>
  )
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
