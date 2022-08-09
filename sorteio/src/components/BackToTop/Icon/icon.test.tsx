import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Icon from '.'
import { timeColor } from '../../../styles/Variables'

it('should render with the right color if props was pass', () => {
  const onClick = jest.fn()
  render(<Icon onClick={onClick} color={timeColor} />)
  const img = screen.getByRole('img', { name: /voltar para o topo da página/i })

  expect(img).toHaveAttribute('fill', `${timeColor}`)
})

it('calls onClick prop on Icon click', () => {
  const onClick = jest.fn()
  render(<Icon onClick={onClick} color={timeColor} />)
  const img = screen.getByRole('img', { name: /voltar para o topo da página/i })
  userEvent.click(img)
  expect(onClick).toHaveBeenCalled()
})
