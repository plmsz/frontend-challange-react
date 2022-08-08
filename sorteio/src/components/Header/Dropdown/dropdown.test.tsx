/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from '.'

const data = [
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

it('should display the correct number of options', () => {
  const onChange = jest.fn()

  render(<Dropdown data={data} value={data[0].nome} onChange={onChange} />)
  const options = screen.getAllByRole('option')
  expect(options).toHaveLength(6)
})
it.skip('calls onChange prop on combobox change', () => {
  const onChange = jest.fn()
  render(<Dropdown data={data} value={data[0].nome} onChange={onChange} />)

  const combobox = screen.getByRole('combobox')
  userEvent.click(combobox)

  const quinaOption = screen.getByText(/quina/i)

  userEvent.click(quinaOption)
  expect(onChange).toHaveBeenCalled()
})

it.skip('should allow user to change the lottery', async () => {
  render(<Dropdown data={data} value={data[0].nome} onChange={jest.fn()} />)

  const combobox = screen.getByRole('combobox')
  expect(combobox).toHaveValue('mega-sena')
  const quinaOption = screen.getByRole('option', { name: /quina/i }) as HTMLOptionElement
  userEvent.selectOptions(combobox, quinaOption)
  expect(combobox).toHaveValue('quina')

  //   userEvent.click(quinaOption)
  //   expect(quinaOption.selected).toBe(true)
})
