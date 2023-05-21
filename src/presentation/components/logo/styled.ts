import styled from 'styled-components'
import { LogoProps } from './logo'

export const StyledTitle = styled.h1`
  margin-bottom: 32px;
  font-size: ${(props: LogoProps) => (props.isLarge ? '3.8em' : '2em')};
  color: #333;
`
