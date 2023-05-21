import React from 'react'
import { QueryDetail } from '@/domain'
import {
  Dot,
  DotLabel,
  ListBody,
  ListHeader,
  ListItem,
  LoaderWrapper,
  StyledList,
} from './styled'
import { Placeholder } from './placeholder'
import { DotBlue } from '../dot-loader/styled'

export type QueryListProps = {
  list: Array<Partial<QueryDetail>>
  onItemClick?: (id?: string) => void
  onEmptyListClick?: () => void
  isLoading?: boolean
}

export enum QueryStatus {
  active = 'Em andamento',
  done = 'Concluída',
}

export const handleResultCounter = (
  status: 'active' | 'done',
  urls: string[] | undefined
) => {
  if (status) {
    if (urls) {
      const results = `${urls.length} resultados encontrados`
      if (status === 'active') {
        return <>{urls.length ? results : 'Ainda sem resultados'}</>
      }
      if (status === 'done' && urls?.length > 0) return results
    }
    return 'Sem resultados'
  }
  return null
}

export const QueryList = ({
  list,
  onItemClick,
  onEmptyListClick,
  isLoading,
}: QueryListProps) => {
  return (
    <StyledList data-testid="query-list-component">
      {isLoading && (
        <LoaderWrapper>
          <DotBlue />
        </LoaderWrapper>
      )}
      <Placeholder
        isVisible={!isLoading && list.length === 0}
        onClick={onEmptyListClick}
      />
      {!isLoading &&
        list.length > 0 &&
        list.map((query) => (
          <ListItem
            onClick={() => {
              onItemClick(query.id)
            }}
            key={query.id}
            data-testid="list-item"
          >
            <ListHeader>
              <h3 data-testid="list-item-keyword">{query?.keyword} </h3>
              <DotLabel status={query?.status} data-testid="list-item-status">
                <Dot status={query?.status} /> {QueryStatus[query?.status]}
              </DotLabel>
            </ListHeader>
            <ListBody>
              <span data-testid="list-item-id">ID: {query.id}</span>

              {!!query.status && (
                <span data-testid="list-item-result-counter">
                  {handleResultCounter(query.status, query.urls)}
                </span>
              )}
            </ListBody>
          </ListItem>
        ))}
    </StyledList>
  )
}
