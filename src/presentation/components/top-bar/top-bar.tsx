import React, { PropsWithChildren } from 'react'
import { StyledBar } from '@/presentation/components'

export const TopBar = ({ children }: PropsWithChildren) => {
  return (
    <StyledBar data-testid="topbar">
      <div>{children}</div>
    </StyledBar>
  )
}
