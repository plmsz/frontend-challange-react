import { BackToTop } from '.'
import { render } from '@testing-library/react'

it('renders correctly', () => {
  const { asFragment } = render(<BackToTop />)
  expect(asFragment()).toMatchSnapshot('create')
})
