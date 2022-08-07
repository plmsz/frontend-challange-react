import { render, screen } from '../../tests/test-utils'
import userEvent from '@testing-library/user-event'
import { Routes } from '../../routes'

it('should go back to home page, when user clicks the button', async () => {
  render(<Routes />, '/error')
  const button = screen.getByRole('button', {
    name: /atualizar página/i,
  })

  await userEvent.click(button)

  const headingError = screen.queryByRole('heading', {
    name: /desculpe, tente novamente.\./i,
  })
  expect(headingError).not.toBeInTheDocument()

  const headingHome = await screen.findByRole('heading', {
    name: /concurso/i,
  })
  expect(headingHome).toBeInTheDocument()
})
