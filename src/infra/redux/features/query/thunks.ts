import { createAsyncThunk } from '@reduxjs/toolkit'
import { QueryDetail } from '@/domain'
import {
  getLocalQueryList,
  localSaveQuery,
  remoteKeyworkSearch,
  remoteLoadQueryStatus,
  remoteUpdateQueryList,
} from '@/main/factories'
import { QueryState, setIsLoading } from './slice'
import { handleListUpdate } from '@/presentation/pages'

export const keyworkSearchRequest = createAsyncThunk<
  Partial<QueryDetail>,
  string
>('query/keyworkSearchRequest', async (keyword: string, { dispatch }) => {
  dispatch(setIsLoading(true))
  const result = await remoteKeyworkSearch(keyword)
  if (result) {
    console.log(result, process.env.LOCAL_STORAGE_KEY)
    localSaveQuery().set(process.env.LOCAL_STORAGE_KEY, {
      ...result,
      keyword,
    })
    return result
  }
})

export const fetchQueryStatus = createAsyncThunk<Partial<QueryDetail>, string>(
  'query/fetchQueryStatus',
  async (id: string, { dispatch }) => {
    dispatch(setIsLoading(true))
    const response = await remoteLoadQueryStatus(id).load()
    if (response) {
      const localList = getLocalQueryList().get<QueryDetail>(
        process.env.LOCAL_STORAGE_KEY
      )
      const { keyword } = localList.find((q) => q.id === response.id)
      return { ...response, keyword }
    }
  }
)

export const fetchQueryList = createAsyncThunk<
  Array<Partial<QueryDetail>>,
  Array<Partial<QueryDetail>>
>('query/fetchQueryList', async (list: Array<Partial<QueryDetail>>) => {
  try {
    if (list.length > 0) {
      const data = await remoteUpdateQueryList(list)
      if (data) return handleListUpdate(list, data)
    }
    return list
  } catch (err) {
    console.log(err)
  }
})

export const selectQueryList = (state: QueryState) => state.list
