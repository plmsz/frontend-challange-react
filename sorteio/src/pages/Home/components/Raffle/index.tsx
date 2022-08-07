import Loading from '../../../../components/Loading'
import { Message } from '../../../../components/Message'
import useDrawContext from '../../../../hooks/useDrawContext'
import { NumbersList } from './NumbersList'
import { Container } from './style'

function Raffle() {
  const { drawSelected, errorMessage } = useDrawContext()
  const numbers = drawSelected.numeros

  return (
    <Container>
      {errorMessage && <Message />}
      {!errorMessage && numbers[0] === '' && <Loading />}
      {numbers[0] !== '' && !errorMessage && (
        <>
          <NumbersList numbers={numbers} />
          <footer>
            <span>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</span>
          </footer>
        </>
      )}
    </Container>
  )
}

export default Raffle
