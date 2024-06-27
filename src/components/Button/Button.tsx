import { memo } from 'react'
import { RoundedButton } from './style'

interface IButtonProps {
  label: string
  inverted?: boolean
}

const Button: React.FC<IButtonProps> = ({ label, inverted = false }) => (
  <RoundedButton type="button" inverted={inverted}>
    {label}
  </RoundedButton>
)

export default memo(Button)
