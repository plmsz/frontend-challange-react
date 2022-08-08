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

it('should show the information of the firt lottery sucha as the title, contest number and the date', async () => {
  render(<Header />)
  const promise = Promise.resolve()
  const headingHome = await screen.findByRole('heading', { name: /concurso/i })
  expect(headingHome).toBeInTheDocument()

  const megaOption = screen.getByRole('option', { name: /mega/i }) as HTMLOptionElement
  expect(megaOption.selected).toBe(true)

  const title = await screen.findByRole('heading', { name: /mega/i })
  expect(title).toBeInTheDocument()

  const contextNumber = await screen.findByRole('heading', { name: /1000/i, exact: false })
  expect(contextNumber).toBeInTheDocument()

  const date = await screen.findByRole('paragraph', { name: /2022-07-31T11:00:16.918Z/i, exact: false })
  //   const date = screen.getByRole('heading', { name: /31\/07\/2022/i, exact: false })
  //   expect(date).toBeInTheDocument()
  await waitFor(async () => {
    await promise
  })
})

it.skip('should show a title with the lottery name, contest number and date after change the lottery', async () => {
  // const promise = Promise.resolve()
  render(<Header />)
  const promise = Promise.resolve()
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

  const title = await screen.findByRole('heading', { name: /quina/i })
  expect(title).toBeInTheDocument()

  const contextNumber = await screen.findByRole('heading', { name: /2000/i, exact: false })
  expect(contextNumber).toBeInTheDocument()
  // await waitFor(async () => {
  //   await promise
  // })
})
