import { NumbersList } from './NumbersList'
import { Container } from './style'

function Raffle() {
  const numbers = [
    '02',
    '07',
    '18',
    '26',
    '27',
    '37',
    '38',
    '39',
    '43',
    '47',
    '51',
    '54',
    '57',
    '61',
    '67',
    '71',
    '77',
    '82',
    '88',
    '99',
  ]
  return (
    <Container>
      <NumbersList numbers={numbers} />
      <footer>
        <span>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</span>
      </footer>
    </Container>
  )
}

export default Raffle
