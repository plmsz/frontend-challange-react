import { Logo } from './index'
import { render, screen } from '@testing-library/react'

it('renders correctly', () => {
  const { asFragment } = render(<Logo title='MEGA-SENA' />)

  const title = screen.getByRole('heading', { name: /mega-sena/i })
  expect(title).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot('create')
})
