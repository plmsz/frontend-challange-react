import logoPrimary from '../../../assets/logoPrimary.svg'
import logoSecondary from '../../../assets/logoSecondary.svg'
import { Container } from './style'

interface Props {
  title: string
}

export function Logo({ title }: Props) {
  return (
    <Container>
      <picture>
        <source media='(max-width: 768px)' srcSet={logoPrimary} />
        <source media='(min-width: 768px)' srcSet={logoSecondary} />
        <img src={logoPrimary} alt='' />
      </picture>
      <h1>{title}</h1>
    </Container>
  )
}
