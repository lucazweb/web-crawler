import React, { useState } from 'react'
import { Button, Layout, SearchInput } from '@/presentation/components'
import { remoteKeyworkSearch } from '@/main/factories/usecases/remote-keywork-search'
import { localSaveQuery } from '@/main/factories'
import { QueryDetail } from '@/domain'
import { SearchBox, TopBar } from './styled'
import { Link } from 'react-router-dom'

export const SearchPage = () => {
  // should call search list request on button press
  const [keyword, setKeyword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleKeywordSearch = async () => {
    try {
      setIsLoading(true)
      const response: Partial<QueryDetail> = await remoteKeyworkSearch.save({
        keyword,
      })
      localSaveQuery().set('query-list', { ...response, keyword })
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <TopBar>
        <span data-testid="history-link">
          <Link to="/historico">Histórico de buscas</Link>
        </span>
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
