import { GetLocalQueryList } from '@/data'
import { mockLocalStorage } from '../mocks/mock-localStorage'
import { faker } from '@faker-js/faker'
import { QueryDetail } from '@/domain'

mockLocalStorage()

type SutTypes = {
  sut: GetLocalQueryList
}

const makeSut = (): SutTypes => {
  return {
    sut: new GetLocalQueryList(),
  }
}

export const makeQueryDetailList = (): QueryDetail[] => [
  {
    id: faker.database.mongodbObjectId(),
    status: 'done',
    urls: [faker.internet.url()],
  },
  {
    id: faker.database.mongodbObjectId(),
    status: 'active',
    urls: [faker.internet.url(), faker.internet.url()],
  },
]

describe('GetLocalQueryList tests', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('should get empty query list if no previous data', () => {
    const { sut } = makeSut()
    const list = sut.get('querylist')
    expect(list).toEqual([])
  })

  test('should return query list if data exists', () => {
    const key = faker.database.column()
    const mockedQueryDetailList = makeQueryDetailList()
    const { sut } = makeSut()
    localStorage.setItem(key, JSON.stringify(mockedQueryDetailList))

    const list = sut.get(key)
    expect(list).toBeTruthy()
    expect(list).toHaveLength(2)
    expect(list).toEqual(mockedQueryDetailList)
  })
})
