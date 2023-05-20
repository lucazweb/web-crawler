import React from 'react'
import { StyledTitle } from './styled'

export type LogoProps = {
  isLarge?: boolean
  subTitle?: string
}

export const Logo = (props: LogoProps) => (
  <StyledTitle data-testid="app-logo" isLarge={props.isLarge}>
    WebCrawler{props.subTitle && <small> {props.subTitle}</small>}
  </StyledTitle>
)
