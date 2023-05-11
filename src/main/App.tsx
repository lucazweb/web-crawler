import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  color: #333;
`

export const App = () => (
  <StyledDiv>
    <h3 data-testid="app-title">Hello crawler</h3>{' '}
    <pre>{process.env.API_BASE_URL}</pre>
  </StyledDiv>
)
