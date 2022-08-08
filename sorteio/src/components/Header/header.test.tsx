import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../tests/renderWithContext'
import Header from './index'

it.skip('should render the background correctly', async () => {
  render(<Header />)
  const headingHome = await screen.findByRole('heading', { name: /concurso/i })
  expect(headingHome).toBeInTheDocument()

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.logTestingPlaygroundURL()
  const footer = await screen.findByText(
    /este sorteio é meramente ilustrativo e não possui nenhuma ligação com a caixa\./i,
  )
  expect(footer).toBeInTheDocument()

  const quinaOption = (await screen.findByText(/quina/i)) as HTMLOptionElement
  const combobox = screen.getByRole('combobox')
  // userEvent.selectOptions(combobox, quinaOption)

  userEvent.click(quinaOption)

  await waitFor(async () => {
    expect(combobox).toHaveValue('quina')
  })
})
