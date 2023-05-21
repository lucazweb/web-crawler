import styled from 'styled-components'
import { fadeInEffect } from '@/presentation/styles/utils'

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: content-fit;
  border-radius: 4px;
  box-shadow: 1px 0px 4px #ccc;
  button {
    border-radius: 0px 4px 4px 0px;
  }
  input {
    width: 30vw;
    border-radius: 4px 0px 0px 4px;
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

export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme.colors.error};
  margin-top: 12px;
  animation: ${fadeInEffect} 0.3s ease-in forwards;
`
export const SearchContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20vh;
  h1 {
    text-align: center;
  }
`
