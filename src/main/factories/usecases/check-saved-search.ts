import { CheckLocalSearchValue, GetLocalQueryList } from '@/data'

export const checkSavedSearch = (keyword: string) => {
  const getQueryList = new GetLocalQueryList()
  const service = new CheckLocalSearchValue(
    process.env.LOCAL_STORAGE_KEY,
    getQueryList
  )

  return service.check('keyword', keyword)
}
