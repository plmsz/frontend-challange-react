import { BackToTop } from '../../components/BackToTop'
import Header from '../../components/Header'
import Raffle from './components/Raffle'
import { Container } from './style'

export function Home() {
  return (
    <Container>
      <Header />
      <Raffle />
      <BackToTop />
    </Container>
  )
}
