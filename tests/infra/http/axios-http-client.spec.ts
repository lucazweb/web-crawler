import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { HttpRequest } from '@/data'
import { mockAxios } from '@/tests/infra/mocks'
import { mockHttpRequest } from '@/tests/data/mocks/mock-http-request'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const mockedAxios = mockAxios()
  return {
    sut: new AxiosHttpClient(),
    mockedAxios,
  }
}

describe('AxiosHttpClient tests', () => {
  test('should call axios with correct params', async () => {
    const requestParams: HttpRequest = {
      url: faker.internet.url(),
      method: 'get',
      headers: {},
    }
    const { sut, mockedAxios } = makeSut()
    await sut.request(requestParams)
    expect(mockedAxios.request).toHaveBeenCalled()
    expect(mockedAxios.request).toHaveBeenCalledTimes(1)
    expect(mockedAxios.request).toHaveBeenCalledWith(requestParams)
  })

  test('should return error on axios rejects', async () => {
    const { sut, mockedAxios } = makeSut()

    const requestParams = mockHttpRequest()

    mockedAxios.request.mockRejectedValueOnce({
      resolve: {
        status: 404,
        body: {
          id: faker.database.mongodbObjectId(),
        },
      },
    })

    const promise = sut.request(requestParams)

    await expect(promise).rejects.toEqual(
      // eslint-disable-next-line quotes
      new TypeError("Cannot read properties of undefined (reading 'status')")
    )
  })

  test('should return expected response format', async () => {
    const { sut, mockedAxios } = makeSut()

    const requestParams = mockHttpRequest()

    const response = {
      status: 200,
      data: {
        id: faker.database.mongodbObjectId(),
      },
    }

    mockedAxios.request.mockResolvedValueOnce(response)

    const promise = sut.request(requestParams)
    await expect(promise).resolves.toEqual({
      body: response.data,
      statusCode: response.status,
    })
  })
})
