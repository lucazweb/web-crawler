import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  ButtonWrapper,
  Layout,
  QueryList,
} from '@/presentation/components'
import { QueryDetail } from '@/domain'
import { TbRefresh, TbArrowBack } from 'react-icons/tb'
import { getLocalQueryList } from '@/main/factories'

import { ListHeader } from './styled'
import { fetchQueryList } from '@/infra/redux/features/query/thunks'
import { useAppDispatch } from '@/presentation/hooks'
import { RootState } from '@/infra/redux'
import { TopBar } from '@/presentation/components/top-bar/top-bar'

import { FaSearch } from 'react-icons/fa'

const orderByStatus = (list: Array<Partial<QueryDetail>>) =>
  list.sort(function (a, b) {
    const statusA = a.status.toUpperCase()
    const statusB = b.status.toUpperCase()
    return statusA < statusB ? -1 : statusA > statusB ? 1 : 0
  })

export const handleListUpdate = (
  list: Array<Partial<QueryDetail>>,
  updated: Array<Partial<QueryDetail>>
) => {
  const stored = [...list]
  const result = stored.map((query) => {
    if (updated.map((q) => q.id).includes(query.id)) {
      const item = updated.find((updated) => updated.id === query.id)
      return { ...item, keyword: query.keyword }
    } else {
      return query
    }
  })

  return orderByStatus(result)
}

export const QueryHistory = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { list } = useSelector(({ querySlice }: RootState) => querySlice)

  const handleListUpdate = async (localList: Array<Partial<QueryDetail>>) =>
    await dispatch(fetchQueryList(localList))

  useEffect(() => {
    const localList = getLocalQueryList().get<QueryDetail>(
      process.env.LOCAL_STORAGE_KEY
    )
    void handleListUpdate(localList)
  }, [])

  const handleItemClick = (id?: string) => {
    navigate(`/query-detail/${id}`)
  }

  return (
    <>
      <TopBar>
        <span data-testid="search-page-link">
          <FaSearch />
          <Link to="/"> Nova busca</Link>
        </span>
      </TopBar>

      <Layout>
        <ButtonWrapper>
          <Button
            label="Voltar"
            onClick={() => {
              navigate('/')
            }}
            icon={<TbArrowBack />}
          />
        </ButtonWrapper>
        <ListHeader>
          <h1 data-testid="page-title">
            Webcrawler <small>Histórico de buscas</small>
          </h1>
          <Button
            label="Atualizar"
            icon={<TbRefresh />}
            data-testid="refresh-button"
            onClick={async () => {
              await handleListUpdate(list)
            }}
          />
        </ListHeader>
        <div style={{ width: '100%', display: 'flex' }}>
          <QueryList list={list} onItemClick={handleItemClick} />
        </div>
      </Layout>
    </>
  )
}
