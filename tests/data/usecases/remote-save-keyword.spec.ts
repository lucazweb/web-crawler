import { SaveKeyword } from '@/domain'

import { RemoteSaveKeywordSearch, HttpStatusCode } from '@/data'
import { BadRequestError } from '@/domain/errors'
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: RemoteSaveKeywordSearch
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteSaveKeywordSearch(url, httpClientSpy)
  return {
    httpClientSpy,
    sut,
  }
}

const makeRemoteSaveKeywordResponse = (): SaveKeyword.Response => {
  return {
    id: faker.database.mongodbObjectId(),
  }
}

const makeRequestParams = (): SaveKeyword.Params => ({
  keyword: faker.random.word(),
})

describe('RemoteSaveKeywordSearch tests', () => {
  test('should call HttpClient correctlly', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: makeRemoteSaveKeywordResponse(),
    }

    const params = makeRequestParams()

    await sut.save(params)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(params)
  })

  test('should return bad request error if HttpClient returns 500', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }

    const params = makeRequestParams()
    const promise = sut.save(params)

    await expect(promise).rejects.toThrow(new BadRequestError())
  })

  test('should return correct response if HttpClient returns 200', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    const response = makeRemoteSaveKeywordResponse()

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: response,
    }

    const params = makeRequestParams()
    const promise = sut.save(params)

    await expect(promise).resolves.toEqual(response)
  })
})
