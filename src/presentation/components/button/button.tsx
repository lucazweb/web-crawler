import React, { ButtonHTMLAttributes } from 'react'
import { DotBlue } from '@/presentation/components'
import { StyledButton } from './styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  label?: string
  icon?: JSX.Element
  isLarge?: boolean
}

export const Button = ({ icon, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {!props.isLoading && icon && icon}
      {!props.isLoading ? props.label : <DotBlue data-testid="button-loader" />}
    </StyledButton>
  )
}
