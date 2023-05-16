import React, { useEffect, useState } from 'react'
import { Layout, QueryList } from '@/presentation/components'
import { QueryDetail } from '@/domain'
import { getLocalQueryList, remoteUpdateQueryList } from '@/main/factories'
import { TopBar } from '../search/styled'
import { Link } from 'react-router-dom'
import { ListHeader } from './styled'

export const QueryHistory = () => {
  const [list, setList] = useState<Array<Partial<QueryDetail>>>([])
  const [count, setCount] = useState(0)

  const handleListUpdate = (
    list: Array<Partial<QueryDetail>>,
    updated: Array<Partial<QueryDetail>>
  ) => {
    const stored = [...list]
    return stored.map((query) => {
      if (updated.map((q) => q.id).includes(query.id)) {
        const item = updated.find((updated) => updated.id === query.id)
        return { ...item, keyword: query.keyword }
      } else {
        return query
      }
    })
  }

  const getAllData = async (list: Array<Partial<QueryDetail>>) => {
    if (!count) {
      const data: Array<Partial<QueryDetail>> = await remoteUpdateQueryList(
        list
      )
      const updated = handleListUpdate(list, data)
      setList(updated)
      setCount((c) => c + 1)
    }
  }

  const handleRefreshData = () => {
    setCount(0)
    void getAllData(list)
  }

  useEffect(() => {
    const localList = getLocalQueryList().get<QueryDetail>('query-list')
    void getAllData(localList)
  }, [])

  return (
    <>
      <TopBar>
        <span data-testid="search-page-link">
          <Link to="/">Nova busca</Link>
        </span>
      </TopBar>

      <Layout>
        <ListHeader>
          <h1 data-testid="page-title">
            Webcrawler <small>Histórico de buscas</small>
          </h1>
          <button data-testid="refresh-button" onClick={handleRefreshData}>
            Atualizar
          </button>
        </ListHeader>

        <div style={{ width: '50%', display: 'flex' }}>
          <QueryList list={list} />
        </div>
      </Layout>
    </>
  )
}
