import React from 'react'
import { Button, Layout, SearchInput } from '@/presentation/components'
import { SearchBox, TopBar } from './styled'

export const SearchPage = () => {
  return (
    <>
      <TopBar>
        <span data-testid="history-link">Histórico de buscas</span>
      </TopBar>
      <Layout>
        <h1 data-testid="page-title">Webcrawler</h1>
        <SearchBox>
          <SearchInput placeholder="Digite a palavra-chave" />
          <Button data-testid="search-button" label="Buscar" />
        </SearchBox>
      </Layout>
    </>
  )
}
