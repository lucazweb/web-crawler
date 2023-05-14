import React, { useEffect, useState } from 'react'
import { Layout, QueryList } from '@/presentation/components'
import { QueryDetail } from '@/domain'
import { getLocalQueryList, remoteQueryStatus } from '@/main/factories'
import { TopBar } from '../search/styled'
import { Link } from 'react-router-dom'
import axios from 'axios'
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
      const data: Array<Partial<QueryDetail>> = await axios.all(
        list
          .filter((q) => q.status !== 'done')
          .map(async (q) => {
            return remoteQueryStatus(q.id).load()
          })
      )
      const updated = handleListUpdate(list, data)
      console.log(updated, data)
      setList(updated)
      setCount((c) => c + 1)
    }
  }

  useEffect(() => {
    const localList = getLocalQueryList().get<QueryDetail>('query-list')
    // should update all data assyncronaly using query info service
    void getAllData(localList)
    // setList(localList)
  }, [])

  // useEffect(() => {

  //   void getAllData()
  // }, [list])

  return (
    <>
      <TopBar>
        <span data-testid="history-link">
          <Link to="/">Nova busca</Link>
        </span>
      </TopBar>

      <Layout>
        <ListHeader>
          <h1 data-testid="page-title">
            Webcrawler <small>Histórico de buscas</small>
          </h1>
          <button>Atualizar</button>
        </ListHeader>

        <div style={{ width: '50%', display: 'flex' }}>
          <QueryList list={list} />
        </div>
      </Layout>
    </>
  )
}
