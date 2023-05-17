import { QueryDetail } from '@/domain'
import React from 'react'
import { Dot, DotLabel, ListBody, ListHeader } from './styled'
import { QueryStatus, handleResultCounter } from './query-list'

type Props = {
  query: Partial<QueryDetail>
}

export const ListItemContent = ({ query }: Props) => {
  return (
    <>
      <ListHeader>
        <h3 data-testid="list-item-keyword">{query.keyword} </h3>
        <DotLabel status={query?.status} data-testid="list-item-status">
          <Dot status={query?.status} /> {QueryStatus[query?.status]}
        </DotLabel>
      </ListHeader>
      <ListBody>
        <span data-testid="list-item-id">ID: {query.id}</span>
        <span data-testid="list-item-result-counter">
          {handleResultCounter(query.status, query.urls)}
        </span>
      </ListBody>
    </>
  )
}
