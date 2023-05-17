import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  Button,
  ButtonWrapper,
  Layout,
  TopBar,
  QueryStatusDot,
  handleResultCounter,
} from '@/presentation/components'

import { QueryDetail } from '@/domain'
import { getLocalQueryList, remoteQueryStatus } from '@/main/factories'
import { DetailBody, DetailBox, DetailCard, DetailHeader } from './styled'
import { TbArrowBack } from 'react-icons/tb'

export const QuerySearchDetail = () => {
  const [query, setQuery] = useState<QueryDetail>()
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()

  useEffect(() => {
    const getQueryDetail = async () => {
      try {
        const localList = getLocalQueryList().get<QueryDetail>('query-list')
        const result = await remoteQueryStatus(id).load()
        console.log(result)

        if (result) {
          const keyword = localList.find((q) => q.id === result.id)?.keyword
          setQuery({ ...result, keyword })
        }
      } catch (error) {
        console.log(error)
      }
    }

    void getQueryDetail()
  }, [])

  return (
    <>
      <TopBar>
        <div>
          <span data-testid="history-page-link">
            <Link to="/historico">Histórico de buscas</Link>
          </span>
        </div>
      </TopBar>

      <Layout>
        <ButtonWrapper>
          <Button
            label="Voltar"
            onClick={() => {
              navigate('/historico')
            }}
            icon={<TbArrowBack />}
          />
        </ButtonWrapper>
        <DetailCard>
          <DetailBox>
            <DetailHeader>
              <h1>{query?.keyword}</h1>
              <QueryStatusDot status={query?.status} />
            </DetailHeader>

            <DetailBody>
              <span data-testid="list-item-id">
                <p> ID: {query?.id} </p>
                <p>{handleResultCounter(query?.status, query?.urls)}</p>
              </span>

              <ul style={{ marginTop: '24px' }}>
                {query?.urls.map((url: string) => (
                  <li key={url}>{url}</li>
                ))}
              </ul>
            </DetailBody>
          </DetailBox>
        </DetailCard>
      </Layout>
    </>
  )
}
