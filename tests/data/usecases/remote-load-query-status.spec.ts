import { RemoteLoadQueryStatus } from '@/data'
import { HttpClientSpy } from '@/tests/data/mocks'
import { HttpStatusCode } from '@/data/protocols'
import { NotFoundError } from '@/domain/errors'
import { faker } from '@faker-js/faker'
import { LoadQuery } from '@/domain'

type SutTypes = {
  sut: RemoteLoadQueryStatus
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteLoadQueryStatus(url, httpClientSpy)
  return {
    httpClientSpy,
    sut,
  }
}

const makeRemoteLoadQueryResponse = (): LoadQuery.Response => ({
  id: faker.database.mongodbObjectId(),
  status: 'active',
  urls: [faker.internet.url()],
})

describe('RemoteLoadQueryStatus tests', () => {
  test('shoud call httpClient correctlly', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
    }
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
  })

  test('should return NotFoundError if httpClient returns 404', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)

    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('should return EmptyResponseError if httpClient returns 404', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)

    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('should return response on httpClient 200', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: makeRemoteLoadQueryResponse(),
    }
    const promise = sut.load()
    await expect(promise).resolves.toEqual(httpClientSpy.response.body)
  })
})
