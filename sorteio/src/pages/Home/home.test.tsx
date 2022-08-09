import { Home } from './index'
import { act, fireEvent, render, screen, waitFor } from '../../tests/renderWithContext'
import userEvent from '@testing-library/user-event'

it('renders correctly', async () => {
  const { asFragment } = render(<Home />)

  const title = await screen.findByRole('heading', { name: /mega-sena/i })
  expect(title).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot('create')
})

it('should show the information of the first lottery such as the title, contest number, the date and the results', async () => {
  render(<Home />)
  await act(async () => Promise.resolve())

  const megaOption = screen.getByRole('option', { name: /mega/i }) as HTMLOptionElement
  expect(megaOption.selected).toBe(true)

  const title = screen.getByRole('heading', { name: /mega/i })
  expect(title).toBeInTheDocument()

  const contextNumber = screen.getByRole('heading', { name: /1000/i, exact: false })
  expect(contextNumber).toBeInTheDocument()

  const listItems = screen.getAllByRole('listitem')
  const itemsContent = listItems.map((item) => item.textContent)

  expect(itemsContent).toEqual(['1', '2', '3', '4', '5', '6'])
})
it('should show the a title, contest number, the date and the results, after change the lottery', async () => {
  render(<Home />)
  await act(async () => Promise.resolve())

  const combobox = screen.getByRole('combobox', { name: /loterias/i })

  const lotofacilOption = screen.getByRole('option', { name: /lotofácil/i }) as HTMLOptionElement

  userEvent.selectOptions(combobox, lotofacilOption)
  expect(lotofacilOption.selected).toBe(true)

  const title = await screen.findByRole('heading', { name: /lotofácil/i })
  expect(title).toBeInTheDocument()

  const contextNumber = screen.getByRole('heading', { name: /3000/i, exact: false })
  expect(contextNumber).toBeInTheDocument()

  const listItems = screen.getAllByRole('listitem')
  const itemsContent = listItems.map((item) => item.textContent)

  expect(itemsContent).toEqual(['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000'])
})
it('should render a button at the bottom of the page if the screen is long enough', async () => {
  render(<Home />)
  await act(async () => Promise.resolve())

  fireEvent.scroll(window, { target: { scrollY: 180 } })
  const img = screen.getByRole('button', { name: /voltar para o topo da página/i })

  expect(img).toBeInTheDocument()
})
