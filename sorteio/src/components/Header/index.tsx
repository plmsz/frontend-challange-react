import { Background, Container, Dropdown } from './style'
import { Logo } from './Logo'

function Header() {
  const raffle = 'mega-sena'
  const numberGame = '21231'
  const date = new Date('2022-07-31T11:00:16.918Z').toLocaleDateString('pt-BR')
  const lotteries = [
    {
      id: 0,
      nome: 'mega-sena',
    },
    {
      id: 1,
      nome: 'quina',
    },
    {
      id: 2,
      nome: 'lotofácil',
    },
    {
      id: 3,
      nome: 'lotomania',
    },
    {
      id: 4,
      nome: 'timemania',
    },
    {
      id: 5,
      nome: 'dia de sorte',
    },
  ]

  return (
    <Background bgColor={raffle}>
      <Container>
        <Dropdown name='lotteryDropdown'>
          {lotteries.map((item) => (
            <option value={item.nome} key={item.id}>
              {item.nome}
            </option>
          ))}
        </Dropdown>
        <Logo title={raffle} />
        <h2 className='title titleMobile'>CONCURSO Nº {numberGame}</h2>
        <div className='titleDesktop'>
          <h2 className='title'>CONCURSO</h2>
          <p className='subtitle'>
            {numberGame} - {date}
          </p>
        </div>
      </Container>
    </Background>
  )
}

export default Header
