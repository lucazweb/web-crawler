import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/infra/redux'
import { keyworkSearchRequest } from '@/infra/redux/features/query/thunks'
import { Button, Layout, Logo, SearchInput } from '@/presentation/components'
import { useAppDispatch } from '@/presentation/hooks'
import { SearchBox } from './styled'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineHistory } from 'react-icons/md'
import { TopBar } from '@/presentation/components/top-bar/top-bar'

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
        <span data-testid="history-link">
          <MdOutlineHistory />
          <Link to="/historico">Histórico de buscas</Link>
        </span>
      </TopBar>
      <Layout>
        <Logo isLarge />
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
            isLarge
            icon={<FaSearch />}
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
