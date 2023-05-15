import { QueryDetail, UpdateQueryList } from '@/domain'
import { HttpClientArrayResolver } from '@/data/protocols'

export class RemoteUpdateQueryList implements UpdateQueryList {
  constructor(
    private readonly httpClientArrayResolver: HttpClientArrayResolver<
      Partial<QueryDetail>
    >
  ) {}

  async updateAll(
    list: Array<Partial<QueryDetail>>
  ): Promise<Array<Partial<QueryDetail>>> {
    try {
      return await this.httpClientArrayResolver.all(list)
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
