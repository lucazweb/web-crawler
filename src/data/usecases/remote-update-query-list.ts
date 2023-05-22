import { QueryDetail, UpdateQueryList } from '@/domain'
import { HttpClientArrayResolver } from '@/data/protocols'
import { RemoteLoadQueryStatus } from './remote-load-query-status'

export class RemoteUpdateQueryList implements UpdateQueryList {
  constructor(
    private readonly remoteLoadQueryStatusFact: (
      id: string
    ) => RemoteLoadQueryStatus,
    private readonly httpClientArrayResolver: HttpClientArrayResolver<
      Promise<QueryDetail>,
      Partial<QueryDetail>
    >
  ) {}

  async updateAll(
    list: Array<Partial<QueryDetail>>
  ): Promise<Array<Partial<QueryDetail>>> {
    try {
      const ids = list
        .filter((q) => q.status !== 'done')
        .map(async (q) => await this.remoteLoadQueryStatusFact(q.id).load())
      return await this.httpClientArrayResolver.all(ids)
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
