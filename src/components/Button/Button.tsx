import { memo, PropsWithChildren, ReactElement } from 'react'
import { RoundedButton } from './style'

interface IButtonProps {
  label: string
}

const Button: React.FC<IButtonProps> = ({ label }) => (
  <RoundedButton type="button">{label}</RoundedButton>
)

export default memo(Button)
