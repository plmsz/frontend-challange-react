import { Routes } from '../../routes'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../tests/renderWithBrowserRouter'

it('should reload the page when user clicks the button', async () => {
  render(<Routes />, '/caixa')
  const button = screen.getByRole('button', {
    name: /voltar/i,
    exact: false,
  })
  await userEvent.click(button)

  const headingNotFound = screen.queryByRole('heading', {
    name: /Oops. Página não existe./i,
  })

  expect(headingNotFound).not.toBeInTheDocument()

  const headingHome = await screen.findByRole('heading', { name: /concurso/i })
  expect(headingHome).toBeInTheDocument()
})
