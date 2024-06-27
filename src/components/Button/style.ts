import styled from 'styled-components'

interface IButtonProps {
  inverted?: boolean
}

export const RoundedButton = styled.button<IButtonProps>`
  border: 2px solid ${(props) => (props.inverted ? '#000' : '#fff')};
  border-radius: 26px;
  background: transparent;
  color: ${(props) => (props.inverted ? '#000' : '#fff')};
  font-weight: 700;
  font-size: 16px;
  padding: 15px 20px;
  cursor: pointer;
`
