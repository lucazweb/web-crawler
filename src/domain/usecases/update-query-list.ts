import { QueryDetail } from '@/domain'

export interface UpdateQueryList {
  updateAll: (
    list: Array<Partial<QueryDetail>>
  ) => Promise<Array<Partial<QueryDetail>>>
}
