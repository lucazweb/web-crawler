import { HttpClientArrayResolver } from '@/data'

export class HttpClientArrayResolverSpy<T = any, R = any>
  implements HttpClientArrayResolver
{
  response: R[]

  all = async (data: T[]): Promise<R[]> => {
    return this.response
  }
}
