import { Container, Heading } from '../../styles/CommonUi'
import illustration404 from '../../assets/404.png'
import illustration404Medium from '../../assets/404Medium.png'
import illustration404Small from '../../assets/404Small.png'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'

export function NotFound() {
  return (
    <Container>
      <picture>
        <source media='(min-width: 700px)' srcSet={illustration404} />
        <source media='(min-width: 425px)' srcSet={illustration404Medium} />
        <source media='(max-width: 425px)' srcSet={illustration404Small} />
        <img src={illustration404} alt='' />
      </picture>
      <Heading>Oops. Página não existe.</Heading>
      <Link to='/'>
        <Button type='button'>Voltar para o início</Button>
      </Link>
    </Container>
  )
}
