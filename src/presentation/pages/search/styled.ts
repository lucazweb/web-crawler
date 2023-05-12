import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 12px;
  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`
