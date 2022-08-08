import Loading from '../../../../components/Loading'
import useDrawContext from '../../../../hooks/useDrawContext'
import { NumbersList } from './NumbersList'
import { Container } from './style'

function Raffle() {
  const { drawSelected } = useDrawContext()
  const numbers = drawSelected.numeros || ['']

  return (
    <Container>
      {numbers[0] === '' && (
        <Loading color='quina' image={false}>
          Aposte, hoje pode ser o seu dia!
        </Loading>
      )}
      {numbers[0] !== '' && (
        <main>
          <h1 className='visibility'>Resultados</h1>
          <NumbersList numbers={numbers} />
          <footer>
            <span>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</span>
          </footer>
        </main>
      )}
    </Container>
  )
}

export default Raffle
