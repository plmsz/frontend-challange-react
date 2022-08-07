import { ButtonStyled } from '../../styles/CommonUi'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
}
export function Button({ children, type }: Props) {
  return <ButtonStyled type={type}>{children}</ButtonStyled>
}
