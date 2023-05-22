import { RemoteLoadQueryStatus, RemoteUpdateQueryList } from '@/data'
import { HttpClientArrayResolverSpy, HttpClientSpy } from '@/tests/data/mocks'
import { faker } from '@faker-js/faker'
import { QueryDetail } from '@/domain'

type SutTypes = {
  sut: RemoteUpdateQueryList
  httpClientArrayResolverSpy: HttpClientArrayResolverSpy
}

const makeSut = (): SutTypes => {
  const remoteLoadQueryStatusSPYFactory = (id: string) => {
    const baseUrl = `${process.env.API_BASE_URL}/crawl/${id}`
    const httpClient = new HttpClientSpy<QueryDetail>()
    return new RemoteLoadQueryStatus(baseUrl, httpClient)
  }
  const httpClient = new HttpClientArrayResolverSpy<
    Promise<QueryDetail>,
    Partial<QueryDetail>
  >()
  const sut = new RemoteUpdateQueryList(
    remoteLoadQueryStatusSPYFactory,
    httpClient
  )
  return {
    httpClientArrayResolverSpy: httpClient,
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
    const { httpClientArrayResolverSpy, sut } = makeSut()

    const queryList = makeQueryDetailList()

    const response: Array<Partial<QueryDetail>> = queryList.map((q) => ({
      ...q,
      urls: [faker.internet.url()],
    }))

    httpClientArrayResolverSpy.response = response

    const promise = await sut.updateAll(queryList)
    expect(promise).toEqual(response)
  })
})
