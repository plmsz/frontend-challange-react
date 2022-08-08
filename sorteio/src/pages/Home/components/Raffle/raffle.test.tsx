import Raffle from '.'
import DrawContext from '../../../../context/DrawContext'
import { render, screen } from '../../../../tests/renderWithContext'

it('should render a loading text when the drawSelected has the initial values', () => {
  render(<Raffle />)
  const loadingText = screen.getByText(/aposte, hoje pode ser o seu dia!/i)

  expect(loadingText).toBeInTheDocument()
})
it('should render a number list  when the drawSelected has been modified', async () => {
  const MODIFIED_VALUE = {
    drawSelected: { loteria: 0, nome: '', id: '', data: '', numeros: ['10', '21', '12', '53'] },
    setDrawSelected: () => undefined,
  }

  render(<Raffle />, MODIFIED_VALUE)

  render(
    <DrawContext.Provider value={MODIFIED_VALUE}>
      <Raffle />
    </DrawContext.Provider>,
  )

  const footer = await screen.findByText(
    /este sorteio é meramente ilustrativo e não possui nenhuma ligação com a caixa\./i,
  )

  expect(footer).toBeInTheDocument()

  const listItems = screen.getAllByRole('listitem')
  expect(listItems.length).toBe(4)
  const items = listItems.map((element) => element.textContent)
  expect(items).toEqual(['10', '21', '12', '53'])
})
