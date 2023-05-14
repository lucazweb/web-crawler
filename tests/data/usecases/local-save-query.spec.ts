import { GetLocalQueryList, LocalSaveQuery } from '@/data'
import { mockLocalStorage } from '../mocks/mock-localStorage'
import { faker } from '@faker-js/faker'
import { QueryDetail } from '@/domain'

mockLocalStorage()

type SutTypes = {
  sut: LocalSaveQuery
}

const makeSut = (): SutTypes => {
  const getLocalQueryList = new GetLocalQueryList()
  return {
    sut: new LocalSaveQuery(getLocalQueryList),
  }
}

const mockParams = (): { key: string; value: QueryDetail } => ({
  key: faker.database.column(),
  value: {
    id: faker.database.mongodbObjectId(),
    status: 'done',
    urls: [faker.internet.url()],
  },
})

describe('GetLocalQueryList tests', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('should allow save data with correct values', () => {
    const { key, value } = mockParams()
    const { sut } = makeSut()
    sut.set(key, value)

    const data = localStorage.getItem(key)
    expect(data).toBeTruthy()
    expect(JSON.parse(data)).toEqual([value])
  })

  test('should update existent data', () => {
    const list: QueryDetail[] = [
      {
        id: faker.database.mongodbObjectId(),
        status: 'active',
        urls: [],
      },
      {
        id: faker.database.mongodbObjectId(),
        status: 'done',
        urls: [faker.internet.url(), faker.internet.url()],
      },
    ]
    const { key } = mockParams()
    localStorage.setItem(key, JSON.stringify(list))

    const item = { ...list[0] }
    item.status = 'done'
    item.urls = [faker.internet.url(), faker.internet.url()]

    const { sut } = makeSut()
    sut.set(key, item)

    const data = localStorage.getItem(key)
    const updatedItem = JSON.parse(data).find(
      (query: QueryDetail) => query.id === item.id
    )
    expect(list[0]).not.toEqual(updatedItem)
  })
})
