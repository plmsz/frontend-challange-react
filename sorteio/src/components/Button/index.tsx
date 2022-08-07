import { ButtonStyled } from '../../styles/CommonUi'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}
export function Button({ children, type, onClick }: Props) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}
