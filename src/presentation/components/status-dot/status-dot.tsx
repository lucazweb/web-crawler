import React from 'react'
import { Dot, DotLabel } from '../query-list/styled'
import { Status } from '@/domain'

export type StatusDot = {
  status?: Status
}

export const QueryStatusDot = (props: StatusDot) => {
  return (
    <DotLabel status={props.status} data-testid="list-item-status">
      <Dot status={props.status} />
      {props.status !== 'done' ? 'Em andamento' : 'Concluída'}
    </DotLabel>
  )
}
