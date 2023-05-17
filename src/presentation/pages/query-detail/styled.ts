import styled from 'styled-components'

export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 24px;
  border: 1px solid #f3f3f3;
  width: 100%;
  border-radius: 4px;
  box-shadow: 2px 1px 6px #f3f3f3;
`
export const DetailBox = styled.div`
  width: 100%;
  padding-bottom: 12px;
  transition: background-color 0.5s ease;
  padding: 18px;
`

export const DetailHeader = styled.div`
  display: flex;
  gap: 6px;
`

export const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  span {
    p {
      margin-bottom: 6px;
      color: #333;
    }
  }

  ul {
    border-top: 1px solid #f3f3f3;
    padding-top: 12px;
    column-count: 2 !important;
    column-gap: 30px;
    column-rule-style: solid;
    column-rule-width: 1px;
    column-rule-color: lightblue;
    li {
      margin-bottom: 4px;
      color: #333;
      padding: 6px;
      &:nth-child(even) {
        background-color: #f3f3f3;
      }
    }
  }
`
