import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Layout, TopBar, SearchInput } from '@/presentation/components'
import { remoteKeyworkSearch } from '@/main/factories/usecases/remote-keywork-search'
import { localSaveQuery } from '@/main/factories'
import { QueryDetail } from '@/domain'
import { SearchBox } from './styled'

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
