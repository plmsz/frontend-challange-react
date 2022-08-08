import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

it('calls onClick prop on Button click', () => {
  const onClick = jest.fn()
  const children = 'Atualizar a página'

  render(
    <Button onClick={onClick} type='button'>
      {children}
    </Button>,
  )

  const button = screen.getByRole('button')
  userEvent.click(button)
  expect(onClick).toHaveBeenCalled()
})
