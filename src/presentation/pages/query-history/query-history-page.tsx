import React, { useEffect, useState } from 'react'
import { Layout, QueryList } from '@/presentation/components'
import { QueryDetail } from '@/domain'
import { getLocalQueryList } from '@/main/factories'
import { TopBar } from '../search/styled'
import { Link } from 'react-router-dom'

export const QueryHistory = () => {
  const [list, setList] = useState<QueryDetail[]>([])

  useEffect(() => {
    const localList = getLocalQueryList().get<QueryDetail>('query-list')
    // should update all data assyncronaly using query info service
    setList(localList)
  }, [])

  return (
    <>
      <TopBar>
        <span data-testid="history-link">
          <Link to="/">Nova busca</Link>
        </span>
      </TopBar>

      <Layout>
        <h1 data-testid="page-title">Webcrawler</h1>
        <h3>Histórico de buscas</h3>
        <div style={{ width: '50%', display: 'flex' }}>
          <QueryList list={list} />
        </div>
      </Layout>
    </>
  )
}
