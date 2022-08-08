import { Home } from './index'
import { render, screen } from '@testing-library/react'

it('renders correctly', async () => {
  const { asFragment } = render(<Home />)

  const title = await screen.findByRole('heading', { name: /mega-sena/i })
  expect(title).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot('create')
})
