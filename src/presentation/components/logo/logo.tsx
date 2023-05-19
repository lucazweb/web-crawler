import React from 'react'
import { StyledTitle } from './styled'

export type LogoProps = {
  isLarge?: boolean
}

export const Logo = (props: LogoProps) => (
  <StyledTitle isLarge={props.isLarge}>WebCrawler</StyledTitle>
)
