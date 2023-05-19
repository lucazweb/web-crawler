import styled from 'styled-components'

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  button {
    border-radius: 0px 4px 4px 0px;
  }
  input {
    border-radius: 4px 0px 4px 4px;
    border-color: ${(props) => props.theme.colors.border};
    border-right: none;
    color: ${(props) => props.theme.colors.border};
    &:focus {
      border-right: none;
      border-color: ${(props) => props.theme.colors.border};
    }

    &::placeholder {
      color: ${(props) => props.theme.typography.textInactive};
    }
  }
`
