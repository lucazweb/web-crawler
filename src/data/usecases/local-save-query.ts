import { QueryDetail } from '@/domain'
import { SetStorage } from '@/data/protocols/cache/set-storage'
import { GetLocalQueryList } from '@/data/usecases/get-local-query-list'

export type LocalSaveData = {
  key: string
  value: Partial<QueryDetail>
}

export class LocalSaveQuery implements SetStorage {
  constructor(private readonly getQueryList: GetLocalQueryList) {}

  set(key: string, value: Partial<QueryDetail>): void {
    const localData: QueryDetail[] = this.getQueryList.get(key)
    const freshSearch = !localData.find((query) => query.id === value.id)

    const updated = freshSearch
      ? [...localData, value]
      : [...localData.filter((q) => q.id !== value.id), value]

    localStorage.setItem(key, JSON.stringify(updated))
  }
}
