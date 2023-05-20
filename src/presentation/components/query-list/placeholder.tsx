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
        <PlaceholderBox data-testid="query-list-placeholder">
          <PlaceholderContent>
            <VscInbox size={90} />
            <p>Sem buscas recentes</p>
          </PlaceholderContent>
          {onClick && (
            <Button
              data-testid="redirect-search-button"
              onClick={onClick}
              label="Realizar nova busca"
            />
          )}
        </PlaceholderBox>
      )}
    </>
  )
}
