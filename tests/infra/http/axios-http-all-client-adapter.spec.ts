import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpAllClientAdapter } from '@/infra/http/axios-http--all-client-adapter'
import { mockAxios } from '@/tests/infra/mocks'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpAllClientAdapter
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const mockedAxios = mockAxios()
  return {
    sut: new AxiosHttpAllClientAdapter(),
    mockedAxios,
  }
}

test('should return expected response of all method', async () => {
  const { sut, mockedAxios } = makeSut()
  const arr = [
    { id: faker.database.mongodbObjectId(), status: 'active' },
    { id: faker.database.mongodbObjectId(), status: 'active' },
  ]

  const result = arr.map((a) => ({
    ...a,
    urls: [faker.internet.url()],
  }))

  mockedAxios.all.mockResolvedValue(result)

  const promise = sut.all(arr)
  await expect(promise).resolves.toEqual(result)
})
