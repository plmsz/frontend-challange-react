import { Container, Heading } from '../../styles/CommonUi'
import illustrationErrorSmall from '../../assets/something-went-wrong-256.png'
import illustrationErrorMedium from '../../assets/something-went-wrong-412.png'
import illustrationError from '../../assets/something-went-wrong-512.png'

export function Error() {
  return (
    <Container>
      <picture>
        <source media='(min-width: 700px)' srcSet={illustrationError} />
        <source media='(min-width: 425px)' srcSet={illustrationErrorMedium} />
        <source media='(max-width: 425px)' srcSet={illustrationErrorSmall} />
        <img src={illustrationError} alt='' />
      </picture>
      <Heading>Desculpe, tente novamente.</Heading>
    </Container>
  )
}
