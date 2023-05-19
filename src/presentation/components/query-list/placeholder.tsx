import React from 'react'
import { VscInbox } from 'react-icons/vsc'
import { PlaceholderBox, PlaceholderContent } from './styled'
import { Button } from '@/presentation/components'

type Props = {
  isVisible: boolean
  onClick: () => void
}

export const Placeholder = ({ isVisible, onClick }: Props) => {
  return (
    <>
      {isVisible && (
        <PlaceholderBox>
          <PlaceholderContent>
            <VscInbox size={90} />
            <p>Sem pesquisas recentes</p>
          </PlaceholderContent>
          {onClick && (
            <Button onClick={onClick} label="Realizar nova pesquisa" />
          )}
        </PlaceholderBox>
      )}
    </>
  )
}
