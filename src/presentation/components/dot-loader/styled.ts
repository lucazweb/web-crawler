import styled, { keyframes } from 'styled-components'

const pulsesBlue = keyframes`
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
    }
    
    70% {
        transform: scale(1);
        box-shadow: 0 0 0 25px rgba(51, 217, 178, 0);
    }
    
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
`

export const DotBlue = styled.span`
  display: block;
  background: ${(props) => props.theme.colors.border};
  border-radius: 50%;
  margin: 10px;
  height: 10px;
  width: 10px;
  box-shadow: 0 0 0 0 ${(props) => props.theme.colors.border};
  animation: ${pulsesBlue} 2s infinite;
`
