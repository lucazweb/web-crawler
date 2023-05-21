import { faker } from '@faker-js/faker'
import { HttpRequest } from '@/data/protocols/http/http-client'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.internet.httpMethod(),
  body: {
    keyword: faker.random.word(),
  },
  headers: {},
})
