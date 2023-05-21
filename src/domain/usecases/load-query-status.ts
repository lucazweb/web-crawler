import { QueryDetail } from '../models'

export interface LoadQueryStatus {
  load: () => Promise<LoadQuery.Response>
}

export namespace LoadQuery {
  export type Response = QueryDetail
}
