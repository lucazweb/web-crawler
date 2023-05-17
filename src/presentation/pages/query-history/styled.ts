import styled from 'styled-components'

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 12px;
  margin-bottom: 32px;

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
