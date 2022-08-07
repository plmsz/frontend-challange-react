import { render, screen } from '@testing-library/react'
import { NumbersList } from '.'

it('should render correctly', () => {
  const numbers = ['10', '21', '12', '53']
  render(<NumbersList numbers={numbers} />)

  const listItems = screen.getAllByRole('listitem')
  expect(listItems.length).toBe(4)
  const items = listItems.map((element) => element.textContent)
  expect(items).toEqual(['10', '21', '12', '53'])
})
