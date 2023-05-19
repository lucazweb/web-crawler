import styled from 'styled-components'

type StyledButtonProps = {
  isLargeButton?: boolean
}

export const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.buttonBg};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: ${(props) => props.theme.typography.fontSize};
  gap: 4px;
  height: ${({ isLargeButton }: StyledButtonProps) =>
    isLargeButton ? '48px' : '34px'};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    border-color: ${(props) => props.theme.colors.hover};
  }
`
