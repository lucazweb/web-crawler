import React, { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  label?: string
  icon?: JSX.Element
}

export const Button = ({ icon, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {icon}
      {!props.isLoading ? props.label : 'Carregando..'}
    </StyledButton>
  )
}
