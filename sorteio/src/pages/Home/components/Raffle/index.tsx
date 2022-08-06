import useDrawContext from '../../../../hooks/useDrawContext'
import { NumbersList } from './NumbersList'
import { Container } from './style'

function Raffle() {
  const { drawSelected } = useDrawContext()
  const numbers = drawSelected.numeros
  return (
    <Container>
      {numbers[0] !== '' ? (
        <>
          <NumbersList numbers={numbers} />
          <footer>
            <span>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</span>
          </footer>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  )
}

export default Raffle
