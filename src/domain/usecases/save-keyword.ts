import { type QueryDetail } from '@/domain/models'

interface SaveKeywordSearch {
  save: (
    params: SaveKeywordSearch.Params
  ) => Promise<SaveKeywordSearch.Response>
}

export namespace SaveKeywordSearch {
  export type Params = {
    keyword: string
  }
  export type Response = Partial<QueryDetail>
}
