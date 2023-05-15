import { RemoteUpdateQueryList } from '@/data'
import { HttpClientArrayResolverSpy } from '@/tests/data/mocks'
import { faker } from '@faker-js/faker'
import { QueryDetail } from '@/domain'

type SutTypes = {
  sut: RemoteUpdateQueryList
  httpClientSpy: HttpClientArrayResolverSpy
}

const makeSut = (): SutTypes => {
  const httpClient = new HttpClientArrayResolverSpy<QueryDetail>()
  const sut = new RemoteUpdateQueryList(httpClient)
  return {
    httpClientSpy: httpClient,
    sut,
  }
}

const makeQueryDetailList = (): Array<Partial<QueryDetail>> => [
  {
    id: faker.database.mongodbObjectId(),
    status: 'active',
  },
  {
    id: faker.database.mongodbObjectId(),
    status: 'active',
  },
]

describe('RemoteUpdateQueryList tests', () => {
  test('shoud update querylist with correct data', async () => {
    const { httpClientSpy, sut } = makeSut()
    const queryList = makeQueryDetailList()
    const response = queryList.map((q) => ({
      ...q,
      urls: [faker.internet.url()],
    }))

    httpClientSpy.response = response
    const promise = await sut.updateAll(queryList)

    expect(promise).toEqual(response)
  })
})
