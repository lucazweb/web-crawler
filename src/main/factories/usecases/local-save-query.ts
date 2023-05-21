import { LocalSaveQuery } from '@/data'
import { getLocalQueryList } from './get-local-query-lists'

export const localSaveQuery = () => {
  const getLocalList = getLocalQueryList()
  return new LocalSaveQuery(getLocalList)
}
