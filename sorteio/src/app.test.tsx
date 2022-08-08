import { render, screen } from './tests/renderWithBrowserRouter'
import App from './App'

it('renders home correctly', async () => {
  const { asFragment } = render(<App />, '/')

  const title = await screen.findByRole('heading', { name: /mega-sena/i })
  expect(title).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot('create')
})
