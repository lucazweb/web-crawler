import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QueryDetail } from '@/domain'
import {
  fetchQueryList,
  fetchQueryStatus,
  keyworkSearchRequest,
} from './thunks'

export interface QueryState {
  list: Array<Partial<QueryDetail>>
  isLoading: boolean
  selected?: Partial<QueryDetail>
}

const initialState: QueryState = {
  list: [],
  isLoading: false,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoading: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(keyworkSearchRequest.fulfilled, (state) => {
      return { ...state, isLoading: false }
    })
    builder.addCase(fetchQueryList.fulfilled, (state, action) => {
      return { ...state, list: action.payload, isLoading: false }
    })
    builder.addCase(fetchQueryStatus.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        selected: action.payload,
      }
    })
  },
})

export const { reducer, actions } = querySlice
export const { setIsLoading } = actions
export default reducer
