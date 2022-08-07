import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Routes } from '../../routes'
import { BrowserRouter } from 'react-router-dom'

const renderWithRouter = (ui: JSX.Element, { route = '/error' } = {}) => {
  window.history.pushState({}, 'Error page', route)

  return {
    user: userEvent,
    ...render(ui, { wrapper: BrowserRouter }),
  }
}
it('should goes back to home page, when user clicks the button', async () => {
  renderWithRouter(<Routes />)
  const button = screen.getByRole('button', {
    name: /atualizar página/i,
  })

  await userEvent.click(button)

  const headingError = screen.queryByRole('heading', {
    name: /oops\. página não existe\./i,
  })
  expect(headingError).not.toBeInTheDocument()

  const headingHome = await screen.findByRole('heading', {
    name: /concurso/i,
  })
  expect(headingHome).toBeInTheDocument()
})
