import React from 'react'
import { Dot, DotLabel } from '../query-list/styled'
import { Status } from '@/domain'

export type StatusDot = {
  status?: Status
}

export const QueryStatusDot = (props: StatusDot) => {
  return (
    <DotLabel data-testid="query-status-dot" status={props.status}>
      <Dot status={props.status} />
      {props.status !== 'done' ? 'Em andamento' : 'Concluída'}
    </DotLabel>
  )
}
