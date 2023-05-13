import React, { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  label?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {!props.isLoading ? props.label : 'Carregando..'}
    </StyledButton>
  )
}
