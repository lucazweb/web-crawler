import React, { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styled'
import { DotBlue } from '../dot-loader/styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  label?: string
  icon?: JSX.Element
  isLargeButton?: boolean
}

export const Button = ({ icon, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {!props.isLoading && icon && icon}
      {!props.isLoading ? props.label : <DotBlue />}
    </StyledButton>
  )
}
