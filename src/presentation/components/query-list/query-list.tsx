import React from 'react'
import { useNavigate } from 'react-router-dom'
import { QueryDetail } from '@/domain'
import {
  Dot,
  DotLabel,
  ListBody,
  ListHeader,
  ListItem,
  StyledList,
} from './styled'
import { ListItemContent } from './query-list-content'

export type QueryListProps = {
  list: Array<Partial<QueryDetail>>
}

export enum QueryStatus {
  active = 'Em andamento',
  done = 'Concluída',
}

export const handleResultCounter = (
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

export const QueryList = (props: QueryListProps) => {
  const navigate = useNavigate()

  return (
    <StyledList data-testid="query-list-component">
      {props.list.map((query) => (
        <ListItem
          onClick={() => {
            navigate(`/query-detail/${query.id}`)
          }}
          key={query.id}
          data-testid="list-item"
        >
          <ListItemContent query={query} />
        </ListItem>
      ))}
    </StyledList>
  )
}
