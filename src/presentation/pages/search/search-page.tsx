import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineHistory } from 'react-icons/md'
import { RiErrorWarningFill } from 'react-icons/ri'
import { RootState, setShouldRedirect } from '@/infra/redux'
import { keyworkSearchRequest } from '@/infra/redux/features/query/thunks'
import {
  Button,
  Layout,
  Logo,
  SearchInput,
  TopBar,
} from '@/presentation/components'
import { useAppDispatch } from '@/presentation/hooks'
import { SearchBox, ErrorMessage, SearchContentWrapper } from './styled'

export const SearchPage = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isLoading, errorMessage, shouldRedirect } = useSelector(
    ({ querySlice }: RootState) => querySlice
  )

  const handleKeywordSearch = async () => {
    await dispatch(keyworkSearchRequest(keyword))
  }

  const handleSearchOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter')
      void handleKeywordSearch()
  }

  useEffect(() => {
    if (shouldRedirect) navigate(shouldRedirect)
    return () => {
      dispatch(setShouldRedirect(undefined))
    }
  }, [shouldRedirect])

  return (
    <>
      <TopBar>
        <span data-testid="history-link">
          <MdOutlineHistory />
          <Link to="/historico">Histórico de buscas</Link>
        </span>
      </TopBar>
      <Layout>
        <SearchContentWrapper>
          <Logo isLarge />
          <SearchBox>
            <SearchInput
              onChange={(e) => {
                setKeyword(e.target.value)
              }}
              value={keyword}
              placeholder="Digite a palavra-chave"
              onKeyDown={handleSearchOnKeydown}
            />
            <Button
              disabled={!keyword}
              isLarge
              icon={<FaSearch />}
              onClick={handleKeywordSearch}
              data-testid="search-button"
              label="Buscar"
              isLoading={isLoading}
            />
          </SearchBox>
        </SearchContentWrapper>

        {errorMessage && (
          <ErrorMessage>
            <RiErrorWarningFill /> {errorMessage}
          </ErrorMessage>
        )}
      </Layout>
    </>
  )
}
