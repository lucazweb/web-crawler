import { Status } from '@/domain'
import styled, { keyframes } from 'styled-components'

export const StyledList = styled.ul`
  width: 100%;
`

export const ListItem = styled.li`
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 12px;
  transition: background-color 0.5s ease;
  padding: 18px;
  cursor: pointer;
  &:hover {
    background: #fffae4;
  }

  h3 {
    font-size: 1.5em;
    font-style: italic;
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
export const ListHeader = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #595959;
`

type DotProps = {
  status: Status
}

const pulsesGreen = keyframes`
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
    }
    
    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
    }
    
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
`

const pulsesOrange = keyframes`
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
    }
    
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
    }
`

export const Dot = styled.span`
  display: block;
  background: ${(props: DotProps) =>
    props.status === 'done'
      ? 'rgba(51, 217, 178, 1)'
      : 'rgba(255, 121, 63, 1)'};
  border-radius: 50%;
  margin: 10px;
  height: 10px;
  width: 10px;
  box-shadow: ${(props: DotProps) =>
    props.status === 'done'
      ? '0 0 0 0 rgba(51, 217, 178, 1)'
      : '0 0 0 0 rgba(255, 121, 63, 1)'};
  animation: ${(props: DotProps) =>
      props.status === 'done' ? pulsesGreen : pulsesOrange}
    2s infinite;
`

export const DotLabel = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${(props: DotProps) =>
    props.status === 'done' ? '#23b290' : 'rgba(255, 121, 63, 1)'};
`

export const PlaceholderBox = styled.div`
  display: flex;
  width: 30%;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`
export const PlaceholderContent = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
`
