import { type QueryDetail } from '@/domain/models'

export interface SaveKeywordSearch {
  save: (params: SaveKeyword.Params) => Promise<SaveKeyword.Response>
}

export namespace SaveKeyword {
  export type Params = {
    keyword: string
  }
  export type Response = Partial<QueryDetail>
}
