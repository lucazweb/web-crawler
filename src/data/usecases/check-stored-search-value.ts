import { GetLocalQueryList } from '@/data/usecases'
import { QueryDetail } from '@/domain'
import { CheckStoredValue } from '../protocols/cache/check-storage-key'

export class CheckLocalSearchValue implements CheckStoredValue {
  constructor(
    private readonly localStorageKey: string,
    private readonly getQueryList: GetLocalQueryList
  ) {}

  check(prop: string, value: string): boolean {
    const localData: QueryDetail[] = this.getQueryList.get(this.localStorageKey)
    return !!localData.find((item) => item[prop] === value)
  }
}
