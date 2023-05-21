import styled from 'styled-components'

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;

  margin-bottom: 16px;

  h1 {
    display: flex;
    align-items: center;
    small {
      padding-top: 6px;
      font-size: 0.5em;
      margin-left: 12px;
    }
  }
`
export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`
