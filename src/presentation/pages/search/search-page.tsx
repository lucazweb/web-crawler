import React from 'react'
import {
  Button,
  Layout,
  QueryList,
  SearchInput,
} from '@/presentation/components'
import { SearchBox, TopBar } from './styled'
import { faker } from '@faker-js/faker'

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
        <div style={{ width: '600px', marginTop: '32px' }}>
          <QueryList
            list={[
              {
                id: faker.database.mongodbObjectId(),
                status: 'active',
                urls: [faker.internet.url(), faker.internet.url()],
              },
              {
                id: faker.database.mongodbObjectId(),
                status: 'active',
                urls: [],
              },
              {
                id: faker.database.mongodbObjectId(),
                status: 'done',
                urls: [faker.internet.url(), faker.internet.url()],
              },
              {
                id: faker.database.mongodbObjectId(),
                status: 'done',
                urls: [],
              },
            ]}
          />
        </div>
      </Layout>
    </>
  )
}
