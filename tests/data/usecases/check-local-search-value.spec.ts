import { GetLocalQueryList, CheckLocalSearchValue } from '@/data/usecases'
import { mockLocalStorage } from '@/tests/data/mocks'
import { faker } from '@faker-js/faker'

mockLocalStorage()

const localStorageKey = 'test-local-key'

const makeSut = () => {
  const getQueryList = new GetLocalQueryList()
  return new CheckLocalSearchValue(localStorageKey, getQueryList)
}

const makeListMock = (keyword: string) => [
  {
    id: faker.database.mongodbObjectId(),
    keyword,
    status: 'active',
    urls: [],
  },
]

describe('CheckStoredKeyword tests', () => {
  beforeEach(() => {})

  afterEach(() => {
    window.localStorage.clear()
  })

  test('should return true to existent stored search ', () => {
    const keyword = faker.random.word()
    localStorage.setItem(localStorageKey, JSON.stringify(makeListMock(keyword)))

    const sut = makeSut()
    const result = sut.check('keyword', keyword)
    expect(result).toEqual(true)
  })
  test('should return false if dont find stored keyword ', () => {
    const keyword = faker.random.word()
    localStorage.setItem(localStorageKey, JSON.stringify(makeListMock(keyword)))

    const sut = makeSut()
    const result = sut.check('keyword', faker.random.word())
    expect(result).toEqual(false)
  })
})
