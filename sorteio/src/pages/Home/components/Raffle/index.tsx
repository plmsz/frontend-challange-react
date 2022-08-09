import Loading from '../../../../components/Loading'
import useDrawContext from '../../../../hooks/useDrawContext'
import { NumbersList } from './NumbersList'
import { Container } from './style'

function Raffle() {
  const { drawSelected } = useDrawContext()
  const numbers = drawSelected?.numeros

  return (
    <>
      {numbers[0] === '' && (
        <Container>
          <Loading color='quina' image={false}>
            Aposte, hoje pode ser o seu dia!
          </Loading>
        </Container>
      )}
      {numbers[0] !== '' && (
        <Container>
          <h1 className='visibility'>Resultados</h1>
          <NumbersList numbers={numbers} />
          <footer>
            <span>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</span>
          </footer>
        </Container>
      )}
    </>
  )
}

export default Raffle
