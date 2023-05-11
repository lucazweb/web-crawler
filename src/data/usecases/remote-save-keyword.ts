import { SaveKeyword, SaveKeywordSearch } from '@/domain'
import { HttpStatusCode, type HttpClient } from '../protocols'
import { BadRequestError } from '@/domain/errors'

export class RemoteSaveKeywordSearch implements SaveKeywordSearch {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<SaveKeyword.Response>
  ) {}

  async save(params: SaveKeyword.Params): Promise<SaveKeyword.Response> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: params,
    })

    const response = httpResponse.body

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return response

      default:
        throw new BadRequestError()
    }
  }
}
