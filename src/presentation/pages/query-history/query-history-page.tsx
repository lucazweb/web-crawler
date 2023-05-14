import React, { useEffect, useState } from 'react'
import { Layout, QueryList } from '@/presentation/components'
import { QueryDetail } from '@/domain'
import { faker } from '@faker-js/faker'
import { getLocalQueryList } from '@/main/factories'

export const QueryHistory = () => {
  const [list, setList] = useState<QueryDetail[]>([])

  useEffect(() => {
    localStorage.setItem(
      'query-list',
      JSON.stringify([
        {
          id: faker.database.mongodbObjectId(),
          status: 'active',
          urls: [],
        },
        {
          id: faker.database.mongodbObjectId(),
          status: 'done',
          urls: [faker.internet.url()],
        },
      ])
    )

    const localList = getLocalQueryList().get<QueryDetail>('query-list')
    setList(localList)
  }, [])

  return (
    <Layout>
      <h1 data-testid="page-title">Webcrawler</h1>
      <h3>Histórico de buscas</h3>
      <div style={{ width: '50%', display: 'flex' }}>
        <QueryList list={list} />
      </div>
    </Layout>
  )
}
