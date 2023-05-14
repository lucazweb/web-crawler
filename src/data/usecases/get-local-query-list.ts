import { GetStorage } from '@/data/protocols/cache/get-storage'

export class GetLocalQueryList implements GetStorage {
  get<QueryDetail>(key: string): QueryDetail[] {
    const queryList: string = localStorage.getItem(key) || JSON.stringify([])
    return JSON.parse(queryList)
  }
}
