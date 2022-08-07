import { ReactNode } from 'react'
import { BackgroundStyled } from './style'

interface Props {
  children: ReactNode
  bgColor: string
}
export function Background({ bgColor, children }: Props) {
  return <BackgroundStyled bgColor={bgColor}>{children}</BackgroundStyled>
}
