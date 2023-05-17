import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
  width: 80%;
  margin: auto;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-start;
`

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  padding: 12px;
  div {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    margin: auto;
    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
