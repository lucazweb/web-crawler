import styled from 'styled-components'

export const StyledInput = styled.input`
  appearance: none;
  outline: none;
  min-width: 60%;
  padding: 12px 28px;
  border-radius: 3px;
  background-color: transparent;
  font-size: ${(props) => props.theme.typography.inputTextSize};
  border: 1px solid ${(props) => props.theme.colors.inactive};
  transition: border-color ease 0.3s;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.hover};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textHighlight};
  }
`
