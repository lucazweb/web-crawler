import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { TbArrowBack } from 'react-icons/tb'
import {
  Button,
  ButtonWrapper,
  Layout,
  StyledBar,
  QueryStatusDot,
  handleResultCounter,
} from '@/presentation/components'
import { DetailBody, DetailBox, DetailCard, DetailHeader } from './styled'
import { RootState } from '@/infra/redux'
import { useAppDispatch } from '@/presentation/hooks'
import { fetchQueryStatus } from '@/infra/redux/features/query/thunks'

export const QuerySearchDetail = () => {
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { selected: query, isLoading } = useSelector(
    ({ querySlice }: RootState) => querySlice
  )

  const handleQueryDetail = async () => {
    await dispatch(fetchQueryStatus(id))
  }

  useEffect(() => {
    void handleQueryDetail()
  }, [])

  return (
    <>
      <StyledBar>
        <div>
          <span data-testid="history-page-link">
            <Link to="/historico">Histórico de buscas</Link>
          </span>
        </div>
      </StyledBar>

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
            <div style={{ display: isLoading ? 'block' : 'none' }}>
              {isLoading ? 'Carregando..' : null}
            </div>
            <DetailHeader>
              <h1 data-testid="keyword">{query?.keyword}</h1>
              <QueryStatusDot status={query?.status} />
            </DetailHeader>

            <DetailBody>
              <span data-testid="list-item-id">
                <p data-testid="query-id"> ID: {query?.id} </p>
                <p data-testid="results-count">
                  {handleResultCounter(query?.status, query?.urls)}
                </p>
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
