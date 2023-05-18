import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/infra/redux'
import { keyworkSearchRequest } from '@/infra/redux/features/query/thunks'
import { Button, Layout, TopBar, SearchInput } from '@/presentation/components'
import { useAppDispatch } from '@/presentation/hooks'
import { SearchBox } from './styled'

export const SearchPage = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isLoading } = useSelector(({ querySlice }: RootState) => querySlice)

  const handleKeywordSearch = async () => {
    await dispatch(keyworkSearchRequest(keyword)).then(() => {
      navigate('/historico')
    })
  }

  return (
    <>
      <TopBar>
        <div>
          <span data-testid="history-link">
            <Link to="/historico">Histórico de buscas</Link>
          </span>
        </div>
      </TopBar>
      <Layout>
        <h1 data-testid="page-title">Webcrawler</h1>
        <SearchBox>
          <SearchInput
            onChange={(e) => {
              setKeyword(e.target.value)
            }}
            value={keyword}
            placeholder="Digite a palavra-chave"
          />
          <Button
            disabled={!keyword}
            onClick={handleKeywordSearch}
            data-testid="search-button"
            label="Buscar"
            isLoading={isLoading}
          />
        </SearchBox>
      </Layout>
    </>
  )
}
