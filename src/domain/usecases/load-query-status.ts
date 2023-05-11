import { QueryDetail } from '../models'

export interface LoadQueryStatus {
  load: (params: LoadQuery.Params) => Promise<LoadQuery.Response>
}

export namespace LoadQuery {
  export type Params = {
    url: string
  }
  export type Response = QueryDetail
}
