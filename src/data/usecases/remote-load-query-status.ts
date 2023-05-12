import { LoadQuery, LoadQueryStatus } from '@/domain'
import { HttpClient, HttpStatusCode } from '../protocols'
import { BadRequestError, NotFoundError } from '@/domain/errors'

export class RemoteLoadQueryStatus implements LoadQueryStatus {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadQuery.Response>
  ) {}

  async load() {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: this.url,
    })

    const response = httpResponse.body

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return response

      case HttpStatusCode.badRequest:
        throw new BadRequestError()

      case HttpStatusCode.notFound:
        throw new NotFoundError()

      default:
        throw new Error()
    }
  }
}
