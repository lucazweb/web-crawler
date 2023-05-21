import axios from 'axios'
import { faker } from '@faker-js/faker'

export const mockAxios = () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockClear().mockResolvedValue({
    data: {
      keyword: faker.random.word(),
    },
    status: faker.internet.httpStatusCode,
  })
  return mockedAxios
}
