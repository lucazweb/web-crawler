import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { TbRefresh, TbArrowBack } from 'react-icons/tb'
import { FaSearch } from 'react-icons/fa'
import { QueryDetail } from '@/domain'
import { RootState, fetchQueryList } from '@/infra'
import {
  Button,
  ButtonWrapper,
  Layout,
  Logo,
  QueryList,
  TopBar,
} from '@/presentation/components'
import { useAppDispatch } from '@/presentation/hooks'
import { getLocalQueryList } from '@/main/factories'

import { ListHeader, StyledSpan } from './styled'
import { MdOutlineHistory } from 'react-icons/md'

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

  const { list, isLoading } = useSelector(
    ({ querySlice }: RootState) => querySlice
  )

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

  const handleEmptyListClick = () => {
    navigate('/')
  }

  return (
    <>
      <TopBar>
        <span data-testid="search-page-link">
          <FaSearch />
          <Link to="/">Nova busca</Link>
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
            data-testid="back-button"
          />
        </ButtonWrapper>
        <ListHeader>
          <Logo
            subTitle={
              <StyledSpan>
                <MdOutlineHistory /> Histórico de buscas
              </StyledSpan>
            }
          />

          {list.length > 0 && (
            <Button
              isLoading={isLoading && list.length > 0}
              label="Atualizar"
              icon={<TbRefresh />}
              data-testid="refresh-button"
              onClick={async () => {
                await handleListUpdate(list)
              }}
            />
          )}
        </ListHeader>
        <div style={{ width: '100%', display: 'flex' }}>
          <QueryList
            isLoading={isLoading}
            list={list}
            onItemClick={handleItemClick}
            onEmptyListClick={handleEmptyListClick}
          />
        </div>
      </Layout>
    </>
  )
}
