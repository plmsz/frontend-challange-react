/* eslint-disable testing-library/no-wait-for-side-effects */
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../tests/renderWithContext'
import Header from './index'

it('should allow user to change the lottery', async () => {
  render(<Header />)
  const headingHome = await screen.findByRole('heading', { name: /concurso/i })
  expect(headingHome).toBeInTheDocument()

  const combobox = screen.getByRole('combobox', {
    name: /loterias/i,
  })

  const quinaOption = screen.getByRole('option', { name: /quina/i }) as HTMLOptionElement

  await waitFor(async () => {
    userEvent.selectOptions(combobox, quinaOption)
    expect(combobox).toHaveValue('quina')
  })

  const lotomaniaOption = screen.getByRole('option', { name: /lotomania/i }) as HTMLOptionElement

  await waitFor(async () => {
    userEvent.selectOptions(combobox, lotomaniaOption)
    expect(combobox).toHaveValue('lotomania')
  })
})
