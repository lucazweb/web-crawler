import React, { InputHTMLAttributes } from 'react'
import { StyledInput } from './styled'

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = (props: SearchInputProps) => {
  return <StyledInput data-testid="search-input-component" {...props} />
}
