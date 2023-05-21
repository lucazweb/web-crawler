import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { QueryList, QueryListProps } from '@/presentation/components'
import { faker } from '@faker-js/faker'
import { QueryDetail } from '@/domain'

const makeSut = (props: QueryListProps = { list: [] }) => {
  return render(<QueryList {...props} />)
}

const makeQueryListMock = (length: number = 3): QueryDetail[] => {
  const list = []
  for (let i = 0; i < length; i++) {
    const random = i % 2 === 0
    list.push({
      id: faker.database.mongodbObjectId(),
      status: random ? 'active' : 'done',
      urls: random ? [faker.internet.url()] : [],
    })
  }
  return list
}

describe('QueryList component tests', () => {
  test('should render component correctly', () => {
    const { getByTestId } = makeSut()
    expect(getByTestId('query-list-component')).toBeTruthy()
  })

  test('should display list items', () => {
    const length = 6
    const list = makeQueryListMock(length)
    const { queryAllByTestId } = makeSut({ list })
    expect(queryAllByTestId('list-item')).toHaveLength(length)
  })

  test('should display list items data correctly', () => {
    const length = 4
    const list = makeQueryListMock(length)
    const { queryAllByTestId } = makeSut({ list })

    expect(queryAllByTestId('list-item-keyword')).toHaveLength(length)
    expect(queryAllByTestId('list-item-id')).toHaveLength(length)
    expect(queryAllByTestId('list-item-status')).toHaveLength(length)
    expect(queryAllByTestId('list-item-result-counter')).toHaveLength(length)
  })

  test('should display no results message if status is done, and have no urls length', () => {
    const { getByTestId } = makeSut({
      list: [
        {
          id: faker.database.mongodbObjectId(),
          status: 'done',
          urls: [],
        },
      ],
    })
    expect(getByTestId('list-item-result-counter')).toHaveTextContent(
      'Sem resultados'
    )
  })

  test('should display pending results message is status is active and no urls', () => {
    const { getByTestId } = makeSut({
      list: [
        {
          id: faker.database.mongodbObjectId(),
          status: 'active',
          urls: [],
        },
      ],
    })
    expect(getByTestId('list-item-result-counter')).toHaveTextContent(
      'Ainda sem resultados'
    )
  })
  test('should display results number on active status', () => {
    const urls = [faker.internet.url(), faker.internet.url()]
    const { getByTestId } = makeSut({
      list: [
        {
          id: faker.database.mongodbObjectId(),
          status: 'active',
          urls,
        },
      ],
    })
    expect(getByTestId('list-item-result-counter')).toHaveTextContent(
      `${urls.length} resultados encontrados`
    )
  })

  test('should display results number on done status', () => {
    const urls = [faker.internet.url(), faker.internet.url()]
    const { getByTestId } = makeSut({
      list: [
        {
          id: faker.database.mongodbObjectId(),
          status: 'active',
          urls,
        },
      ],
    })
    expect(getByTestId('list-item-result-counter')).toHaveTextContent(
      `${urls.length} resultados encontrados`
    )
  })
  test('should display partial list item', () => {
    const { getByTestId } = makeSut({
      list: [
        {
          id: faker.database.mongodbObjectId(),
          status: 'active',
        },
      ],
    })
    expect(getByTestId('list-item-result-counter')).toHaveTextContent(
      'Sem resultados'
    )
  })
})
