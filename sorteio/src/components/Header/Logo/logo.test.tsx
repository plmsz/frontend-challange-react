import { Logo } from './index'
import { render, act, screen } from '@testing-library/react'

it('renders correctly', async () => {
  const { asFragment } = render(<Logo title='MEGA-SENA' />)

  const title = screen.getByRole('heading', { name: 'MEGA-SENA' })
  expect(title).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot('create')
})
