import styled from 'styled-components'

export const StyledList = styled.ul`
  width: 100%;
`

export const ListItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding-bottom: 12px;
  margin-bottom: 18px;
  h3 {
    font-size: 1.5em;
    font-style: italic;
    margin-bottom: 6px;
  }
  p {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 6px;
  }
  span {
    color: #333;
  }
`

export const StatusIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props: { status: string }) =>
    props.status === 'active' ? 'orange' : 'green'};
`
