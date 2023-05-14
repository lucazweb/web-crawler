import { QueryDetail } from '@/domain'
import React from 'react'
import { ListItem, StatusIcon, StyledList } from './styled'

export type QueryListProps = {
  list: Array<Partial<QueryDetail>>
}

enum QueryStatus {
  active = 'Em andamento',
  done = 'Concluída',
}

export const QueryList = (props: QueryListProps) => {
  const handleResultCounter = (
    status: 'active' | 'done',
    urls: string[] | undefined
  ) => {
    if (urls) {
      const results = `${urls.length} resultados encontrados`
      if (status === 'active') {
        return <>{urls.length ? results : 'Ainda sem resultados'}</>
      }
      if (status === 'done' && urls?.length > 0) return results
    }

    return 'Sem resultados'
  }

  return (
    <StyledList data-testid="query-list-component">
      {props.list.map((query) => (
        <ListItem key={query.id} data-testid="list-item">
          <h3 data-testid="list-item-keyword">{query.keyword}</h3>
          <p data-testid="list-item-id">{query.id}</p>
          <p data-testid="list-item-status">
            <StatusIcon status={query.status} /> {QueryStatus[query.status]}
          </p>
          <span data-testid="list-item-result-counter">
            {handleResultCounter(query.status, query.urls)}
          </span>
        </ListItem>
      ))}
    </StyledList>
  )
}
