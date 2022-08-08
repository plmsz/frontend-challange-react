import userEvent from '@testing-library/user-event'
import { megaColor, timeColor } from '../../styles/Variables'
import { render, screen, act } from '../../tests/renderWithContext'
import Header from './index'

it('should allow user to change the lottery', async () => {
  render(<Header />)
  await act(async () => Promise.resolve())

  const combobox = screen.getByRole('combobox', {
    name: /loterias/i,
  })

  const quinaOption = screen.getByRole('option', { name: /quina/i }) as HTMLOptionElement

  userEvent.selectOptions(combobox, quinaOption)
  expect(combobox).toHaveValue('quina')

  const lotomaniaOption = screen.getByRole('option', { name: /lotomania/i }) as HTMLOptionElement

  userEvent.selectOptions(combobox, lotomaniaOption)
  expect(combobox).toHaveValue('lotomania')
})

it('should show the information of the first lottery such as the title, contest number and date', async () => {
  render(<Header />)

  await act(async () => Promise.resolve())

  const megaOption = screen.getByRole('option', { name: /mega/i }) as HTMLOptionElement
  expect(megaOption.selected).toBe(true)

  const title = screen.getByRole('heading', { name: /mega/i })
  expect(title).toBeInTheDocument()

  const contextNumber = screen.getByRole('heading', { name: /1000/i, exact: false })
  expect(contextNumber).toBeInTheDocument()

  const date = screen.getByText('1000 - 31/07/2022')
  expect(date).toBeInTheDocument()
})

it('should show a title with the lottery name, contest number and date after change the lottery', async () => {
  render(<Header />)
  await act(async () => Promise.resolve())

  const combobox = screen.getByRole('combobox', {
    name: /loterias/i,
  })

  const quinaOption = screen.getByRole('option', { name: /quina/i }) as HTMLOptionElement

  userEvent.selectOptions(combobox, quinaOption)
  expect(combobox).toHaveValue('quina')

  const title = await screen.findByRole('heading', { name: /quina/i })
  expect(title).toBeInTheDocument()

  const contextNumber = screen.getByRole('heading', { name: /2000/i, exact: false })
  expect(contextNumber).toBeInTheDocument()

  const date = screen.getByText('2000 - 08/01/2022')
  expect(date).toBeInTheDocument()
})

it('should change the background to the correct color after change the lottery', async () => {
  render(<Header />)
  await act(async () => Promise.resolve())
  const background = screen.getByRole('banner')
  expect(background).toHaveStyle({ backgroundColor: `${megaColor}` })

  const combobox = screen.getByRole('combobox', { name: /loterias/i })

  const timemaniaOptions = screen.getByRole('option', { name: /timemania/i }) as HTMLOptionElement

  userEvent.selectOptions(combobox, timemaniaOptions)

  const title = await screen.findByRole('heading', { name: /timemania/i })
  expect(title).toBeInTheDocument()
  expect(background).toHaveStyle({ backgroundColor: `${timeColor}` })
})
