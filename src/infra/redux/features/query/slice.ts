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
  errorMessage?: string
  shouldRedirect?: string
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
    setErrorMessage: (state, action: PayloadAction<string>) => {
      return { ...state, errorMessage: action.payload }
    },
    setShouldRedirect: (state, action: PayloadAction<string>) => {
      return { ...state, shouldRedirect: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(keyworkSearchRequest.fulfilled, (state, payload) => {
      return {
        ...state,
        isLoading: false,
      }
    })
    builder.addCase(fetchQueryList.fulfilled, (state, action) => {
      return {
        ...state,
        list: action.payload,
        isLoading: false,
        errorMessage: undefined,
      }
    })
    builder.addCase(fetchQueryStatus.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        selected: action.payload,
        errorMessage: undefined,
      }
    })
  },
})

export const { reducer, actions } = querySlice
export const { setIsLoading, setErrorMessage, setShouldRedirect } = actions
export default reducer
