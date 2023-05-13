import React, { useState } from 'react'
import { Button, Layout, SearchInput } from '@/presentation/components'
import { SearchBox, TopBar } from './styled'
import { remoteKeyworkSearch } from '@/main/factories/usecases/remote-keywork-search'

export const SearchPage = () => {
  // should call search list request on button press
  const [keyword, setKeyword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleKeywordSearch = async () => {
    try {
      setIsLoading(true)
      await remoteKeyworkSearch.save({ keyword })
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <TopBar>
        <span data-testid="history-link">Histórico de buscas</span>
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
