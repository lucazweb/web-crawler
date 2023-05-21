import styled from 'styled-components'

type StyledButtonProps = {
  isLarge?: boolean
}

export const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.buttonBg};
  color: ${(props) => props.theme.colors.buttonText};
  font-size: ${(props) => props.theme.typography.fontSize};
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  gap: 4px;
  height: ${({ isLarge: isLargeButton }: StyledButtonProps) =>
    isLargeButton ? '48px' : '34px'};
  display: flex;
  align-items: center;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    border-color: ${(props) => props.theme.colors.hover};
  }
`
