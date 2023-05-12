import styled from 'styled-components'

export const StyledInput = styled.input`
  appearance: none;
  outline: none;
  min-width: 60%;
  padding: 12px 28px;
  border-radius: 3px;
  font-size: 1.1em;
  border: 2px solid #ccc;
  transition: border-color ease 0.3s;
  &:focus {
    border: 2px solid #6699cc;
  }
`
